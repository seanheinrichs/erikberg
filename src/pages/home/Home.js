import { Footer } from '../../components/footer/Footer';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import { HomePageContainer, HomePageButtons, HomePageButton } from './Home.styles';

function Home() {
  const navigate = useNavigate();
  const isPortrait = useMediaQuery('(max-width:600px)');

  return (
    <HomePageContainer isPortrait={isPortrait}>
      <HomePageButtons>
        <HomePageButton onClick={() => navigate('/poems')} isPortrait={isPortrait}>
          Poems
        </HomePageButton>
        <HomePageButton onClick={() => navigate('/films')} isPortrait={isPortrait}>
          Films
        </HomePageButton>
      </HomePageButtons>
      <Footer />
    </HomePageContainer>
  );
}

export default Home;
