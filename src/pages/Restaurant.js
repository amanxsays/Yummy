import { useParams } from "react-router";
import Shimmer from "../components/Shimmer";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "../components/RestaurantCategory";


const Restaurant = () => {
  const { resId } = useParams();
  const resInfo=useRestaurantMenu(resId);

  if (resInfo == null) return <Shimmer />;

  const { name, avgRating, cuisines, city} =
    resInfo[2]?.card?.card?.info;
  const categories=
    resInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c)=>
        c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="Restaurant">
      <div className="resName">
        <h1 className="scale-150 font-bold">{name}</h1>
        <h2 className="flex pt-2">{<FaRegStarHalfStroke className="star scale-150 pt-1 pr-1"/>}{avgRating}</h2>
        <h2>{cuisines.join(", ")}</h2>
        <h2>{city}</h2>
      </div>
      <br/>
      {categories.map((category)=><RestaurantCategory key={category?.card?.card?.categoryId} data={category?.card?.card}/>)}
    </div>
  );
};

export default Restaurant;




