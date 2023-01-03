import { useDispatch } from "react-redux"
import { removeFromCart, increaseCartQuantity, decreaseCartQuantity } from "../redux/fetures/cartSlice"
import storeItems from "../data/items.json"
import { formatCurrency } from "../utilities/formatCurrency"

type CartItemProps = {
    id: number,
    quantity: number
}
export function CartItem({ id, quantity }: CartItemProps) {
    const dispatch = useDispatch();
    const item = storeItems.find(item => item.id === id)

    if (item === null) return null
    return <div className="flex justify-center  items-center ">
        <div className="w-1/3">
            <img src={item?.imgUrl} className="w-24 h-24 sm:w-full object-cover" alt="cart item" />
        </div>
        <div className="flex flex-col  w-1/3 sm:ml-5">
            <span className="text-lg text-gray-400">{item?.name} {quantity > 1 && <span className="text-gray-700 text-xs">x {quantity}</span>}</span>
            <span className="text-gray-400">{formatCurrency((item?.price as number))}</span>
            <div className="flex my-2">
                <button onClick={() => { dispatch(increaseCartQuantity(id)) }} className="p-1 w-12 shadow border mr-2 bg-green-600 text-white rounded">+</button>
                <button onClick={() => { dispatch(decreaseCartQuantity(id)) }} className="p-1 w-12 shadow border bg-red-600 text-white rounded">-</button>
            </div>
        </div>
        <div className="flex items-center justify-end space-x-3  w-1/3">
            <span>{formatCurrency((item?.price as number) * quantity)}</span>
            <button onClick={() => { dispatch(removeFromCart(id)) }} className="text-lg p-1 w-12 hover:bg-red-700 hover:text-white shadow border">x</button>
        </div>
    </div>
}