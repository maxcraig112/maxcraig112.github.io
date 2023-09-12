document.addEventListener("DOMContentLoaded", function() {
    // Your JavaScript code here
});

const gifContainer = document.getElementById("gif_results");
gifContainer.innerHTML = "";
const checkBox = document.getElementById("captionToggle");

let apiKey = "AIzaSyBXLT3uRiiw6kfejt0DgtJPlpgYngsVx08";
//apiKey = process.env.API_KEY;
// fetch('../configs.json')
//   .then(response => response.json())
//   .then(data => {
//     apiKey = data.api_key;
//     console.log(apiKey); // or do something with the apiKey
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });

// url Async requesting function
function httpGetAsync(theUrl, callback) {
    // create the request object
    var xmlHttp = new XMLHttpRequest();

    // set the state change callback to capture when the response comes in
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            callback(xmlHttp.responseText);
        }
    }

    // open as a GET call, pass in the url and set async = True
    xmlHttp.open("GET", theUrl, true);

    // call send with no params as they were passed in on the url string
    xmlHttp.send(null);

    return;
}

// callback for the top 8 GIFs of search
function tenorCallback_search(responsetext) {
    // Parse the JSON response
    var response_objects = JSON.parse(responsetext);

    top_10_gifs = response_objects["results"];

    // load the GIFs -- for our example we will load the first GIFs preview size (nanogif) and share size (gif)

    document.getElementById("preview_gif").src = top_10_gifs[0]["media_formats"]["nanogif"]["url"];

    document.getElementById("share_gif").src = top_10_gifs[0]["media_formats"]["gif"]["url"];

    return;

}
async function fetchUrls(urls) {
    
    for (const url of urls) {
        console.log("https://flask-env.eba-8pmhw8mm.ap-southeast-2.elasticbeanstalk.com/is-caption-gif/" + url["media_formats"]["gif"]["url"])
        await httpGetAsync("https://flask-env.eba-8pmhw8mm.ap-southeast-2.elasticbeanstalk.com/is-caption-gif/" + url["media_formats"]["gif"]["url"],checkCaptionGif);
    }
  }

function checkCaptionGif(responseText){
    let object = JSON.parse(responseText)
    console.log(object)
    if (object["result"]){
        const gifImage = document.createElement("img");
        gifImage.src = object["url"];
        gifImage.alt = "GIF";
        //console.log(url["media_formats"]["gif"]["url"]);

        //gifItem.appendChild(gifImage);
        gifContainer.appendChild(gifImage);
    }
}
function displayGifs(responsetext) {
    // Parse the JSON response
    var response_objects = JSON.parse(responsetext);

    top_10_gifs = response_objects["results"];

    if (checkBox.checked){
        fetchUrls(top_10_gifs);
    }
    else{
        for (let index = 0; index < top_10_gifs.length; index++) {
            const url = top_10_gifs[index];
            const gifImage = document.createElement("img");
            gifImage.src = url["media_formats"]["gif"]["url"];
            gifImage.alt = "GIF";
            //console.log(url["media_formats"]["gif"]["url"]);

            //gifItem.appendChild(gifImage);
            gifContainer.appendChild(gifImage);
        }
    }
}

// function to call the trending and category endpoints
function grab_data(search_term, lmt) {
    // set the apikey and limit
    var clientkey = "my_test_app";

    // test search term

    // using default locale of en_US
    var search_url = "https://tenor.googleapis.com/v2/search?q=" + search_term + "&key=" +
    apiKey + "&client_key=" + clientkey + "&limit=" + lmt + "&pos=1";

    httpGetAsync(search_url, displayGifs);

    // data will be loaded by each call's callback
    return;
}


// SUPPORT FUNCTIONS ABOVE
// MAIN BELOW

// start the flow
//grab_data();

// Get a reference to the button element by its id
const searchButton = document.getElementById("searchButton");
const searchBox = document.getElementById("searchInput");
const searchLimit = document.getElementById("searchLimit")
    // Add a click event listener to the button
searchButton.addEventListener("click", function() {
    // Your JavaScript code to run when the button is clicked
    const search_term = searchBox.value;
    const gifContainer = document.getElementById("gif_results")
    gifContainer.innerHTML = "";
    grab_data(search_term, searchLimit.value);

    // You can replace the alert with your desired code.
});
