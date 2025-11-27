import React from "react";
import { useState } from "react";
const SingleItem = ({ setItems, items, i }) => {
  const [checked, setChecked] = useState(false);
  function handleRemove(item) {
    console.log("form item", item);

    let filteredItem = items.filter((i) => i !== item);
    setItems(filteredItem);

    let itemData = localStorage.getItem("itemArr");
    console.log("itemmm", itemData);
    let finalData = "";
    if (itemData.includes(",")) {
      finalData = itemData.split("," + i).join("");
    } else {
      localStorage.clear('itemArr')
    }

    console.log("finalData", finalData);
    localStorage.setItem("itemArr", finalData);

    toast.success("Item removed successfully", {
      position: "top-center",
      autoClose: 5000,
    });
  }
  return (
    <>
      <div className="items">
        <div className="single-item">
          <input type="checkbox" onClick={() => setChecked(!checked)} />
          <p>
            <span className={checked ? `text` : null}>{i}</span>
          </p>
          <div>
            <button className="remove-btn" onClick={() => handleRemove(i)}>
              remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleItem;
