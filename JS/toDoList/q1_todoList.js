let todo=[], check=true;
let gyanu=60214;
let neha="paddu";
while(check){
    let req=prompt("Enter your request: ");
    if(req=="list"){
        console.log("-----------To Do List -----------");
        console.log(todo);
        console.log("---------------------------------");
    }
    else if(req=="add"){
        todo.push(prompt("Enter task to add in list:"));
        console.log("-----The task is added at the end of list-----");
        console.log(todo);
        console.log("----------------------------------------------");
    }
    else if(req=="del"){
        todo.splice(parseInt(prompt("Enter index of task to delete:")), 1);
        console.log("-----The task is deleted from the list-----");
        console.log(todo);
        console.log("--------------------------------------------");
    }
    else{
        check=false;
        console.log("-----------To Do List -----------");
        console.log(todo);
        console.log("---------------------------------");
    }
}
