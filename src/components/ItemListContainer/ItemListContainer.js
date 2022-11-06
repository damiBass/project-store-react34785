import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import { dataProducts } from "../../data/data";

function APICall() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(dataProducts);
    }, 2000);
  });
}

APICall().then((resp) => console.log(resp));

function ItemListContainer() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "50px",
        flexWrap: "wrap",
        gap: "30px",
      }}
    >
      {dataProducts.map((item) => (
        <ItemCard
          title={item.title}
          key={item.id}
          stock={item.stock}
          price={`USD ${item.price}`}
        />
      ))}
    </div>
  );
}

export default ItemListContainer;
