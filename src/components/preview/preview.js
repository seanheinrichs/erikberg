import { Dialog } from '@mui/material';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import { useEffect, useState } from 'react';
import { useMediaQueries } from '../../hooks/useMediaQueries';

const gardenOfCalendarPoetryPages = [
  9, 10, 11, 12, 13, 14, 15, 16, 19, 20, 21, 22, 23, 24, 25, 26, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42,
  43, 44, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75,
  76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89
];

const anthonyReturnsPoetryPages = [
  7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
  37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65,
  66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94,
  95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118,
  119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141,
  142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164,
  165, 166, 167, 168, 169, 170, 171, 172, 173, 174
];

const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function Preview({ handleOnClose, open, selectedIndex }) {
  const [randomPageNumber, setRandomPageNumber] = useState(0);
  const { isMobilePortrait } = useMediaQueries();

  useEffect(() => {
    if (open === true) {
      setRandomPageNumber(
        generateRandomNumber(
          0,
          selectedIndex === 0 ? gardenOfCalendarPoetryPages.length : anthonyReturnsPoetryPages.length
        )
      );
    }
  }, [open]);

  return (
    <Dialog onClose={handleOnClose} open={open}>
      <Document
        file={
          selectedIndex === 0
            ? process.env.PUBLIC_URL + '/the-garden-of-calendars'
            : process.env.PUBLIC_URL + '/anthony-returns'
        }
        loading={null}
        onLoadError={null}>
        <Page
          pageNumber={
            selectedIndex === 0
              ? gardenOfCalendarPoetryPages[randomPageNumber]
              : anthonyReturnsPoetryPages[randomPageNumber]
          }
          renderTextLayer={false}
          renderAnnotationLayer={false}
          scale={isMobilePortrait ? 1 : 1.3}
          loading={null}
          error={null}
          onLoadError={null}
          onRenderError={null}
        />
      </Document>
    </Dialog>
  );
}

export default Preview;
