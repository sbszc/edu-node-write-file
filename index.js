const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Gimme your name\n", (name) => {
    writeToFile("name.txt", name);
    rl.close();
});

function writeToFile(file, data){
    fs.writeFile(file, data, err => {if(err)console.log(err)});
}