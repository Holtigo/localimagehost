/*execute this file on index.html page load*/
/*window.addEventListener('load', misc);*/


/*
function misc() {
    let fs = require('fs');
    let files = fs.readdirSync('../vaporwave/');

    for (let file in files) {
        const img = new Image();
        img.src = '../vaporwave/' + files[file];
        img.className = 'image';
        img.title = file;
        const div = document.createElement('div');
        div.className = 'image-container';
        div.appendChild(img);
        document.getElementById('result').appendChild(div);
    }
}*/


document.querySelector("#files").addEventListener("change", (e) => { // When the user selects a file
    if (window.File && window.FileReader && window.FileList && window.Blob) { // Check if the browser supports the File API
        const files = e.target.files; // Get the files from input
        const output = document.querySelector("#result"); // Get the output element
        output.innerHTML = ""; // Clear the output element
        for (let i = 0; i < files.length; i++) { // Loop through the files
            if (!files[i].type.match("image")) continue; // If not an image, skip to the next file
            const picReader = new FileReader(); // Create a FileReader
            picReader.addEventListener("load", function (event) { // Add an event listener to wait for the file to load
                const picFile = event.target; // Get the file from the event
                const div = document.createElement("div"); // Create a div element
                div.className = "image-container"; // Add the class name
                const div2 = document.createElement("div"); // Create a div element
                div2.className = "imagediv"; // Add the class name
                div.appendChild(div2); // Add the div to the div
                div2.innerHTML = `<img class="image" src="${picFile.result}" title="${picFile.name}"/>`; // Add the image to the div
                div2.style.backgroundImage = `url(${picFile.result})`; // Add the image to the div
                output.appendChild(div); // Add the div to the output element
            });
            picReader.readAsDataURL(files[i]); // Read the file
        }
    } else {
        alert("Your browser does not support File API");
    }
});