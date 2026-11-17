// Node.js program to demonstrate the
// fs.readdir() method

function Files() {
    // Import the filesystem module
    const fs = require('fs');
    const files = []

    // Function to get current filenames
    // in directory with "withFileTypes"
    // set to "true" 

    fs.readdir(__dirname, 
    { withFileTypes: true },
    (err, files) => {
    console.log("\nCurrent directory files:");
    if (err)
        console.log(err);
    else {
        files.forEach(file => {
            console.log(file);
            files.push(file)
        })
    }
    })
}

export default Files;


// SRCs:
// https://www.geeksforgeeks.org/node-js/node-js-fs-readdir-method/
// https://stackoverflow.com/questions/32382450/dynamically-display-html-elements-via-loop