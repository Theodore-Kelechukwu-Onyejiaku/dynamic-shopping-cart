import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../redux/store"
import { closeCart, clearCart } from "../redux/fetures/cartSlice";

import { formatCurrency } from "../utilities/formatCurrency";
import storeItems from "../data/items.json"


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
        <div ref={cartBodyRef} className={`${cartOpen ? "translate-x-0 " : "translate-x-full "} bg-white pb-24 h-full absolute  overflow-scroll right-0 w-full sm:w-1/2 transition-all  duration-300 ease-out`}>
            <div className="my-5 mx-5 text-2xl flex items-center justify-between">
                <h1>Cart</h1>
                <button ref={closeBtnRef} onClick={() => { dispatch(closeCart()) }}>
                    <svg width="24" height="24" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" strokeWidth="3" stroke="#000000" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_iconCarrier"><line x1="8.06" y1="8.06" x2="55.41" y2="55.94"></line><line x1="55.94" y1="8.06" x2="8.59" y2="55.94"></line></g></svg>
                </button>
            </div>
            <div className="flex flex-col space-y-5 my-5 mx-5">
                {cartItems.length ? cartItems.map(item => <CartItem key={item.id} {...item} />) : <p className="text-center font-thin text-3xl">Empty Cart!</p>}
            </div>
            {cartItems.length ?
                <div className="my-10 mx-5">
                    <button onClick={() => { dispatch(clearCart()) }} className="w-full bg-black text-white p-3">Clear Cart</button>
                </div>
                : null}
            <div className="text-right my-10 mx-5">
                <span className="font-bold text-3xl">Total: {" "}
                    {formatCurrency(
                        cartItems.reduce((total, cartItem) => {
                            const item = storeItems.find(item => item.id === cartItem.id)
                            return total + cartItem.quantity * (item?.price || 0)
                        }, 0)
                    )}</span>
            </div>
        </div>
    </div>
}