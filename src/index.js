import React from 'react'
import ReactDOM from 'react-dom';

// CSS
import './index.css';
// setup vars
const books =
[
    {
        id:1,
        title:'A Letter From Your Teacher: On the Last Day',
        author:'Shannon Olsen',
        img:"https://images-na.ssl-images-amazon.com/images/I/61AqjgMxpLL._AC_UL604_SR604,400_.jpg"
    },
    {
        id:2,
        title:'I Love You to the Moon and Back',
        author:'Amelia Hepworth',
        img:"https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL604_SR604,400_.jpg"
    },
    {
        id:3,
        title:'The Palace Papers: Inside the House of',
        author:'Tina Brown',
        img:"https://images-na.ssl-images-amazon.com/images/I/81Po3D6KJLL._AC_UL302_SR302,200_.jpg"
    }
];


function BookList(){
    return (
        <section className='booklist'> 
            {books.map((book)=>{
                const {img,title,author}=book
                return <Book key={book.id} {...book} />;
            })}
        </section>
    );
}

const Book = ({img,title,author}) =>{
    // attribute , eventHandler
    //onClick, onMouseOver
    const clickHandler = (e) => {
        console.log(e);
        console.log(e.target);
        alert('Hello World');
    };
    const complexExample = (author) =>{
        console.log(author);
    };
    return <article className='book' onMouseOver={()=>{
        console.log(author);
    }}>
        <img src={img} alt=""/>
        <h1 onClick={()=>console.log(title)}>{title}</h1>
        <h4>{author}</h4>
        <button type='button' onClick={clickHandler}>Click Me</button>
        <button type='button' onClick={()=>complexExample(author)}>Complex Example</button>
    </article>
};

ReactDOM.render(<BookList/>,document.getElementById('root'));