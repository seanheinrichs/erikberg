import { useNavigate, useLocation } from 'react-router-dom';
import { useMediaQueries } from '../../hooks/useMediaQueries';
import { HomeButtonContainer, HomeButton } from './Header.styles';

const Routes = {
  Poems: '/poems',
  Films: '/films'
};

function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { isMobileLandscape, isMobilePortrait } = useMediaQueries();

  return (
    <HomeButtonContainer isMobilePortrait={isMobilePortrait} isMobileLandscape={isMobileLandscape}>
      <HomeButton
        isMobileLandscape={isMobileLandscape}
        isMobilePortrait={isMobilePortrait}
        onClick={() => navigate('/')}>
        HOME
      </HomeButton>
      {pathname !== Routes.Poems && (
        <HomeButton
          isMobileLandscape={isMobileLandscape}
          isMobilePortrait={isMobilePortrait}
          className="btn"
          onClick={() => navigate('/poems')}>
          POEMS
        </HomeButton>
      )}
      {pathname !== Routes.Films && (
        <HomeButton
          isMobileLandscape={isMobileLandscape}
          isMobilePortrait={isMobilePortrait}
          className="btn"
          onClick={() => navigate('/films')}>
          FILMS
        </HomeButton>
      )}
    </HomeButtonContainer>
  );
}

export default Header;
