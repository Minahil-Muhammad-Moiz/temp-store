import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetail } from "../features/detailSlice";
import { useEffect } from "react";

const ItemDetail = () => {
  const dispatch = useDispatch();
  const { itemId } = useParams();
  const item = useSelector((state) => state.detail);
  // console.log(item.product);
  
  const { image, title, price, category, description } = item.product;

  useEffect(() => {
    if (itemId && itemId !== "") {
      dispatch(fetchDetail(itemId));
    }
  }, [itemId]);

  return (
    <div className="ui grid container">
      {Object.keys(item).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
