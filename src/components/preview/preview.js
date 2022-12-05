import { Dialog } from '@mui/material';
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';

const PreviewImage = styled('img')({
  maxHeight: '100%',
  maxWidth: '100%'
});

const gardenOfCalendarPoetryPages = [
  9, 10, 11, 12, 13, 14, 15, 16, 19, 20, 21, 22, 23, 24, 25, 26, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42,
  43, 44, 47, 48, 49, 50
];

const anthonyReturnsPoetryPages = [
  7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
  37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50
];

const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function Preview({ handleOnClose, open, selectedIndex }) {
  const [randomPageNumber, setRandomPageNumber] = useState(0);

  useEffect(() => {
    if (open === true) {
      setRandomPageNumber(
        generateRandomNumber(
          0,
          selectedIndex === 0 ? gardenOfCalendarPoetryPages.length - 1 : anthonyReturnsPoetryPages.length - 1
        )
      );
    }
  }, [open]);

  console.log(randomPageNumber);

  return (
    <Dialog onClose={handleOnClose} open={open}>
      <PreviewImage
        src={
          selectedIndex === 0
            ? process.env.PUBLIC_URL +
              `/images/the-garden-of-calendars/the-garden-of-calendars-${gardenOfCalendarPoetryPages[randomPageNumber]}.jpg`
            : process.env.PUBLIC_URL +
              `/images/anthony-returns/anthony-returns-${anthonyReturnsPoetryPages[randomPageNumber]}.jpg`
        }
        alt={'Preview'}
      />
    </Dialog>
  );
}

export default Preview;
