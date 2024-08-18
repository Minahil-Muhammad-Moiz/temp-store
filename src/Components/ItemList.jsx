import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Item from "./Item";
import { fetchData } from "../features/productSlice";
// import { addProduct } from "../features/productSlice";

const ItemList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.product);
  const products = data.products

  // console.log(products)
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  // console.log(data.products);
  
  return (
    <div className="ui grid container">
      {data.isLoading ? (
        <>Loading...</>
      ) : (
        products && products.map((item) => 
        <Item key={item.id} item={item} />)
      )}
    </div>
  );
};

export default ItemList;
