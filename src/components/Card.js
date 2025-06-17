import { FaRegStarHalfStroke } from "react-icons/fa6";
const Card = (props) => {
  const { resData } = props;

  const { name, avgRating, costForTwo, sla, cloudinaryImageId, cuisines } =
    resData?.card?.card?.info;

  return (
    <div className="card pb-[-10px] w-[230px] min-h-[300px]">
      <div className="card-image pt-1.5 h-[170px]">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
        ></img>
      </div>
      <div className="card-text">
        <div className="mainName">{name}</div>
        <div className="subName flex justify-between">
          <div className="flex">
            <FaRegStarHalfStroke className="star scale-150 pt-1 pr-1" />
            {avgRating}
          </div>
          {costForTwo}
        </div>
        <div className="quisenes text-2xl">{cuisines.join(", ")}</div>
        <div className="subName text-4xl pt-0.5">
          Delivers In:{" "}
          <span className="text-amber-200   ">{sla.deliveryTime}</span> mint
        </div>
      </div>
    </div>
  );
};

//higher order component:
export const withDiscount = (Card) => {
  return (props) => {
    const { resData } = props;
    const {header, subHeader} = resData?.card?.card?.info?.aggregatedDiscountInfoV3;
    return(
      <div className="group relative ">
        <label className="absolute z-2 flex justify-center top-[157.7px] left-[17.5px] font-bold text-white rounded-b-[11px] bg-[#000000a5] w-[215px] group-hover:scale-103 transition-[0.5s]">{header}{" "}{subHeader}</label>
        <Card {...props}/>
      </div>
    );
  };
};

export default Card;
