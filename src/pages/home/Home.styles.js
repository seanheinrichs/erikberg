import styled from '@emotion/styled';

export const HomePageContainer = styled('div')(({ isPortrait }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: isPortrait ? 'calc(100vh - 10rem)' : 'calc(100vh - 8vh)',
  justifyContent: 'space-around',
  alignContent: 'center'
}));

export const HomePageButton = styled('button')(({ isPortrait }) => ({
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

export const HomePageButtons = styled('div')(({ isPortrait }) => ({
  paddingTop: isPortrait ? '10vh' : '20vh',
  display: 'flex',
  flexDirection: 'column'
}));
