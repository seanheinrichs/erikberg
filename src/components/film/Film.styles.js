import styled from '@emotion/styled';

export const FilmContainer = styled('div')({
  padding: '0em 0em 3em 0em',
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center'
});

export const FilmTextContainer = styled('div')(({ isMobilePortrait }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  color: '#73593d',
  width: '50%',
  paddingRight: '2vw',
  fontSize: isMobilePortrait ? '1rem' : 'clamp(1.15rem, 2.15vw, 0.85rem)'
}));

export const FilmImageContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  width: '50%',
  paddingRight: '2vw',
  paddingLeft: '2vw',
  cursor: 'pointer'
});

export const FilmTitle = styled('span')(({ isMobilePortrait }) => ({
  marginBottom: isMobilePortrait ? '1rem' : '2rem',
  fontSize: isMobilePortrait ? '1.2rem' : 'clamp(1.3rem, 4vw, 1.7rem)'
}));

export const FilmText = styled('div')`
    font-size: clamp(1.3rem, 4vw, 1.7rem);
    font-weight: 500;
    cursor: pointer;
    a {
      color: #73593d !important;
      text-decoration: none;
    },
  
  `;

export const ImageContainer = styled('div')(({ isMobilePortrait, isMobileLandscape }) => ({
  maxWidth: '100%',
  height: 'auto',
  width: isMobilePortrait ? '10rem' : isMobileLandscape ? '13rem' : '20rem',
  marginLeft: (isMobilePortrait || isMobileLandscape) && 'auto',
  marginRight: (isMobilePortrait || isMobileLandscape) && 'auto'
}));

export const FilmDescription = styled('span')(({ isMobilePortrait }) => ({
  marginBottom: isMobilePortrait ? '1rem' : '2rem'
}));
