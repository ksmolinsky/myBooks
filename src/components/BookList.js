import { useState } from "react";
import { Button } from "react-bootstrap";
import TotalBooks from "./totalBooks";

export default function BookList({books, onDeleteBook}) {
    

    books.sort((a, b) => {
        const authorA = a.aLastName.toUpperCase();
        const authorB = b.aLastName.toUpperCase();
        if (authorA < authorB ) {
            return -1;
        }
        if (authorA > authorB) {
            return 1
        }

        return 0
    } )
    const [category, setCategory] = useState(books)
    
    
    const genreBtns = (e) => {

        let word = e.target.value;

        if (word === "All") {
            setCategory(books)
        }
         if (word === "Fantasy") {
            const filtered = books.filter(book=>book.genre === "Fantasy");
            setCategory(filtered)
        }
         if (word === "Science Fiction") {
            const filtered = books.filter(book=>book.genre === "Science Fiction");
            setCategory(filtered)
        }
         if (word === "Literary") {
            const filtered = books.filter(book=>book.genre === "Literary");
            setCategory(filtered)
        }
        if (word === "Mystery") {
          const filtered = books.filter(book=>book.genre === "Mystery");
           setCategory(filtered) 
        }
        if (word === "Non-Fiction") {
          const filtered = books.filter(book=>book.genre === "Non-Fiction");
          setCategory(filtered)
        }
    }

  

    return (
      <div className="listdiv">
        <div className="gbtns">
          <Button variant="outline-dark" className="mx-3" size="lg" value="All" onClick={genreBtns}>All</Button>
          <Button variant="outline-dark" className="mx-3" size="lg" value="Fantasy" onClick={genreBtns}>Fantasy</Button>
          <Button variant="outline-dark" className="mx-3" size="lg" value="Science Fiction" onClick={genreBtns}>Science Fiction</Button>
          <Button variant="outline-dark" className="mx-3" size="lg" value="Literary" onClick={genreBtns}>Literary</Button> 
          <Button variant="outline-dark" className="mx=3" size="lg" value="Mystery" onClick={genreBtns}>Mystery</Button>
          <Button variant="outline-dark" className="mx-3" size="lg" value="Non-Fiction" onClick={genreBtns}>Non-Fiction</Button>
        </div>
        <ul className="list">
          {category.map((book) => (
            <TotalBooks book={book} onDeleteBook={onDeleteBook} key={book.id}/>
          ))}
        </ul>
      </div>
    );
}