
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

        this.removeMessage(); 
    }

    static removeMessage(){
        setTimeout(function(){
           document.querySelector('.alert').remove();   
            
        },3000)
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

export default Ui; 