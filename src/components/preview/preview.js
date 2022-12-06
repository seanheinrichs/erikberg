import { Dialog } from '@mui/material';
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';

const PreviewImage = styled('img')({
  maxHeight: '100%',
  maxWidth: '100%'
});

const gardenOfCalendarPoetryPages = [9, 10, 11, 12, 13, 14, 15, 16, 19];

const anthonyReturnsPoetryPages = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

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
