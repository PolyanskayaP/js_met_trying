/*// theory

const array = [1, 2, 3, 5, 20, 42]
// const arrayStrings = ['k', 'j', 'y']
// const array = new Array(1, 2, 3, 5, 20, 42)

// console.log(array.length)
// console.log(array[10])
console.log(array[array.length - 1])
array[0] = 'privet'
array[array.length] = 'becon' 
console.log(array) */

const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')  

// console.log(inputElement.value)

// const notes = ['записать блок про массивы', 'связать Работыша' ]

// function render() {
//     // for (let i = 0; i < notes.length; i++) {
//     //     listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]))
//     // }   

//     for (let note of notes) {
//         listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))
//     }
// }

// render()

// createBtn.onclick = function () {
//     // listElement.innerHTML =
//     if (inputElement.value.length === 0) {
//         return 
//     }
//     listElement.insertAdjacentHTML('beforeend', getNoteTemplate(inputElement.value))
//     inputElement.value = ''
// }

// function getNoteTemplate(title) {
//     return `
//     <li
//     class="list-group-item d-flex justify-content-between align-items-center"
//     >
//     <span>${title}</span>
//     <span>
//         <span class="btn btn-small btn-success">&check;</span>
//         <span class="btn btn-small btn-danger">&times;</span>
//     </span>
//     </li>
//     `
// }

/*Object theory*/
/*const person = {
    firstName: 'Polina',
    lastName: 'Polyanskaya',
    year: 2003,
    hasPet: false,
    languages: ['ru', 'en', 'tr'],
    getFullName: function() {
        console.log(this.firstName + ' ' + this.lastName)
    }
}

console.log(person.year + ' ' + person['languages'])
const key = 'hasPet'
console.log(person[key])
person.hasPet = true 
console.log(person[key])*/

const notes = [
    {
    title: 'записать блок про массивы',
    completed: false,
    },
    {
    title: 'связать Работыша',
    completed: true,
    },
]

function render() {
    // for (let i = 0; i < notes.length; i++) {
    //     listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]))
    // }   

    for (let note of notes) {
        listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))
    }
}

render()

createBtn.onclick = function () {
    // listElement.innerHTML =
    if (inputElement.value.length === 0) {
        return 
    }
    const newNote = {
        title: inputElement.value, 
        completed: false,
    }
    listElement.insertAdjacentHTML('beforeend', getNoteTemplate(newNote)) 
    inputElement.value = ''
}

function getNoteTemplate(note) {
    return `
    <li
    class="list-group-item d-flex justify-content-between align-items-center"
    >
    <span class = "${note.completed ? 'text-decoration-line-through' : ''}">${note.title}</span>
    <span>
        <span class="btn btn-small btn-${note.completed ? 'warning' : 'success'}">&check;</span>
        <span class="btn btn-small btn-danger">&times;</span>
    </span>
    </li>
    `
}