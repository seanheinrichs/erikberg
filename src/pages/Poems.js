import books from '../data/poetry-books.json';
import Book from '../components/book/Book';
import Header from '../components/header/Header';
import styled from '@emotion/styled';
// import { useState } from 'react';
// import Preview from '../components/preview/preview';
import React from 'react';

const BooksContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignContent: 'center'
});

function Poems() {
  // const [openPreview, setOpenPreview] = useState(false);
  // const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      {/* <Preview handleOnClose={() => setOpenPreview(false)} open={openPreview} selectedIndex={selectedIndex} /> */}
      <Header />
      <BooksContainer>
        {books.map(({ title, image, date, pageCount, dateSimple }, index) => {
          return (
            <Book
              key={index}
              id={index}
              title={title}
              image={image}
              date={date}
              dateSimple={dateSimple}
              pageCount={pageCount}
              // setOpenPreview={setOpenPreview}
              // setSelectedIndex={setSelectedIndex}
            />
          );
        })}
      </BooksContainer>
    </>
  );
}

export default Poems;
