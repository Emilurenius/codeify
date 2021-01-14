import {textFormat} from "/static/javascript/codeify.js" // Import codeify function "textFormat". remember to change address when using your own website!
const address = window.location.origin
const articlesContainer = document.getElementById("articles")

function getJSON(url) {
    var j = []
    $.ajax({
        type: "GET",
        url: url,
        dataType: "json",
        success: function(data) { j = data},
        async: false
    })
    return j
}

const articles = getJSON(`${address}/fromjson/articles`) // Load JSON file from website

for (let article in articles) { // Loop through all key, value pairs inside the JSON file
    const articleBox = document.createElement("div") // Container for the article
    articleBox.classList.add("Content-box") // Assign desired class for div

    const articleHeader = textFormat(article, "Main-Text") // Get header from the key
    const bodyText = textFormat(articles[article], "Body-Text-alignLeft") // Get body text from the value
    
    articleBox.appendChild(articleHeader) // Add header to div
    articleBox.appendChild(bodyText) // Add body text to div
    articlesContainer.appendChild(articleBox) // Add div to website
}