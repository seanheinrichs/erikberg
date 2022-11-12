import styled from "@emotion/styled";
import { useNavigate, useLocation } from "react-router-dom";
import { useMediaQueries } from '../../hooks/useMediaQueries';

const HomeButtonContainer = styled("div")(
  ({ isMobilePortrait, isMobileLandscape }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: isMobileLandscape ? "15%" : isMobilePortrait ? "15%" : "10%",
    width: "100%",
  })
);

const HomeButton = styled("button")(
  ({ isMobileLandscape, isMobilePortrait }) => ({
    border: "none",
    backgroundColor: "inherit",
    fontFamily: "Caslons",
    padding: "2rem 0rem 2rem 0rem",
    fontSize: isMobileLandscape ? "3vmax" : isMobilePortrait ? "2em" : "2em",
    cursor: "pointer",
    color: "#6a7a9f",
  })
);

const Routes = {
  Poems: "/poems",
  Films: "/films",
};

function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { isMobileLandscape, isMobilePortrait } = useMediaQueries();

  return (
    <HomeButtonContainer
      isMobilePortrait={isMobilePortrait}
      isMobileLandscape={isMobileLandscape}
    >
      <HomeButton
        isMobileLandscape={isMobileLandscape}
        isMobilePortrait={isMobilePortrait}
        onClick={() => navigate("/")}
      >
        HOME
      </HomeButton>
      {pathname !== Routes.Poems && (
        <HomeButton
          isMobileLandscape={isMobileLandscape}
          isMobilePortrait={isMobilePortrait}
          className="btn"
          onClick={() => navigate("/poems")}
        >
          POEMS
        </HomeButton>
      )}
      {pathname !== Routes.Films && (
        <HomeButton
          isMobileLandscape={isMobileLandscape}
          isMobilePortrait={isMobilePortrait}
          className="btn"
          onClick={() => navigate("/films")}
        >
          FILMS
        </HomeButton>
      )}
    </HomeButtonContainer>
  );
}

export default Header;
