import { Dialog } from '@mui/material';
import books from '../../data/poetry-books.json';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import { useEffect, useState } from 'react';
import { useMediaQueries } from '../../hooks/useMediaQueries';
import './preview.css';

const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function Preview({ handleOnClose, open, selectedIndex }) {
  const [randomPageNumber, setRandomPageNumber] = useState(0);
  const { isMobilePortrait } = useMediaQueries();

  useEffect(() => {
    if (open === true) {
      setRandomPageNumber(generateRandomNumber(0, books[selectedIndex].poetryPages.length - 1));
    }
  }, [open]);

  return (
    <Dialog onClose={handleOnClose} open={open}>
      <Document file={`${process.env.PUBLIC_URL}${books[selectedIndex].pdf}`} loading={null} onLoadError={null}>
        <Page
          pageNumber={books[selectedIndex].poetryPages[randomPageNumber]}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          scale={isMobilePortrait ? 1 : 1.3}
          loading={null}
          onLoadError={null}
          onRenderError={null}
        />
      </Document>
    </Dialog>
  );
}

export default Preview;
