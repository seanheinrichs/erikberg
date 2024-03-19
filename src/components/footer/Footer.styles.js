import styled from '@emotion/styled';

export const FooterText = styled('div')(({ isPortrait }) => ({
  color: '#6a7a9f',
  fontWeight: 1000,
  fontSize: '1rem',
  paddingBottom: isPortrait ? '0' : '8vh'
}));

export const PhoneNumber = styled('div')(({ isPortrait }) => ({
  marginBottom: isPortrait ? '10px' : '3px'
}));
