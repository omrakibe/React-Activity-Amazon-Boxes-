function Price({ oldPrice, newPrice }) {
  let styles = {
    fontSize: "20px",
    backgroundColor: "#e0c367",
    borderBottomLeftRadius: "1rem",
    borderBottomRightRadius: "1rem",
    width: "260px",
  }
  let oldPriceStyles = {
    textDecoration: "line-through"
  }
  let newPriceStyles = {
    fontWeight: "bolder",
  }
  return (
    <>
      <div style={styles}>
        <span style={oldPriceStyles}>{oldPrice}</span>
        &nbsp; &nbsp;
        <span style={newPriceStyles}>{newPrice}</span>
      </div>
    </>
  );
}

export default Price;
