import { useMediaQueries } from '../../hooks/useMediaQueries';
import { useNavigate } from 'react-router-dom';
import {
  BookContainer,
  BookImageContainer,
  ImageContainer,
  BookTextContainer,
  BookTitle,
  BookText,
  BookLink
} from './Book.styles';

function Book({ id, title, image, date, pageCount, dateSimple, setSelectedIndex, setOpenPreview, linkText }) {
  const navigate = useNavigate();
  const { isMobileLandscape, isMobilePortrait } = useMediaQueries();

  const canOrder = linkText === 'Order Now';

  return (
    <BookContainer>
      <BookImageContainer>
        <ImageContainer
          isMobilePortrait={isMobilePortrait}
          isMobileLandscape={isMobileLandscape}
          onClick={() => {
            setSelectedIndex(id);
            setOpenPreview(true);
          }}>
          <img src={process.env.PUBLIC_URL + image} alt={title} width="100%" height="100%" />
        </ImageContainer>
      </BookImageContainer>
      <BookTextContainer isMobilePortrait={isMobilePortrait}>
        <BookTitle isMobilePortrait={isMobilePortrait}>{title}</BookTitle>
        <BookText isMobilePortrait={isMobilePortrait}>{isMobilePortrait ? dateSimple : date}</BookText>
        <BookText isMobilePortrait={isMobilePortrait}>{pageCount} pages</BookText>
        <BookLink
          isMobilePortrait={isMobilePortrait}
          onClick={canOrder ? () => navigate('/order', { state: { id } }) : undefined}>
          {linkText}
        </BookLink>
      </BookTextContainer>
    </BookContainer>
  );
}

export default Book;
