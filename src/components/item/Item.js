import { useMediaQueries } from '../../hooks/useMediaQueries';
import {
  ItemContainer,
  ItemInfoContainer,
  NameContainer,
  QuantityContainer,
  UpdateQuantityButton,
  Quantity,
  PriceContainer,
  StrikeThrough,
  PreventOverlap
} from './Item.styles';

function Item({ name, quantity, setQuantity, price, hasBottomPadding, id, buyBothDiscount, discount }) {
  const isBuyBothDiscountItem = id === 0 && buyBothDiscount;

  const { isMobileLandscape } = useMediaQueries();

  return (
    <ItemContainer isMobileLandscape={isMobileLandscape} hasBottomPadding={hasBottomPadding}>
      <ItemInfoContainer>
        <NameContainer>{name}</NameContainer>
        <PreventOverlap>
          <QuantityContainer>
            <UpdateQuantityButton
              onClick={() => {
                if (quantity === 0) {
                  return;
                }
                setQuantity(quantity - 1);
              }}>
              -
            </UpdateQuantityButton>
            <Quantity>{quantity}</Quantity>
            <UpdateQuantityButton onClick={() => setQuantity(quantity + 1)}>+</UpdateQuantityButton>
          </QuantityContainer>
        </PreventOverlap>
      </ItemInfoContainer>
      <PriceContainer isBuyBothDiscountItem={isBuyBothDiscountItem}>
        {isBuyBothDiscountItem ? (
          <>
            <StrikeThrough>${price.toFixed(2)}</StrikeThrough>${(price * discount).toFixed(2)}
          </>
        ) : (
          `$${price.toFixed(2)}`
        )}
      </PriceContainer>
    </ItemContainer>
  );
}

export default Item;
