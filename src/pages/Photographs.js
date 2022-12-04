import { useEffect, useState } from 'react';
import Header from '../components/header/Header';

function Photographs() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('/photos')
      .then((response) => response.json())
      .then((data) => setPhotos(data));
  }, []);

  const showPhotos = () =>
    photos.map((photo) => (
      <div key={`${photo}`}>
        <img src={photo} alt={'photos'} />
      </div>
    ));

  return (
    <>
      <Header />
      {photos.length && showPhotos()}
    </>
  );
}

export default Photographs;
