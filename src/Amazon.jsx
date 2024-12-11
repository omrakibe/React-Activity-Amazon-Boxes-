import "./Amazon.css";
import Container from "./Container.jsx";

function Amazon() {
  let styles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  };
  return (
    <div style={styles}>
      <Container title="Logitech MX Master 3S" idx={0} />
      <Container title="Apple Pencil (2nd Gen)" idx={1} />
      <Container title="Zebronics Zeb-transformer" idx={2} />
      <Container title="Petronics Toad 23" idx={3} />
    </div>
  );
}

export default Amazon;
