// Setup start
const express = require("express")
const cors = require("cors")
const path = require("path")
const app = express()
const fs = require("fs")
//Setup end

// Reading input from terminal start
const port = parseInt(process.argv[2])
console.log(`${port} registered as server port`)
// Reading input from terminal end

// functions start
function randInt(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

function loadJSON(filename, sync=false) {
    if (sync == true) {
        let rawdata = fs.readFileSync(filename)
        return JSON.parse(rawdata)
    } else {
        fs.readFile(filename, (err, data) => {
            if (err) throw err
            return JSON.parse(data)
        })
    }
}

function saveJSON(filename, dict) {
    json = JSON.stringify(dict, null, 4)
    fs.writeFile(filename, json, "utf8", (err) => {
        if (err) {
            console.log("An error occured while writing JSON Object fo File")
        } else {
            console.log("JSON file saved")
        }
    })
}
// functions end

app.use(cors()) // Making sure the browser can request more data after it is loaded on the client computer.

app.use("/static", express.static("public"))


app.get("/", (req, res) => {
    console.log("\nMain page requested")
    res.send("Main page")
})

app.get("/testinput", (req, res) => {
    console.log(`\nTestinput page requested`)
    res.sendFile(path.join(__dirname, "/html/testInput.html"))
})

app.get("/fromjson", (req, res) => {
    res.sendFile(path.join(__dirname, "/html/fromJSON.html"))
})

app.get("/fromjson/articles", (req, res) => {
    console.log("\narticles for /fromjson requested")
    res.sendFile(path.join(__dirname, "/json/articles.json"))
})

app.get("*", (req, res) => {
    console.log("\nNonexistent page requested!")
    res.redirect("/")
})

app.listen(port, () => console.log(`Server started on port ${port}`))