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



/******** show the result in DOM ***********/




/*************** Classes ************/
class Book {
    constructor(isbn, title, author) {
        this.isbn = isbn;
        this.title = title;
        this.author = author;
    }
}


/* Ui */

class Ui {
  
    static showMessage(className, message){
        /* Create the element */
        const div = document.createElement('div'); 
        const messageText = document.createTextNode(message)
        div.classList = `alert alert-${className} text-center`;

        div.appendChild(messageText); 
        
        /* show the the element on the DOM */
        const container = document.querySelector('.container')
        const form = document.querySelector('.book-form'); 
        container.insertBefore(div, form); 
    }


    static renderToDom(bookObj) {
        const tableBody = document.querySelector('.table-body');

        let html =
            `
            <tr>
                <th scope="row"></th>
                <td>${bookObj.isbn}</td>
                <td>${bookObj.title}</td>
                <td>${bookObj.author}</td>
            </tr>
        `;
        tableBody.innerHTML += html; 

    }

    static clearInputFields() {
        let isbn = document.querySelector('#isbn')
        let title = document.querySelector('#title')
        let author = document.querySelector('#author')

        isbn.value = '';
        title.value = '';
        author.value = '';
    }
}