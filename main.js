// const { format } = require("path");

searchForm=document.querySelector('.search-form');
document.querySelector('#search-btn').onclick=()=>{
    searchForm.classList.toggle('active');
}
window.onscroll=()=>{
    searchForm.classList.remove('active');
    if(window.scrollY>80){
        document.querySelector('header .header-2').classList.add('active');
    }else{
        document.querySelector('header .header-2').classList.remove('active');
    }

    
}

window.onload
=()=>{
    if(window.scrollY>80){
        document.querySelector('header .header-2').classList.add('active');
    }else{
        document.querySelector('header .header-2').classList.remove('active');
    }
}
document.getElementById("button").addEventListener("click",function(){
    document.querySelector(".popup").style.display="flex";
})

document.querySelector(".fa.fa-close").addEventListener("click",function(){
    document.querySelector(".popup").style.display="none";})
let title=document.getElementById("title");
let author=document.getElementById('author');
let pages=document.getElementById('pages');
let read=document.getElementById('checkbox');
let submit=document.querySelector('submit');
let card=document.getElementById("card")
let newBook;


let myLibrary=[];
 
function Book(title,author,pages,read){
    this.title=title.value
    this.author=author.value
    this.pages=pages.value
    this.read=read.value
    return this;
    
}

function getDataForm(Book){
    myLibrary.push(Book)
    console.log(myLibrary);
    setData();
    render();
    

}
// setting Library to be stored in local storage
function setData() {
    localStorage.setItem(`myLibrary`, JSON.stringify(myLibrary));
}

function render(){
    const display = document.getElementById('library');
    const books = document.querySelectorAll('.book');
    books.forEach(book => display.removeChild(book));
   
    for (let i=0; i<myLibrary.length; i++){
        
        createbook(myLibrary[i]);
    }
}

document.querySelector(".submit").addEventListener("click",function(e){
    e.preventDefault();
    newBook = new Book(title,author,pages,read);
    getDataForm(newBook);
    
    document.querySelector(".popup").style.display="none";
    
    
    
    })




function createbook(item){
    const library=document.querySelector('#library');
    const bookDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const pagesDiv = document.createElement('div');
    const readDiv=document.createElement('div');
    
    // console.log(item.pages)
    
    bookDiv.classList.add('book');
    bookDiv.setAttribute('id',myLibrary.indexOf(item));

    titleDiv.textContent = item.title;
    titleDiv.classList.add('title');
    bookDiv.appendChild(titleDiv);

    authorDiv.textContent=item.author;
    authorDiv.classList.add('author');
    bookDiv.appendChild(authorDiv);

    pagesDiv.textContent = item.pages;
    pagesDiv.classList.add('pages');
    bookDiv.appendChild(pagesDiv);

    
    library.appendChild(bookDiv);
    

}

//pulls books from local storage when page is refreshed
function restore() {
    if(!localStorage.myLibrary) {
        render();
    }else {
        let objects = localStorage.getItem('myLibrary') // gets information from local storage to use in below loop to create DOM/display
        objects = JSON.parse(objects);
        myLibrary = objects;
        render();
    }
}

restore();