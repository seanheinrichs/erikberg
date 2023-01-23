import { Dialog } from '@mui/material';
import YouTube from 'react-youtube';
import { useMediaQueries } from '../../hooks/useMediaQueries';
import screenfull from 'screenfull';

function Trailer({ handleOnClose, open }) {
  const { isMobileLandscape, isMobilePortrait } = useMediaQueries();

  const fullScreen = (event) => {
    const iframe = event.target.getIframe();
    if (screenfull.isEnabled) {
      screen.orientation.lock('landscape');
      screenfull.request(iframe);
    }
  };

  const widthDimension = isMobileLandscape ? 0.85 : isMobilePortrait ? 1 : 0.5;
  const heightDimension = isMobileLandscape ? 0.85 : isMobilePortrait ? 0.5 : 0.6;

  const trailerWidth = window.innerWidth * widthDimension;
  const trailerHeight = window.innerHeight * heightDimension;

  const opts = {
    width: trailerWidth,
    height: trailerHeight
  };

  return (
    <Dialog
      PaperProps={{
        sx: {
          maxWidth: trailerWidth,
          maxHeight: trailerHeight,
          borderRadius: '0px',
          overflowY: 'hidden'
        }
      }}
      maxWidth="xl"
      onClose={handleOnClose}
      open={open}>
      <YouTube
        videoId="MWzU1h15KoA"
        opts={opts}
        onPlay={(e) => (isMobileLandscape || isMobilePortrait ? fullScreen(e) : {})}
      />
    </Dialog>
  );
}

export default Trailer;
