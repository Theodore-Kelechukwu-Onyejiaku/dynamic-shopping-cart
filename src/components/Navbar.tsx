import { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import type { RootState } from '../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { openCart } from '../redux/fetures/cartSlice'



export default function Navbar() {
    const cartQty = useSelector((state: RootState) => state.cart.cartItems.length)
    const dispatch = useDispatch();
    const cartBtnRef = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        document.addEventListener("click", (e: MouseEvent) => {
            if (cartBtnRef.current && cartBtnRef.current?.contains(e.target as Node)) {
                console.log("ok oo")
                dispatch(openCart())
            }
        })
    })
    return (
        <div className='flex justify-between items-center font-thin px-10 py-3 mb-5 shadow-md border-b-4 sticky top-0 z-40 bg-gray-200'>
            <div className='flex  space-x-7'>
                <div>
                    <NavLink to="/" style={({ isActive }) => isActive ? { fontWeight: "400" } : undefined}>Home</NavLink>
                </div>
                <div>
                    <NavLink to="/store" style={({ isActive }) => isActive ? { fontWeight: "400" } : undefined}>Store</NavLink>
                </div>
                <div>
                    <NavLink to="/about" style={({ isActive }) => isActive ? { fontWeight: "400" } : undefined}>About</NavLink>
                </div>
            </div>
            <div>
                <button ref={cartBtnRef} className='w-14 h-14 p-4 relative border border-black  rounded-full'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        fill="currentColor"
                    >
                        <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                    </svg>
                    <span className='bg-red-700 inline-block text-white p-1 rounded-full w-7 right-0 bottom-2 text-center  absolute text-sm translate-x-1/4 translate-y-1/4'>{cartQty}</span>
                </button>
            </div>

        </div>
    )
}
