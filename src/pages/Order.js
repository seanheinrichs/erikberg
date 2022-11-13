import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import Item from "../components/item/Item";
import { useNavigate, useLocation } from "react-router-dom";
import { useMediaQueries } from "../hooks/useMediaQueries";

const OrderContainer = styled("div")(({ isMobileLandscape, isMobilePortrait }) => ({
  width: isMobilePortrait ? "90%" : isMobileLandscape ? "70%" : "50%",
  height: "100%",
  position: "absolute",
  // overflow: "hidden", // if things break try putting this back
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  flexDirection: "column",
  paddingLeft: isMobilePortrait ? "5%" : isMobileLandscape ? "15%" : "25%",
  paddingRight: isMobilePortrait ? "5%" : isMobileLandscape ? "15%" : "25%",
}));

const BackButtonContainer = styled("div")(({ isMobileLandscape }) => ({
  maxWidth: "100%",
  maxHeight: "100%",
  paddingBottom: !isMobileLandscape && "3vh",
  paddingTop: isMobileLandscape && "2vh",
  cursor: "pointer",
}));

const TotalContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  justifyContent: "flex-end",
});

const TotalLine = styled("hr")({
  width: "8em",
  marginRight: "0px",
  borderTop: "3px solid",
  color: "#73593d",
});

const TotalPrice = styled("div")({
  color: "#73593d",
  fontWeight: "bold",
  fontSize: "1.3em",
  width: "100%",
  textAlign: "right",
});

const CompletePurchaseContainer = styled("a")(({ isMobileLandscape, isDisabled }) => ({
  width: "100%",
  textAlign: "right",
  color: isDisabled ? "#878787 !important" : "#6a7a9f !important",
  fontWeight: "bold",
  fontSize: "1.3em",
  paddingTop: isMobileLandscape ? "2vh" : "4vh",
  paddingBottom: isMobileLandscape && "2vh",
  textDecoration: "none",
  pointerEvents: isDisabled && "none",
}));

function Order() {
  const navigate = useNavigate();
  const location = useLocation();

  const [gardenOfCalendarsQty, setGardenOfCalendarsQty] = useState(location.state.id === 0 ? 1 : 0);
  const [anthonyReturnsQty, setAnothyReturnsQty] = useState(location.state.id === 1 ? 1 : 0);
  const [totalPrice, setTotalPrice] = useState(0.0);
  const [buyBothDiscount, setBuyBothDiscount] = useState(false);

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
          ? buyBothCount * 35 * 0.85 + (gardenOfCalendarsQty + anthonyReturnsQty - buyBothCount) * 35
          : (gardenOfCalendarsQty + anthonyReturnsQty) * 35
      );
    } else {
      setTotalPrice(0);
    }
  }, [gardenOfCalendarsQty, anthonyReturnsQty, buyBothDiscount]);

  return (
    <>
      <OrderContainer isMobileLandscape={isMobileLandscape} isMobilePortrait={isMobilePortrait}>
        <BackButtonContainer isMobileLandscape={isMobileLandscape} onClick={() => navigate(-1)}>
          <img src={process.env.PUBLIC_URL + "/icons/back-arrow.svg"} alt={"Back Button"} width="40px" height="40px" />
        </BackButtonContainer>
        <Item
          name="The Garden of Calendars"
          quantity={gardenOfCalendarsQty}
          setQuantity={setGardenOfCalendarsQty}
          price={35}
          hasBottomPadding
          id={0}
          buyBothDiscount={buyBothDiscount}
        />
        <Item
          name="Anthony Returns"
          quantity={anthonyReturnsQty}
          setQuantity={setAnothyReturnsQty}
          price={35}
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
          href={`https://erik-berg.myshopify.com/cart/43182511259895:${gardenOfCalendarsQty},43564643451127:${anthonyReturnsQty}`}
        >
          Complete Purchase
        </CompletePurchaseContainer>
      </OrderContainer>
    </>
  );
}

export default Order;
