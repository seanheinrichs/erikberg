import styled from '@emotion/styled';

export const BookContainer = styled('div')({
  padding: '0em 0em 3em 0em',
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center'
});

export const BookTextContainer = styled('div')(({ isMobilePortrait }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  color: '#73593d',
  width: '50%',
  paddingRight: '2vw',
  fontSize: isMobilePortrait ? '1rem' : 'clamp(1.15rem, 2.15vw, 0.85rem)'
}));

export const BookImageContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  width: '50%',
  paddingRight: '2vw',
  paddingLeft: '2vw'
});

export const BookTitle = styled('span')(({ isMobilePortrait }) => ({
  marginBottom: isMobilePortrait ? '1rem' : '2rem',
  fontSize: isMobilePortrait ? '1.2rem' : 'clamp(1.3rem, 3.5vw, 1.7rem)'
}));

export const BookLink = styled('a')`
  font-size: clamp(1.3rem, 4vw, 1.7rem);
  font-weight: 500;
  a {
    color: #73593d !important;
    text-decoration: none;
  }
  cursor: pointer;
`;

export const ImageContainer = styled('div')(({ isMobilePortrait, isMobileLandscape }) => ({
  maxWidth: '100%',
  height: 'auto',
  width: isMobilePortrait ? '10rem' : isMobileLandscape ? '13rem' : '20rem',
  marginLeft: (isMobilePortrait || isMobileLandscape) && 'auto',
  marginRight: (isMobilePortrait || isMobileLandscape) && 'auto',
  cursor: 'pointer'
}));

export const BookText = styled('span')(({ isMobilePortrait }) => ({
  marginBottom: isMobilePortrait ? '1rem' : '2rem'
}));
