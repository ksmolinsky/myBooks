import { useState } from "react";
import { Offcanvas, OffcanvasBody, OffcanvasHeader, Button } from "react-bootstrap";

export default function Stats({books}) {

const [show, setShow] = useState(false);

const handleStatsclose = () => setShow(false);
const handleStatsOpen =  () => setShow(true);

const numBooks = books.length
const totalFantasy = books.filter((book) =>
    book.genre.includes("Fantasy")
  ).length;
  const totalLiterary = books.filter((book) =>
    book.genre.includes("Literary")
  ).length;
  const totalSciFi = books.filter((book) =>
    book.genre.includes("Science Fiction")
  ).length;
  const totalMystery = books.filter((book) =>
    book.genre.includes("Mystery")
  ).length;
  const totalNonFiction = books.filter((book) =>
    book.genre.includes("Non-Fiction")
  ).length;

    return (

      <>
      <div className="statsbutton">
      <Button variant="dark" onClick={handleStatsOpen} size="lg">
          By the Numbers
      </Button>
      </div>
      <Offcanvas show={show} onHide={handleStatsclose} placement="top">
          <OffcanvasHeader closeButton>
          </OffcanvasHeader>
          <OffcanvasBody>
              <h1>{`You have ${numBooks} total books in your Bookcase`} </h1>
              <ul className="statslist">
                  <li>{`${totalLiterary} are Literary Books`}</li>
                  <li>{`${totalFantasy} are Fantasy Books`}</li>
                  <li>{`${totalSciFi} are Sci Fi Books`}</li>
                  <li>{`${totalMystery} are Mystery Books`}</li>
                  <li>{`${totalNonFiction} are Non fiction Books`}</li>
              </ul>
          </OffcanvasBody>
      </Offcanvas>
       </>
    );
}