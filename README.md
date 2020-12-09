# codeify
A module for javascript on the browser. Can be used to turn raw text directly into html with easy syntax using javascript!

Codeify is still in it's infancy, and would greatly benefit from feedback from others than me.
I might know what I want from codeify, but I don't know what you want! 

That's why this repository has a discussions page: https://github.com/Emilurenius/codeify/discussions

# What is codeify?
Codeify is a module for javascript running in the browser. It contains pre written functions in pure javascript, and is used just like any other functions when integrated properly.

The functions in codeify are specifically made to work with text on the page. It is supposed to make it easy to implement a system for displaying text on your webpage,
without the need for painstakingly programming the javascript to put text from a database or json file on the page.

Currently one one function is ready for use, but more are coming!

# What is in this repository?
In this repository you will find an example website, complete with a node.js server. This example website is here to show you what codeify could be used for on your website!

Current examples on the website:
* Simple text editor that displays the result of the text you write in real time.

More coming as I flesh out codeify...

# Set up example website:
First of all, you need the newest version of node.js installed on your computer: https://nodejs.org/en/download/

When you have node.js downloaded, you can either copy the files directly to your computer maunually, or you can use the following git command in the command line:

git clone https://github.com/Emilurenius/codeify.git

To update, make sure you are in the same directory, and write this in the console: git pull.

When all the files are downloaded, follow these steps:
* Open a terminal, and navigate to the folder you just downloaded
* open the folder named "exampleWebsite"
* write the following command in the terminal if on windows: node app.js 80
* write the following command in the terminal if on linux: node app.js 8080
* Open a browser
* Write this in the address line: localhost:80 if on windows, localhost:8080 if on linux.

The website should open up. Now you just explore the examples set up, or change the code to see what happens.

# How to integrate codeify in your own website:
if you are familiar with importing other javascript files into your file, this will probably be easy for you. If it isn't however,  I will explain now:

First you need the codeify.js file. It is availabe in this repository in the following folder:

exampleWebsite/public/javascript

I will assume you are using a node.js Express server like the one I am using in this repository.

If that is the case, make sure to put the codeify.js file in a static folder on the server. Example:

file available at: www.yourpage/static/javascript/codeify.js

This address should send the javascript file as a response. Go here for more info on how to do that: https://expressjs.com/en/starter/static-files.html

Now to import it into your already existing javascript file, write the following code at the top of your desired javascript file:

import {textFormat} from "/static/javascript/codeify.js"

It is very important that the path you write here is the same as the path you can get codeify.js from.

Note that this example imports "textFormat" from codeify. If you want to import another function, simply write it's name instead,
or add a comma and add the name of the other function you want:

import {textFormat, otherFunc} from "/static/javascript/codeify.js"

If everything went right. You should now be ready to use the imported functions.

# How to use textFormat()
Using textFormat in javascript is simple. Write the following code where you want to call the function:

let text = textFormat("Insert some preformatted text here", "html-class-for-styling")

As you might see, textFormat takes two variables:
* The text to be made into html code
* The class of the text that is put on the website

To write text for the function, you just write like you usually would. I have found that the easiest way to give it information from the server is via JSON. More on that later.

If you need to get familiar with how it reacts to input, just set up the example webiste, and try it out!

Now for some functions:
* link: <link,https://desiredwebsite.com,displayedText>

More coming as I make them... Suggestions are also welcome!
