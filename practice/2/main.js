const todos = [
    {
        id: 1,
        text:'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text:'Call the school',
        isCompleted: true
    },
    {
        id: 3,
        text:'Make dinner',
        isCompleted: true
    },
];

//console.log(todos[1].text)

const todoJSON = JSON.stringify(todos);
 //console.log(todoJSON);

//FOR LOOP
 for(let i = 0; i <= 10; i++) {
     //console.log(`For Loop Number: ${i}`);
 }
 
//WHILE LOOP

let i = 0;
while(i <= 10){
//console.log(`While Loop Number: ${i}`)
//i++;
}

for(let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}
