let todo=[], check=true;
while(check){
    let req=prompt("Enter your request: ");
    if(req=="list")
        console.log(todo);
    else if(req=="add"){
        todo.push(prompt("Enter task to add in list:"));
    }
    else if(req=="del"){
        todo.splice(parseInt(prompt("Enter index of task to delete:")), 1);
    }
    else if(req=="quit"){
        check=false;
    }
    else{
        for(task of todo){
            console.log(task, )
        }
    }
}
