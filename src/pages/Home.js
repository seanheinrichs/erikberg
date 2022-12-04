import { Footer } from '../components/footer/Footer';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import styled from '@emotion/styled';

const HomePageContainer = styled('div')(({ isPortrait }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: isPortrait ? 'calc(100vh - 10rem)' : 'calc(100vh - 8vh)',
  justifyContent: 'space-around',
  alignContent: 'center'
}));

const HomePageButton = styled('button')(({ isPortrait }) => ({
  fontSize: isPortrait ? '3em' : '4em',
  fontWeight: 900,
  letterSpacing: '2px',
  paddingBottom: isPortrait ? '10vh' : '15vh',
  color: '#6a7a9f',
  cursor: 'pointer',
  marginLeft: '10%',
  marginRight: '10%',
  background: 'none',
  border: 'none',
  textTransform: 'uppercase',
  fontFamily: 'Caslons'
}));

const HomePageButtons = styled('div')(({ isPortrait }) => ({
  paddingTop: isPortrait ? '10vh' : '20vh',
  display: 'flex',
  flexDirection: 'column'
}));

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
