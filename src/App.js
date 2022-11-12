import styled from "@emotion/styled";
import Home from "./pages/Home";
import Poems from "./pages/Poems";
import Films from "./pages/Films";
import Order from "./pages/Order";
import { Routes, Route } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import "./App.css";

const AppContainer = styled("div")({
  height: "100%",
  backgroundColor: "#fdebe9",
});

const Border = styled("div")(({ isPortrait }) => ({
  textAlign: "center",
  height: "100vh",
  borderTop: isPortrait && "5rem solid white",
  borderBottom: isPortrait && "5rem solid white",
  borderLeft: !isPortrait && "8rem solid white",
  borderRight: !isPortrait && "8rem solid white",
  boxSizing: "border-box",
}));

function App() {
  const isPortrait = useMediaQuery("(max-width:600px)");

  return (
    <AppContainer>
      <Routes>
        <Route
          path="/"
          element={
            <Border isPortrait={isPortrait}>
              <Home />
            </Border>
          }
        />
        <Route path="erikberg/*" element={<App />} />
        <Route path="poems" element={<Poems />} />
        <Route path="films" element={<Films />} />
        <Route path="order" element={<Order />} />
      </Routes>
    </AppContainer>
  );
}

export default App;
