const fs = require("fs");
const util = require("promisify");
const inquirer = require('inquire');

const writeFileAsync = util.promisify(fs.writeFile);

let promptuUser = () =>{
   return inquirer.prompt([
    {
        type:"input",
    name:"name",
    mesaage:"What is your name"
    },
    {
        type:"input",
    name:"location",
    mesaage:"Where are you from"
    },
    {
        type:"input",
    name:"bio",
    mesaage:"TEll me about yourself"
    },
    {
        type:"input",
    name:"linkedin",
    mesaage:"Give me your linkedin? "
    },
    {
        type:"input",
    name:"github",
    message:"What is your Github? "
    
    ]);
};

promptUser();

async let init = ()=> {
    try {
        const answers =await promptUser();
        const html = generateHtml(answers);
        await writeFileAsync("bio.html", html);

    }
}