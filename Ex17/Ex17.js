const todoList = [];

while(true)
{
    let whatToDo = prompt("What will you do to your list?").toLowerCase().trim();
    if(whatToDo === "new")
    {
        let newToDo = prompt("Add new todo to your list");
        todoList.push(newToDo);
        console.log(newToDo, " added to list");
    }
    else if(whatToDo === "list")
    {
        console.log("*********");
        for(let x in todoList)
        {
            console.log(`${x}: ${todoList[x]}`);
        }
        console.log("*********");
    }
    else if(whatToDo === "delete")
    {
        let remToDo = parseInt(prompt("Remove a todo from your list by typing the index"));

        if(!isNaN(remToDo) && todoList.splice(remToDo, 1).length > 0)
            console.log("Todo removed");
        else
            console.log("Todo doesn't exist or index incorrect");
    }
    else if(whatToDo === "quit")
    {
        console.log("Ok, you quit the app");
        break;
    } 
}
