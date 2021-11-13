// JQuery
$.noConflict()
jQuery(document).ready(function($) {
    
})

// JavaScript
const addForm = document.querySelector('.add-form');
const list = document.querySelector('.todo-list');
const search = document.querySelector('.search-input');

// Generating Todo
const generateTemplate = todo => {
    const html = `<li class="todo-item"> ${todo} <i class="fas fa-trash-alt delete" title="Remove todo"></i> </li>`;
    list.innerHTML += html;
};

addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const todo = addForm.add.value.trim();
    if (todo.length) {
        generateTemplate(todo);
        addForm.reset();
    }
});

// Delete Todos
list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

// Search function
const filterTodos = (userSearch) => {
    Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(userSearch))
    .forEach((todo) => todo.classList.add('filtered'));

    Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(userSearch))
    .forEach((todo) => todo.classList.remove('filtered'));
};

// Keyup event
search.addEventListener('keyup', () => {
    const userSearch = search.value.trim().toLowerCase();
    filterTodos(userSearch);
});