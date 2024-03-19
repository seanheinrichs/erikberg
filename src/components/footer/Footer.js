import { useMediaQuery } from '@mui/material';
import { FooterText, PhoneNumber } from './Footer.styles';

export const Footer = () => {
  const isPortrait = useMediaQuery('(max-width:600px)');

  return (
    <FooterText isPortrait={isPortrait}>
      <>
        <PhoneNumber isPortrait={isPortrait}>(437) 522-4756</PhoneNumber>
        <a href="mailto:erikjoshuaberg@gmail.com">erikjoshuaberg@gmail.com</a>
      </>
    </FooterText>
  );
};
