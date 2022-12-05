import styled from '@emotion/styled';
import { useMediaQueries } from '../../hooks/useMediaQueries';
import { useNavigate } from 'react-router-dom';

const BookContainer = styled('div')({
  padding: '0em 0em 3em 0em',
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center'
});

const BookTextContainer = styled('div')(({ isMobilePortrait }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  color: '#73593d',
  width: '50%',
  paddingRight: '2vw',
  fontSize: isMobilePortrait ? '1rem' : 'clamp(1.15rem, 2.15vw, 0.85rem)'
}));

const BookImageContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  width: '50%',
  paddingRight: '2vw',
  paddingLeft: '2vw'
});

const BookTitle = styled('span')(({ isMobilePortrait }) => ({
  marginBottom: isMobilePortrait ? '1rem' : '2rem',
  fontSize: isMobilePortrait ? '1.2rem' : 'clamp(1.3rem, 3.5vw, 1.7rem)'
}));

const BookLink = styled('a')`
  font-size: clamp(1.3rem, 4vw, 1.7rem);
  font-weight: 500;
  a {
    color: #73593d !important;
    text-decoration: none;
  }
  cursor: pointer;
`;

const ImageContainer = styled('div')(({ isMobilePortrait, isMobileLandscape }) => ({
  maxWidth: '100%',
  height: 'auto',
  width: isMobilePortrait ? '10rem' : isMobileLandscape ? '13rem' : '20rem',
  marginLeft: (isMobilePortrait || isMobileLandscape) && 'auto',
  marginRight: (isMobilePortrait || isMobileLandscape) && 'auto',
  cursor: 'pointer'
}));

const BookText = styled('span')(({ isMobilePortrait }) => ({
  marginBottom: isMobilePortrait ? '1rem' : '2rem'
}));

function Book({ id, title, image, date, pageCount, dateSimple, setSelectedIndex, setOpenPreview }) {
  const navigate = useNavigate();
  const { isMobileLandscape, isMobilePortrait } = useMediaQueries();

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
        <BookLink isMobilePortrait={isMobilePortrait} onClick={() => navigate('/order', { state: { id } })}>
          Order Now
        </BookLink>
      </BookTextContainer>
    </BookContainer>
  );
}

export default Book;
