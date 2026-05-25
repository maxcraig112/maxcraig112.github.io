export default {
  title: "Max Craig",
  description: "Dev blog — projects, experiments, and random tech thoughts.",
  theme: "dark",
  siteUrl: "https://maxcraig112.github.io",
  integrations: [
    {
      name: "mermaid-renderer",
      hooks: {
        "astro:config:setup": ({ injectScript }) => {
          injectScript(
            "page",
            `
            import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';
            mermaid.initialize({ startOnLoad: false, theme: 'dark' });
            const blocks = document.querySelectorAll('code.language-mermaid');
            for (const code of blocks) {
              const pre = code.parentElement;
              const id = 'mermaid-' + Math.random().toString(36).slice(2, 9);
              try {
                const { svg } = await mermaid.render(id, code.textContent.trim());
                const div = document.createElement('div');
                div.style.cssText = 'text-align:center;margin:1.5rem 0;';
                div.innerHTML = svg;
                pre.replaceWith(div);
              } catch (e) {
                console.error('Mermaid error:', e);
              }
            }
            `
          );
        },
      },
    },
  ],
}
