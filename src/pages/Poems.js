import books from "../data/poetry-books.json";
import Book from "../components/book/Book";
import Header from "../components/header/Header";
import styled from "@emotion/styled";

const BooksContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignContent: "center",
});

function Poems() {

  return (
    <>
      <Header />
      <BooksContainer>
        {books.map(
          (
            {
              title,
              image,
              date,
              pageCount,
              dateSimple,
            },
            index
          ) => (
            <Book
            key={index}
            id={index}
              title={title}
              image={image}
              date={date}
              dateSimple={dateSimple}
              pageCount={pageCount}
            />
          )
        )}
      </BooksContainer>
    </>
  );
}

export default Poems;
