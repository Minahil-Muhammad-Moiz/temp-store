import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addItems } from "../redux/actions/productActions";
import Item from "./Item";

const ItemList = () => {
  const items = useSelector((state) => state.allItems.Items);
  const dispatch = useDispatch();
  const fetchItems = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Error: ", err);
      });
    dispatch(addItems(response.data));
  };

  useEffect(() => {
    fetchItems();
  }, []);

  console.log("Items :", items);
  return (
    <div className="ui grid container">
      <Item />
    </div>
  );
};

export default ItemList;