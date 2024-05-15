let toDoList = [
    {name: 'play', status: 'In progress', priority: 'low'},
    {name: 'walk', status: 'In progress', priority: 'medium'},
    {name: 'sleep', status: 'Done', priority: 'high'},   
    {name: 'eat', status: 'Done', priority: 'high'} 
];

function showList(){
    toDoList.forEach(element => {
        if(element == toDoList[0]){
            console.log('-----START-----' + `\nTask: ${element.name}` + `\nStatus: ${element.status}` + `\nPriority: ${element.priority}` + '\n---------------'); 
        }else if(element == toDoList[toDoList.length - 1]) {
            console.log(`Task: ${element.name}` + `\nStatus: ${element.status}` + `\nPriority: ${element.priority}` + '\n------END------');
        } else {
            console.log(`Task: ${element.name}` + `\nStatus: ${element.status}` + `\nPriority: ${element.priority}` + '\n---------------');
        }
    })
}

function addTask(nValue, sValue, pValue){
    try{
        errorFinder(nValue, sValue, pValue);
        if(toDoList.find(i => i.name == nValue)){
            console.log(`Task: ${nValue} is already there`);
        } else {
            toDoList.push({name : nValue, status: sValue, priority: pValue});
        }
    } catch (error){
        console.log(error.message);
    }
}

function deleteTask(nValue){
    const indexValue = toDoList.find(i => i.name == nValue);
    if(indexValue === undefined){
        console.log(`Task: ${nValue} does't exist`);
    } else {
        toDoList.splice(toDoList.indexOf(indexValue), 1);
    }
}

function changeTask(nValue, sValue, pValue){
    try {
        errorFinder(nValue, sValue, pValue);
        const indexValue = toDoList.find(i => i.name == nValue);
        if(indexValue === undefined){
            console.log(`Task: ${nValue} does't exist`);
        } else {
            toDoList[toDoList.indexOf(indexValue)] = {name: nValue, status: sValue, priority: pValue}; 
        }
    } catch (error){
        console.log(error.message);
    }
}

function errorFinder(nValue, sValue, pValue){
    if (typeof nValue !== "string" || typeof sValue !== "string" || typeof pValue !== "string") {
		throw new Error("Ошибка: значение не является строкой");
    }
    if (nValue.length > 20 || sValue.length > 20 || pValue.length > 20) {
        throw new Error("Строка слишком длинная");
    } 
}

addTask('jump', 'In progress', 'low')
deleteTask('walk')
changeTask('play', 'Done', 'high')
showList()