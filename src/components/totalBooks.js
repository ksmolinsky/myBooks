import { Button} from "react-bootstrap";

export default function TotalBooks({ book, onDeleteBook }) {
  return (
    <div>
      <li className="list">
        <Button variant="outline-dark" onClick={() => onDeleteBook(book.id)} size="xs" className="mx-3">x</Button>
        <span>
          {" "}
          <em>{book.title}</em> by {book.aFirstName} {book.aLastName}{" "}
        </span>
      </li>
    </div>
  );
}
