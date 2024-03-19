import Header from '../../components/header/Header';
import { useState } from 'react';
import Trailer from '../../components/trailer/Trailer';
import films from '../../data/films.json';
import Film from '../../components/film/Film';
import { FilmsContainer } from './Films.styles';

function Films() {
  const [openTrailer, setOpenTrailer] = useState(false);

  return (
    <>
      <Trailer handleOnClose={() => setOpenTrailer(false)} open={openTrailer} />
      <Header />
      <FilmsContainer>
        {films.map(({ title, image, text, description, runtime }, index) => (
          <Film
            key={index}
            title={title}
            image={image}
            text={text}
            description={description}
            runtime={runtime}
            setOpenTrailer={setOpenTrailer}
          />
        ))}
      </FilmsContainer>
    </>
  );
}

export default Films;
