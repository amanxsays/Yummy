import { BiFoodTag } from "react-icons/bi";
import { FaRegStarHalfStroke } from "react-icons/fa6";

const ItemList = ({ itemCards }) => {
  return (
    <div className="menu-container">
      {itemCards?.map((item) => {
        const dish = item?.card?.info;
        return (
          <div key={dish?.id} className="item">
            <div className="item-text pl-10 pt-3">
              <h2 className="font-bold">{dish?.name}</h2>
              <h1>
                {(dish?.isVeg || 0) == 1 ? (
                  <BiFoodTag className="veg scale-125" />
                ) : (
                  <BiFoodTag className="non-veg scale-125" />
                )}
              </h1>
              <h3>
                {"Rs. "}
                {(dish?.price ? dish.price : dish.defaultPrice) / 100}
              </h3>
              {dish?.ratings?.aggregatedRating?.rating ? (
                <h3 className="flex pt-2">
                  <FaRegStarHalfStroke className="star scale-150 pt-1 pr-1" />
                  {dish?.ratings?.aggregatedRating?.rating}
                  {" (" + dish?.ratings?.aggregatedRating?.ratingCount + ")"}
                </h3>
              ) : (
                ""
              )}
            </div>
            <div className="item-image">
              <img
                src={
                  dish?.imageId
                    ? "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                      dish?.imageId
                    : "https://imgs.search.brave.com/ooTyFORF9MvPnezEqryOC-HzT4SpEqb1WtxypOsX3m0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQw/Mzk3MzQxOS9waG90/by90YWJsZS10b3At/b2YtZm9vZC1zcHJl/YWQtb24tdGFibGUu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PTJjUk9VTXVyWlV0/dXZxRi1icDhsVmla/MHdEWEJOa1pCY0lq/UWoyUVFsZWM9"
                }
              ></img>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ItemList;
