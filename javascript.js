const addBtn = document.querySelector("#addBtn");
const popUp = document.querySelector("#addBookModal");
const books = document.querySelector("#books");

const myLibrary = [];

const Book = function(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
}

addBtn.addEventListener("click", ()=> {
    popUp.classList.add("active");
})

// PopUp AddBook Forms 

function getBook (){
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    return new Book(title, author, pages);

}

// const book = getBook();

function createBook(book){
    // create elements
    const bookDiv = document.createElement('div')
    const title = document.createElement('p')
    const author = document.createElement('p')
    const pages = document.createElement('p')
    const buttonGroup = document.createElement('div')
    const readBtn = document.createElement('button')
    const removeBtn = document.createElement('button')

    //add elements to books
    bookDiv.classList.add("book");
    books.append(bookDiv);
    bookDiv.append(title);
    bookDiv.append(author);
    bookDiv.append(pages);
    bookDiv.append(buttonGroup);
    buttonGroup.classList.add("button-group")
    buttonGroup.append(readBtn);
    buttonGroup.append(removeBtn);

    //set p from book object
    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.pages;

    //add btn text
    readBtn.textContent = "Read";
    removeBtn.textContent = "Remove";

    //book id from array
    const idBook = myLibrary.findIndex(x => x.title === book.title)


    removeBtn.addEventListener("click", () => {
        myLibrary.splice(idBook, 1);
        bookDiv.remove();
        });

}


function checkBookExist(book){
    if(typeof myLibrary.find(x => x.title === book.title)=="object"){
        console.log("Book exist");
        document.querySelector("#errorMsg").innerHTML="Book Exist";
        
    } else {
        myLibrary.push(book)
        createBook(book);
        popUp.classList.remove("active");
        document.querySelector("#addBookForm").reset()
    }
        
}




const submitBtn = document.querySelector("#submitBtn");

submitBtn.addEventListener("click", () => {

    const book = getBook();
    checkBookExist(book);
    

})
