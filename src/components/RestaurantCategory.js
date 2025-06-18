import ItemList from "./ItemList";

const RestaurantCategory = ({ data ,showItems ,updateFun}) => {
  const hideUnhide=()=>{
    updateFun(!showItems);
  }
  return (
    <div>
      <div className="flex justify-center ">
        <div className="w-8/12 bg-[#716d6dba] rounded-sm shadow-lg shadow-[#e8e6e631] p-4 hover:bg-[#575555cf]">
          <div className="flex justify-between cursor-pointer" onClick={hideUnhide}>
            <span className="text-amber-50 font-bold text-lg">
              {data.title} ({data.itemCards.length})
            </span>
            <span className="text-amber-50">{showItems?"▲":"▼"}</span>
          </div>
          {showItems?<ItemList itemCards={data.itemCards}/>:""}
        </div>
      </div>
      <br />
    </div>
  );
};
export default RestaurantCategory;
