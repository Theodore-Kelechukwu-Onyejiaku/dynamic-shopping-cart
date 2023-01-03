import { formatCurrency } from "../utilities/formatCurrency"
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { decreaseCartQuantity, removeFromCart, increaseCartQuantity } from "../redux/fetures/cartSlice";


type StoreItemProps = {
    id: number,
    price: number,
    name: string,
    imgUrl: string
}
export function StoreItem({ id, price, name, imgUrl }: StoreItemProps) {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.cartItems)
    let quantity = cartItems.find((item) => item.id === id)?.quantity || 0;

    return (
        <div data-aos="fade-up" data-aos-duration="1000" className="border shadow-md py-3">
            <div className="overflow-hidden">
                <img className="w-full object-cover hover:scale-150 hover:opacity-200 transition-all duration-500" style={{ height: "300px" }} src={imgUrl} />
            </div>
            <div className="flex items-center justify-between mb-4 p-3">
                <span className="text-lg font-bold">{name}</span>
                <span className="text-gray-500">{formatCurrency(price)}</span>
            </div>
            <div className="p-3 h-24">
                {quantity === 0 ? (
                    <button onClick={() => { dispatch(increaseCartQuantity(id)) }} className="w-full bg-blue-600 text-white p-2">+ Add To Cart</button>
                )
                    : <div className="flex flex-col justify-center items-center">
                        <div className="flex justify-center items-center">
                            <button onClick={() => { dispatch(decreaseCartQuantity(id)) }} className="bg-blue-600 p-1 rounded-md text-2xl w-10 text-white">-</button>
                            <div className="mx-3"><span className="text-3xl">{quantity}</span> in cart</div>
                            <button onClick={() => { dispatch(increaseCartQuantity(id)) }} className="bg-blue-600 p-1 rounded-md text-2xl w-10 text-white">+</button>
                        </div>
                        <button onClick={() => { dispatch(removeFromCart(id)) }} className="p-1 px-3 bg-red-600 rounded-md text-white">
                            Remove
                        </button>
                    </div>}

            </div>

        </div>
    )
}