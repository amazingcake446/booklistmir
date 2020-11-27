class DB {
    constructor(){
        this.books; 
    }
    static save(bookObj){
        /* load data from local storage */
        if(localStorage.getItem('books')){
            this.books = JSON.parse(localStorage.getItem('books')); 
        }else {
            this.books = []; 
        }
        this.books.push(bookObj); 
        localStorage.setItem('books', JSON.stringify(this.books))
    }
/* save the data back to local storage */

}

export default DB; 