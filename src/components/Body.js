import { HiSearch } from "react-icons/hi";
import { API_1, API_2 } from "../utils/constants";
import Card, { withDiscount } from "./Card";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [originalRes, setOriginalRes] = useState(null);
  const [copyRes, setCopyRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [next, setNext] = useState(0);
  const CardWithDiscount=withDiscount(Card); 
  
  useEffect(() => {
    fetchData();
  }, [next]); //[] is default what should be shown before useEffect active

  const fetchData = async () => {
    const data = await fetch(API_1 + next + API_2);
    const json = await data.json();
    json?.data?.cards.slice(3) == null ? setNext(next + 1) : "";
    setOriginalRes(json?.data?.cards.slice(3));
    setCopyRes(json?.data?.cards.slice(3));
  };

  const status = useOnlineStatus();

  if (originalRes == null || !status) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="search">
        <input
          className="search-text bg-white opacity-50 h-8 rounded-[10px] text-centre shadow-lg/30 shadow-amber-50 placeholder:text-center"
          type="text"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            const searched = e.target.value;
            const newRes = originalRes.filter((res) =>
              res?.card?.card?.info?.name
                ?.toLowerCase()
                .includes(searchText.toLowerCase())
            );
            setCopyRes(newRes);
            setSearchText(searched);
          }}
        ></input>
        <button
          type="submit"
          className="SearchBtn h-8"
          onClick={() => {
            const newRes = originalRes.filter((res) =>
              res?.card?.card?.info?.name
                ?.toLowerCase()
                .includes(searchText.toLowerCase())
            );
            setCopyRes(newRes);
          }}
        >
          Search
          <span>
            <HiSearch />
          </span>
        </button>
        <div id="top-rated">
          <button
            type="submit"
            className="SearchBtn h-8 w-50"
            onClick={() => {
              const filteredList = copyRes.filter(
                //here we are using copyRes because if someone need coffe but from top restaurants
                (res) => res?.card?.card?.info?.avgRating >= 4.5
              );
              setCopyRes(filteredList);
            }}
          >
            Top Rated Restaurants
            <span>
              <HiSearch />
            </span>
          </button>
        </div>
      </div>
      <div className="card-container">
        {copyRes.map((restaurant) => (
          <Link
            className="List"
            key={restaurant?.card?.card?.info?.id}
            to={"/restaurant/" + restaurant?.card?.card?.info?.id}
          >
            {restaurant?.card?.card?.info?.aggregatedDiscountInfoV3
            ?<CardWithDiscount resData={restaurant} />
            :<Card resData={restaurant} />
            }
          </Link>
        ))}
      </div>
      <div className="flex  w-full justify-evenly">
        <button
          className="NextBtn h-8"
          onClick={() => {
            setNext(next != 0 ? next - 1 : 0);
          }}
        >
          PREV
        </button>
        <button
          className="NextBtn h-8"
          onClick={() => {
            setNext(next != 9 ? next + 1 : 9);
          }}
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default Body;
