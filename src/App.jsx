import { formToJSON } from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import SingleItem from "./componenet/SingleItem";
import { useEffect } from "react";
const App = () => {
  const [items, setItems] = useState([]);
  const [formItem, setFormItem] = useState("");
  function getLocalItems() {
    let item = localStorage.getItem("itemArr");
    localStorage.setItem("itemArr", item);
    console.log("getItem", item);

    let arr = item.split(",");
    if (arr[0] !== "" || item != "") {
      console.log("arr", arr);
      setItems(arr);
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log("formItem", formItem);

    items.push(formItem);
    setFormItem("");
    toast.success("Item added successfully", {
      position: "top-center",
      autoClose: 5000,
    });
    localStorage.setItem("itemArr", items);

    console.log("items", items);
  }
  useEffect(() => {
    getLocalItems();
  }, []);

  return (
    <div className="section-center ">
      <form onSubmit={(e) => handleSubmit(e)}>
        <h4>Grocery Bud</h4>
        <div className="form-control">
          <input
            type="text"
            className="form-input"
            value={formItem}
            onChange={(e) => setFormItem(e.target.value)}
          />
          <button className="btn" type="submit">
            Add Item
          </button>
        </div>
      </form>
      {items.length > 0 &&
        items.map((i) => (
          <SingleItem setItems={setItems} items={items} i={i} />
        ))}
    </div>
  );
};

export default App;
