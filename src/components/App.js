import { useState } from "react";
import Header from "./header";
import { Books } from "./shared/books";
import BookList from "./BookList";
import Addbook from "./Addbook";
import { Row, Col, Container } from "react-bootstrap";
import Stats from "./Stats";

export default function App() {
  const [books, setBooks] = useState(Books);

  function handleAddBook(book) {
    setBooks((books) => [...books, book]);
  }

  function handleDeleteBook(id) {
    setBooks((books) => books.filter((book)=> book.id !== id))
  }

  return (
    <div className="App">
      <Header />
      <Container>
        <Row>
          <Col>
            <Addbook onAddBook={handleAddBook} books={books} />
          </Col>
          <Col lg={6}>
            <BookList books={books} onDeleteBook={handleDeleteBook} />
          </Col>
          <Col>
            <Stats books={books} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
