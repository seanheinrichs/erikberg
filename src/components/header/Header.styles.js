import styled from '@emotion/styled';

export const HomeButtonContainer = styled('div')(({ isMobilePortrait, isMobileLandscape }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  gap: isMobileLandscape ? '15%' : isMobilePortrait ? '15%' : '10%',
  width: '100%'
}));

export const HomeButton = styled('button')(({ isMobileLandscape, isMobilePortrait }) => ({
  border: 'none',
  backgroundColor: 'inherit',
  fontFamily: 'Caslons',
  padding: '2rem 0rem 2rem 0rem',
  fontSize: isMobileLandscape ? '3vmax' : isMobilePortrait ? '2em' : '2em',
  cursor: 'pointer',
  color: '#6a7a9f'
}));
