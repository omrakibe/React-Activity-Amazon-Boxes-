import "./Container.css";
import Price from "./Price.jsx";

function Container({ title, idx }) {
  let oldPrice = ["12,495", "11,900", "1,599", "599"];
  let newPrice = ["8,999", "9,900", "899", "279"];
  let description = [
    ["8000 DPI", "5 programmable buttons"],
    ["Intutive Product", "Designed for iPad Pro"],
    ["Designed for iPad", "intutive surface"],
    ["Wireless", "Optical Orientation"],
  ];
  return (
    <div className="container">
      <h3>{title}</h3>

      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>

      <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
    </div>
  );
}

export default Container;
