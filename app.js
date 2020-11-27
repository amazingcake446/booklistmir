/* import */
import Book from '/book.js';
import Ui from '/ui.js'; 
/*********** Click on the button ***********/

/* I need to select an event */
const form = document.querySelector('.book-form');

form.addEventListener('submit', addBook);


/* create book object */
function addBook(event) {
    /* prevent default behavior */
    event.preventDefault();

    const isbn = document.querySelector('#isbn').value;
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;

    if (isbn && title && author != '') {

        /* creating an object using the book class constructor */
        const book = new Book(isbn, title, author);
        console.log(book);


        /* renderToDom */
        Ui.renderToDom(book);


        Ui.showMessage('success', 'Book added :D ')

        /* clear inputfields */
        Ui.clearInputFields();

    } else {
        Ui.showMessage('warning', 'All fields are required')    
    }
}

