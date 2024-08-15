import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Item from "./Item";
import { fetchData } from "../features/productSlice";
// import { addProduct } from "../features/productSlice";

const ItemList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div className="ui grid container">
      {data.isLoading ? <>Loading...</>: 
        data.products?.map((item) => <Item key={item.id} item={item} />)
      }
    </div>
  );
};

export default ItemList;
