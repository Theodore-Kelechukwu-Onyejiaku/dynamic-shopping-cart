import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../redux/store"
import { closeCart } from "../redux/fetures/cartSlice";

import { CartItem } from "./CartItem";

export function ShoppingCart() {
    const { cartOpen, cartItems } = useSelector((state: RootState) => state.cart)
    const dispatch = useDispatch();
    const closeBtnRef = useRef<HTMLButtonElement>(null);
    const cartBodyRef = useRef<HTMLDivElement>(null);
    const cartContainerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        cartContainerRef.current?.addEventListener("click", (e: MouseEvent) => {
            if (!(cartBodyRef.current && cartBodyRef.current?.contains(e.target as Node)) || closeBtnRef.current?.contains(e.target as Node)) {
                dispatch(closeCart())
            }
        })
    }, [])

    return <div ref={cartContainerRef} className={`${cartOpen ? "block " : "invisible "} h-screen overflow-hidden fixed inset-0 z-50 top-0 bg-black bg-opacity-60  w-full`}>
        <div ref={cartBodyRef} className={`${cartOpen ? "translate-x-0 " : "translate-x-full "} bg-white h-full absolute  overflow-scroll right-0 w-full sm:w-1/2 transition-all  duration-300 ease-out`}>
            <div className="my-5 mx-5 text-2xl flex items-center justify-between">
                <h1>Cart</h1>
                <button ref={closeBtnRef} onClick={() => { dispatch(closeCart()) }}>x</button>
            </div>
            <div className="flex flex-col space-y-5 my-5 mx-5">
                {cartItems.map(item => <CartItem key={item.id} {...item} />)}
            </div>
        </div>
    </div>
}