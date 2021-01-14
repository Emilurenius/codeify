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




app.get("/testinput", (req, res) => {

    res.sendFile(path.join(__dirname, "/html/index.html"))
    console.log(`\npage served: /`)
})

app.get("/fromjson", req, res => {

})

app.get("*", function(req, res){
    res.sendFile(path.join(__dirname, "/html/Index.html"))
    console.log("\nNonexistent page requested!")
    console.log(`page served: /`)
})

app.listen(port, () => console.log(`Server started on port ${port}`))