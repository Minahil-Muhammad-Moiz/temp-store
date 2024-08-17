import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Item = () => {
  const data = useSelector((state) => state.product);
  // console.log(data.products)
  const renderList = data.products.map((item) => {
    const { id, title, image, price, category } = item;
    return (
      <div className="four wide column" key={id}>
        <Link to={`/item/${id}`} >
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default Item;