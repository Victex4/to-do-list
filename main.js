let addBtn = document.querySelector('.top')
let input = document.querySelector('input')
let error = document.querySelector('.message')
let taskBox = document.querySelector('.task-box')
let testBox = document.querySelector('.test')
let todoArray = JSON.parse(localStorage.getItem('todoItems')) || []

readFromStorage()

addBtn.addEventListener('click', function(){
    if(input.value === ""){
        error.innerHTML = `<span>Plese enter the input field</span>`;
        setTimeout(function(){
            error.innerHTML = ''
        },5000)
    }else{
        let todoObj = {
            todoText:input.value
        }
        taskBox.innerHTML += `
        <div>
            <p class="add2">${input.value}</p>
            <button class="b1">Delete</button>
        </div>
        `
        input.value = ''
        todoArray.push(todoObj)
        localStorage.setItem('todoItems', JSON.stringify(todoArray))
        console.log(todoArray);
    }
})

function readFromStorage(){
    console.log(JSON.parse(localStorage.getItem('todoItems')));
    todoArray.forEach(function(item){
        taskBox.innerHTML += `
        <div>
            <p class="add2">${item.todoText}</p>
            <button class="b1">Delete</button>
        </div>
        `
    })
}

// ARRAY
let array = ['frank', 'victor', 1, true, [], {}]

// OBJECTS
let myObj = {
    firstName:'Frank',
    lastName:'Emma',
    age:10,
    isMarried: false
}

console.log(array[5]);

console.log(myObj.isMarried);

let arrayOfObjs = [
    {
        fName:'Emma',
        age:20
    },
    {
        fName:'Frank',
        age:10
    },
    {
        fName:'Victory',
        age:50
    },
    {
        fName:'Victory',
        age:50
    }
]

console.log(arrayOfObjs);

// arrayOfObjs.forEach(function(item){
//     testBox.innerHTML += `
//     <p>${item.fName}</p>
//     `
// })