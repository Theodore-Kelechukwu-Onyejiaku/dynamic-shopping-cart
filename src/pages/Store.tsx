import { useState } from "react";
import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json";

export default function Store() {
  const [keyword, setKeyword] = useState("")
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className='text-3xl font-bold my-5'>Store</h1>
        <input onChange={(e) => { setKeyword(e.target.value) }} value={keyword} placeholder="Search for a product" className="bg-gray-100 outline rounded w-96 p-2 outline-none border border-gray-400"></input>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {storeItems.filter(item => {
          if (keyword.trim()) {
            console.log(item.name)
            if (item.name.toLowerCase().endsWith(keyword.toLowerCase()) || item.name.toLowerCase().startsWith(keyword.toLowerCase())) {
              return item
            }
          } else {
            return item
          }
        }).
          map(item => <div key={item.id}>
            <StoreItem  {...item} />
          </div>)}
      </div>
    </div>
  )
}
