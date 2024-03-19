import styled from '@emotion/styled';

export const OrderContainer = styled('div')(({ isMobileLandscape, isMobilePortrait }) => ({
  width: isMobilePortrait ? '90%' : isMobileLandscape ? '70%' : '50%',
  height: '100%',
  position: 'absolute',
  // overflow: "hidden", // if things break try putting this back
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  flexDirection: 'column',
  paddingLeft: isMobilePortrait ? '5%' : isMobileLandscape ? '15%' : '25%',
  paddingRight: isMobilePortrait ? '5%' : isMobileLandscape ? '15%' : '25%'
}));

export const BackButtonContainer = styled('div')(({ isMobileLandscape }) => ({
  maxWidth: '100%',
  maxHeight: '100%',
  paddingBottom: '4vh',
  paddingTop: isMobileLandscape && '2vh',
  cursor: 'pointer'
}));

export const TotalContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  justifyContent: 'flex-end'
});

export const TotalLine = styled('hr')({
  width: '8em',
  marginRight: '0px',
  borderTop: '3px solid',
  color: '#73593d'
});

export const TotalPrice = styled('div')({
  color: '#73593d',
  fontWeight: 'bold',
  fontSize: '1.3em',
  width: '100%',
  textAlign: 'right'
});

export const CompletePurchaseContainer = styled('a')(({ isMobileLandscape, isDisabled }) => ({
  width: '100%',
  textAlign: 'right',
  color: isDisabled ? '#878787 !important' : '#6a7a9f !important',
  fontWeight: 'bold',
  fontSize: '1.3em',
  paddingTop: '6vh',
  paddingBottom: isMobileLandscape && '2vh',
  textDecoration: 'none',
  pointerEvents: isDisabled && 'none'
}));
