import styled from '@emotion/styled';

export const ItemContainer = styled('div')(({ isMobileLandscape, hasBottomPadding }) => ({
  paddingBottom: hasBottomPadding ? (isMobileLandscape ? '2vh' : '2em') : '0em',
  width: '100%'
}));

export const ItemInfoContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
});

export const NameContainer = styled('div')({
  color: '#73593d',
  fontWeight: 'bold',
  fontSize: '1.5em'
});

export const PriceContainer = styled('div')({
  color: '#73593d',
  fontWeight: 'bold',
  fontSize: '1.3em'
});

export const QuantityContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
  color: '#73593d',
  fontWeight: 'bold',
  fontSize: '1.8em',
  overflow: 'auto'
});

export const Quantity = styled('div')({
  width: '30px',
  padding: '0 10px 0 10px',
  fontSize: '.8em',
  textAlign: 'center'
});

export const UpdateQuantityButton = styled('div')({
  padding: '0 10px 0 10px',
  cursor: 'pointer',
  userSelect: 'none'
});

export const StrikeThrough = styled('span')({
  textDecoration: 'line-through',
  paddingRight: '10px',
  color: '#878787'
});

export const PreventOverlap = styled('div')({
  display: 'inline-block'
});
