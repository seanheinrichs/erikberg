import styled from '@emotion/styled';
import { useMediaQueries } from '../../hooks/useMediaQueries';

const FilmContainer = styled('div')({
  padding: '0em 0em 3em 0em',
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center'
});

const FilmTextContainer = styled('div')(({ isMobilePortrait }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  color: '#73593d',
  width: '50%',
  paddingRight: '2vw',
  fontSize: isMobilePortrait ? '1rem' : 'clamp(1.15rem, 2.15vw, 0.85rem)'
}));

const FilmImageContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  width: '50%',
  paddingRight: '2vw',
  paddingLeft: '2vw',
  cursor: 'pointer'
});

const FilmTitle = styled('span')(({ isMobilePortrait }) => ({
  marginBottom: isMobilePortrait ? '1rem' : '2rem',
  fontSize: isMobilePortrait ? '1.2rem' : 'clamp(1.3rem, 3.5vw, 1.7rem)'
}));

const FilmText = styled('div')`
  font-size: clamp(1.3rem, 4vw, 1.7rem);
  font-weight: 500;
  cursor: pointer;
  a {
    color: #73593d !important;
    text-decoration: none;
  },

`;

const ImageContainer = styled('div')(({ isMobilePortrait, isMobileLandscape }) => ({
  maxWidth: '100%',
  height: 'auto',
  width: isMobilePortrait ? '10rem' : isMobileLandscape ? '13rem' : '20rem',
  marginLeft: (isMobilePortrait || isMobileLandscape) && 'auto',
  marginRight: (isMobilePortrait || isMobileLandscape) && 'auto'
}));

const FilmDescription = styled('span')(({ isMobilePortrait }) => ({
  marginBottom: isMobilePortrait ? '1rem' : '2rem'
}));

function Film({ title, image, text, description, runtime, setOpenTrailer }) {
  const { isMobilePortrait, isMobileLandscape } = useMediaQueries();

  return (
    <FilmContainer>
      <FilmImageContainer>
        <ImageContainer isMobilePortrait={isMobilePortrait} isMobileLandscape={isMobileLandscape}>
          <img
            src={process.env.PUBLIC_URL + image}
            alt={title}
            width="100%"
            height="100%"
            onClick={() => setOpenTrailer(true)}
          />
        </ImageContainer>
      </FilmImageContainer>
      <FilmTextContainer isMobilePortrait={isMobilePortrait}>
        <FilmTitle isMobilePortrait={isMobilePortrait}>{title}</FilmTitle>
        <FilmDescription isMobilePortrait={isMobilePortrait}>{description}</FilmDescription>
        <FilmDescription isMobilePortrait={isMobilePortrait}>{runtime} minutes</FilmDescription>
        <FilmText onClick={() => setOpenTrailer(true)}>{text}</FilmText>
      </FilmTextContainer>
      <div></div>
    </FilmContainer>
  );
}

export default Film;
