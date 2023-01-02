import { useDispatch } from "react-redux"
import { removeFromCart } from "../redux/fetures/cartSlice"
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
    return <div className="flex items-center space-x-3">
        <img src={item?.imgUrl} className="w-32 h-20 object-cover basis-1/3" alt="cart item" />
        <div className="flex flex-col basis-1/3">
            <span className="text-lg text-gray-400">{item?.name} {quantity > 1 && <span className="text-gray-700 text-xs">x {quantity}</span>}</span>
            <span className="text-gray-400">{formatCurrency((item?.price as number))}</span>
        </div>
        <div className="basis-1/3 flex items-center justify-end space-x-3">
            <span>{formatCurrency((item?.price as number) * quantity)}</span>
            <button onClick={()=>{dispatch(removeFromCart(id))}} className="text-sm p-2 w-10 border">x</button>
        </div>
    </div>
}