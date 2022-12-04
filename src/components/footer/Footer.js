import styled from '@emotion/styled';
import { useMediaQuery } from '@mui/material';

const FooterText = styled('div')(({ isPortrait }) => ({
  color: '#6a7a9f',
  fontWeight: 1000,
  fontSize: '1rem',
  paddingBottom: isPortrait ? '0' : '8vh'
}));

const PhoneNumber = styled('div')(({ isPortrait }) => ({
  marginBottom: isPortrait ? '10px' : '3px'
}));

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
