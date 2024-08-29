import { useState } from "react";
import { Button, Modal, ModalBody, ModalHeader, ModalTitle, Form, FormSelect, FormLabel, FormControl, FormGroup, ModalFooter } from "react-bootstrap";

export default function Addbook({onAddBook}) {
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState("");
    const [aFirstName, setaFirstName] = useState("")
    const [aLastName, setaLastName] = useState("");
    const [genre, setGenre] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleSubmit(e) {
        e.preventDefault();

        if (!aLastName || !title) return
    

    const newBook = {
        id: Date.now(),
        aFirstName,
        aLastName,
        title,
        genre,
  
      };

      onAddBook(newBook)
      setShow(false)
      setTitle("")
      setaFirstName("")
      setaLastName("")
      
    }



    return (
      <>
      <div className="addbutton">
        <Button size="lg" variant="dark" onClick={handleShow}>
          Add a Book
        </Button>
        </div>

        <Modal show={show} onHide={handleClose}>
          <ModalHeader closeButton>
            <ModalTitle>Add Book</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={handleSubmit}>
              <FormGroup className="mx-3">
                <FormLabel>Book Title</FormLabel>
                <FormControl
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="mx-3">
                <FormLabel>Author's First Name </FormLabel>
                <FormControl
                  type="text"
                  value={aFirstName}
                  onChange={(e) => setaFirstName(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="mx-3">
                <FormLabel>Author's Last Name </FormLabel>
                <FormControl
                  type="text"
                  value={aLastName}
                  onChange={(e) => setaLastName(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="mx-3">
                <FormLabel>Genre</FormLabel>
                <FormSelect
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                >
                  <option>Choose Genre</option>
                  <option value="Literary">Literary</option>
                  <option value="Fantasy">Fantasy</option>
                  <option value="Science Fiction">Science Fiction</option>
                  <option value="Mystery">Mystery</option>
                  <option value="Non-Fiction">Non Fiction</option>
                </FormSelect>
              </FormGroup>
                <ModalFooter className="mt-3">
                <Button variant="dark" type="submit" onClick={handleSubmit}>
                  Add
                </Button>
                </ModalFooter>
            </Form>
          </ModalBody>
        </Modal>
      </>
    );
}