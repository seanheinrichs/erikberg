import { useEffect, useState } from 'react';
import Item from '../../components/item/Item';
import { useNavigate, useLocation } from 'react-router-dom';
import { useMediaQueries } from '../../hooks/useMediaQueries';
import {
  OrderContainer,
  BackButtonContainer,
  TotalContainer,
  TotalLine,
  TotalPrice,
  CompletePurchaseContainer
} from './Order.styles';

function Order() {
  const navigate = useNavigate();
  const location = useLocation();

  const [gardenOfCalendarsQty, setGardenOfCalendarsQty] = useState(location.state?.id === 0 ? 1 : 0);
  const [anthonyReturnsQty, setAnothyReturnsQty] = useState(location.state?.id === 1 ? 1 : 0);
  const [totalPrice, setTotalPrice] = useState(0.0);
  const [buyBothDiscount, setBuyBothDiscount] = useState(false);

  const BOOK_PRICE = 20;
  const BUY_BOTH_DISCOUNT = 0.5;

  const { isMobileLandscape, isMobilePortrait } = useMediaQueries();

  useEffect(() => {
    if (gardenOfCalendarsQty >= 1 && anthonyReturnsQty >= 1) {
      setBuyBothDiscount(true);
    } else {
      setBuyBothDiscount(false);
    }
  }, [gardenOfCalendarsQty, anthonyReturnsQty]);

  useEffect(() => {
    if (gardenOfCalendarsQty + anthonyReturnsQty > 0) {
      const difference = Math.abs(gardenOfCalendarsQty - anthonyReturnsQty);

      const buyBothCount =
        difference === 0 ? gardenOfCalendarsQty : Math.max(gardenOfCalendarsQty, anthonyReturnsQty) - difference;

      setTotalPrice(
        buyBothDiscount
          ? buyBothCount * BOOK_PRICE * BUY_BOTH_DISCOUNT +
              (gardenOfCalendarsQty + anthonyReturnsQty - buyBothCount) * BOOK_PRICE
          : (gardenOfCalendarsQty + anthonyReturnsQty) * BOOK_PRICE
      );
    } else {
      setTotalPrice(0);
    }
  }, [gardenOfCalendarsQty, anthonyReturnsQty, buyBothDiscount]);

  return (
    <>
      <OrderContainer isMobileLandscape={isMobileLandscape} isMobilePortrait={isMobilePortrait}>
        <BackButtonContainer isMobileLandscape={isMobileLandscape} onClick={() => navigate(-1)}>
          <img src={process.env.PUBLIC_URL + '/icons/back-arrow.svg'} alt={'Back Button'} width="40px" height="40px" />
        </BackButtonContainer>
        <Item
          name="The Garden of Calendars"
          quantity={gardenOfCalendarsQty}
          setQuantity={setGardenOfCalendarsQty}
          price={BOOK_PRICE}
          discount={BUY_BOTH_DISCOUNT}
          hasBottomPadding
          id={0}
          buyBothDiscount={buyBothDiscount}
        />
        <Item
          name="Anthony Returns"
          quantity={anthonyReturnsQty}
          setQuantity={setAnothyReturnsQty}
          price={BOOK_PRICE}
          discount={BUY_BOTH_DISCOUNT}
          hasBottomPadding={false}
          id={1}
          buyBothDiscount={buyBothDiscount}
        />
        <TotalContainer>
          <TotalLine />
          <TotalPrice>${totalPrice.toFixed(2)}</TotalPrice>
        </TotalContainer>
        <CompletePurchaseContainer
          isMobileLandscape={isMobileLandscape}
          isDisabled={gardenOfCalendarsQty + anthonyReturnsQty < 1}
          href={`https://erik-berg.myshopify.com/cart/43182511259895:${gardenOfCalendarsQty},43564643451127:${anthonyReturnsQty}`}>
          Complete Purchase
        </CompletePurchaseContainer>
      </OrderContainer>
    </>
  );
}

export default Order;
