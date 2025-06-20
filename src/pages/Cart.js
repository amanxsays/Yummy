import { MdDeleteForever } from "react-icons/md";
import { clearCart } from "../utils/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import ItemList from "../components/ItemList";
import { clearCart } from "../utils/cartSlice";
import { TbShoppingCartExclamation } from "react-icons/tb";


const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch=useDispatch();
  const handleClearCart=()=>{
    dispatch(clearCart());
  }
  
  return (
    <div className="bg-[#022009] min-h-[86.7vh] w-full px-50">
      <div className="px-30 pt-3 h-full w-230">
        <div className="pl-70"><button className="flex bg-red-600 rounded-sm px-2 text-amber-50 cursor-pointer font-bold" onClick={handleClearCart}>Clear Cart<MdDeleteForever className=" scale-190 pt-1 pl-1"/></button></div>
        <div className="pt-4 w-[110vh] h-auto">
          {cartItems.length!=0?<ItemList itemCards={cartItems} />:<TbShoppingCartExclamation className="scale-3000 text-gray-500 opacity-30 absolute top-85 left-160"/>}
        </div>
      </div>
    </div>
  );
};

export default Cart;
