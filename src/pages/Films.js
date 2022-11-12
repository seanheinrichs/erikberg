import Header from "../components/header/Header";
import films from "../data/films.json";
import Film from "../components/film/Film";
import styled from "@emotion/styled";

const FilmsContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignContent: "center",
});

function Films() {
  return (
    <>
      <Header />
      <FilmsContainer>
        {films.map(
          ({ title, image, text, description, runtime }, index) => (
            <Film
              key={index}
              title={title}
              image={image}
              text={text}
              description={description}
              runtime={runtime}
            />
          )
        )}
      </FilmsContainer>
    </>
  );
}

export default Films;
