import { useMediaQueries } from '../../hooks/useMediaQueries';
import {
  FilmContainer,
  FilmImageContainer,
  ImageContainer,
  FilmTextContainer,
  FilmTitle,
  FilmDescription,
  FilmText
} from './Film.styles';

function Film({ title, image, text, runtime, setOpenTrailer }) {
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
        <FilmDescription isMobilePortrait={isMobilePortrait}>A friendship ends in a blizzard</FilmDescription>
        <FilmDescription isMobilePortrait={isMobilePortrait}>{runtime} minutes</FilmDescription>
        <FilmText onClick={() => setOpenTrailer(true)}>{text}</FilmText>
      </FilmTextContainer>
      <div></div>
    </FilmContainer>
  );
}

export default Film;
