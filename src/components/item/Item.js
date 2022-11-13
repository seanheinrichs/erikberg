import styled from "@emotion/styled";
import { useMediaQueries } from "../../hooks/useMediaQueries";

const ItemContainer = styled("div")(({ isMobileLandscape, hasBottomPadding }) => ({
  paddingBottom: hasBottomPadding ? isMobileLandscape ? "2vh" : "2em" : "0em",
  width: "100%",
}));

const ItemInfoContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});

const NameContainer = styled("div")({
  color: "#73593d",
  fontWeight: "bold",
  fontSize: "1.5em",
});

const PriceContainer = styled("div")({
  color: "#73593d",
  fontWeight: "bold",
  fontSize: "1.3em",
});

const QuantityContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "center",
  color: "#73593d",
  fontWeight: "bold",
  fontSize: "1.8em",
  overflow: "auto",
});

const Quantity = styled("div")({
  width: "30px",
  padding: "0 10px 0 10px",
  fontSize: ".8em",
  textAlign: "center",
});

const UpdateQuantityButton = styled("div")({
  padding: "0 10px 0 10px",
  cursor: "pointer",
  userSelect: "none",
});

const StrikeThrough = styled("span")({
  textDecoration: "line-through",
  paddingRight: "10px",
  color: "#878787",
});

const PreventOverlap = styled("div")({
  display: "inline-block",
});

function Item({
  name,
  quantity,
  setQuantity,
  price,
  hasBottomPadding,
  id,
  buyBothDiscount,
}) {
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
              }}
            >
              -
            </UpdateQuantityButton>
            <Quantity>{quantity}</Quantity>
            <UpdateQuantityButton onClick={() => setQuantity(quantity + 1)}>
              +
            </UpdateQuantityButton>
          </QuantityContainer>
        </PreventOverlap>
      </ItemInfoContainer>
      <PriceContainer isBuyBothDiscountItem={isBuyBothDiscountItem}>
        {isBuyBothDiscountItem ? (
          <>
            <StrikeThrough>${price.toFixed(2)}</StrikeThrough>$
            {(price * 0.85).toFixed(2)}
          </>
        ) : (
          `$${price.toFixed(2)}`
        )}
      </PriceContainer>
    </ItemContainer>
  );
}

export default Item;
