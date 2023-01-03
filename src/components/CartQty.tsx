import { useEffect } from "react"

type CartQtyProps = {
    value: number
}


export function CartQty({ value }: CartQtyProps) {
    useEffect(() => {
        const element = document.querySelector('.cart-quantity');
        element?.classList.add('animate');
        setTimeout(() => {
            element?.classList.remove('animate');
        }, 500);
    }, [value])

    return <div>
        <span id="whatever" className='bg-red-700 inline-block text-white p-1 rounded-full w-7 text-center text-sm cart-quantity absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 font-bold'>{value}</span>
    </div>
}