const addBtn = document.querySelector('.addBtn');
const closeBtn = document.querySelector('.closeBtn');
const submitBtn = document.querySelector('.submitBtn')
const content = document.querySelector('.content');
const form = document.querySelector('.input');
let myLibrary = [];

// function addCard() {
//     let card = document.createElement('div');
//     card.classList.add('card');
    
//     // We can appendChild the contents of the book info here.
//     card.textContent = 'Something5';
//     content.insertBefore(card, content.firstChild);
// }



function drawGrid() {
    // Clear all cards before drawing grid.
    while(content.firstChild !== form) {
        content.removeChild(content.firstChild)
    }

    // draw each card.
    for(let i = 0; i < myLibrary.length; i++) {
        let card = document.createElement('div')
        card.classList.add('card');

        let paraTitle = document.createElement('p');
        paraTitle.textContent = `Title: "${myLibrary[i].name}"`;
        card.appendChild(paraTitle);

        let paraAuthor = document.createElement('p');
        paraAuthor.textContent = `Author: "${myLibrary[i].author}"`;
        card.appendChild(paraAuthor);

        let paraPages = document.createElement('p');
        paraPages.textContent = `Pages: "${myLibrary[i].pages}"`;
        card.appendChild(paraPages);

        let paraRead = document.createElement('p');
        // If true, status is read. Otherwise unread.
        myLibrary[i].read ? paraRead.textContent = `Status: Finished` : paraRead.textContent = `Status: Unfinished`;
        card.appendChild(paraRead);

        content.insertBefore(card, content.firstChild);
    }
}

function Book(name, author, pages, read) {
    this.name = name
    this.author = author
    this.pages = pages 
    this.read = read
}

function addBookToLibrary(name, author, pages, read) {
    let book = new Book(name, author, pages, read)
    myLibrary.push(book)
    console.log(myLibrary)
}

// Stuff to do with forms
const title = document.querySelector('.title')

// Submit info
submitBtn.addEventListener("click",
submitInfo)

function submitInfo(event) {
    let bookTitle = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').checked; // true or false


    addBookToLibrary(bookTitle, author, pages, read)
    drawGrid();
    form.style.visibility = 'hidden'; 

    event.preventDefault();
}

// Pop up form.
addBtn.addEventListener("click", () => {
    let elements = document.getElementsByTagName("input");

    // Clear all prior inputs.
    for(let i=0; i < elements.length; i++) {
        if (elements[i].type == 'text') {
            elements[i].value = '';
        } else if(elements[i].type == 'number') {
            elements[i].value = 0;
        } else if(elements[i].type == 'checkbox') {
            elements[i].checked = false;
        }
    }
    form.style.visibility = 'visible';
});

// Close form
closeBtn.addEventListener("click",
closeForm);

function closeForm(event) {
    form.style.visibility = 'hidden';
    event.preventDefault();
}
addBookToLibrary("Mistborn", "Brandon Sanderson", 550, true)
addBookToLibrary("Mistborn", "Brandon Sanderson", 550, true)
addBookToLibrary("Mistborn", "Brandon Sanderson", 550, true)
addBookToLibrary("Mistborn", "Brandon Sanderson", 550, true)
drawGrid()


