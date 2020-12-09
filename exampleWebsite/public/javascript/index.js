import {textFormat} from "/static/javascript/codeify.js"
const codeifyOUT = document.getElementById("codeifyOUT")
const codeifyIN = document.getElementById("codeifyIN")
const textArea = document.getElementById("textarea")

codeifyIN.addEventListener("input", updateCodeifyOUT)

function updateCodeifyOUT() {
    codeifyOUT.innerHTML = ""

    let text = textFormat(textArea.value, "Body-Text-alignLeft")
    //text.id = "codeifyOUTtext"
    codeifyOUT.appendChild(text)
}