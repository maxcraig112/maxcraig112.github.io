import fs from "node:fs"
import path from "node:path"

// compiiile-pro's `css` option builds its import path with Node's path.join(),
// which uses backslashes on Windows and breaks the browser-side import().
// Inject the stylesheet directly instead, via Astro's injectScript hook.
const injectCustomCss = () => ({
  name: "inject-custom-css",
  hooks: {
    "astro:config:setup": ({ injectScript }) => {
      const customCss = fs.readFileSync(path.join(process.cwd(), "custom.css"), "utf8")
      injectScript(
        "page",
        `
        const styleSheet = document.createElement("style")
        styleSheet.innerText = ${JSON.stringify(customCss)}
        document.head.appendChild(styleSheet)
        `
      )
    }
  }
})

export default {
  title: "maxcraig.me",
  description: "Software Engineer based in Sydney, Australia",
  theme: "dark",
  siteUrl: "https://maxcraig.me",
  integrations: [injectCustomCss()],
}
