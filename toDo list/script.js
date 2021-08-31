const toggle = document.querySelector('.select-list__item');
const hiddenList = document.querySelector('.list-2');
const hiddenListItems = document.querySelectorAll('.list-2__item');
const listItems = document.querySelectorAll('.list__item');
const input = document.querySelector('.addDo');
const addBtn = document.querySelector('.add-button');
const mainList = document.querySelector('.main-block');

// functions

function handleToggle(e) {
    if (e.target.closest('div') != toggle) return;
    hiddenList.classList.toggle('active')
}

function handleSort(e) {
    let current = e.target.dataset.item;
    listItems.forEach((item) => {
        item.classList.remove('active')
    })
    document.querySelector(`#${current}`).classList.add('active')
    hiddenList.classList.remove('active');
    handleSortV2(current)
}
function handleSortV2(item) {
    if (document.querySelector(`#${item}`).innerHTML == 'All') {
        mainList.querySelectorAll('.todo').forEach(todo => {
            todo.style.display = 'flex'
        })
    }
    else if (document.querySelector(`#${item}`).innerHTML == 'Completed') {
        mainList.querySelectorAll('.todo').forEach(todo => {
            let comp = []
            if (todo.getAttribute('data-done')) comp.push(todo)
            todo.style.display = 'none';
            comp.forEach(todo => {
                todo.style.display = 'flex';
            })
        })
    } else {
        mainList.querySelectorAll('.todo').forEach(todo => {
            let comp = []
            if (!todo.getAttribute('data-done')) comp.push(todo)
            todo.style.display = 'none';
            comp.forEach(todo => {
                todo.style.display = 'flex';
            })
        })

    }
}


function handleAddToDo(e) {
    if (e.target.closest('div') != this) return;
    if (input.value == '') return;
    let newToDo = input.value;
    savingLocalStorage(input.value);
    addingNewToDo(newToDo)

    input.value = ''

}

function addingNewToDo(innerData) {
    mainList.innerHTML += `<div class="todo">
    <div class="cover"></div>
    <span class="todo__text">${innerData}</span>
    <div class="todo-buttons">
        <div class="done-btn"><i class="bi bi-check-lg"></i></div>
        <div class="delete-btn"><i class="bi bi-trash-fill"></i></div>
    </div>
</div>`

}


function handleDone(e) {
    if (!e.target.closest('div').classList.contains('done-btn')) return;
    let parent = e.target.closest('.todo');
    // parent.querySelector('.cover').style.display = 'block';
    // parent.querySelector('.todo__text').classList.add('done');
    // parent.querySelector('.done-btn').classList.add('done');
    parent.classList.add('done')
    parent.setAttribute('data-done', true)
}


function handleDelete(e) {
    if (!e.target.closest('div').classList.contains('delete-btn')) return;
    let parent = e.target.closest('.todo');
    localStorage.setItem('list', JSON.stringify((JSON.parse(localStorage.getItem('list')).filter(item => {
        return item != parent.querySelector('.todo__text').innerHTML;
    }))))
    parent.remove()
    
}
// events


toggle.addEventListener('click', handleToggle);
hiddenListItems.forEach(item => item.addEventListener('click', handleSort));
addBtn.addEventListener('click', handleAddToDo)
// input.addEventListener('keypress', handleAddToDo)
mainList.addEventListener('click', handleDone);

mainList.addEventListener('click', handleDelete)

document.addEventListener('DOMContentLoaded', getTodos)

function savingLocalStorage(data) {
    let list;
    if (localStorage.getItem("list") === null) {
        list = [];
    } else {
        list = JSON.parse(localStorage.getItem("list"));
    }

    list.push(data);
    localStorage.setItem('list', JSON.stringify(list))
}


function getTodos() {
    let list;
    if (localStorage.getItem("list") === null) {
        list = [];
    } else {
        list = JSON.parse(localStorage.getItem("list"));
    }
    list.forEach((todo) => {
        mainList.innerHTML += `<div class="todo">
    <div class="cover"></div>
    <span class="todo__text">${todo}</span>
    <div class="todo-buttons">
        <div class="done-btn"><i class="bi bi-check-lg"></i></div>
        <div class="delete-btn"><i class="bi bi-trash-fill"></i></div>
    </div>
</div>`
    })

}
