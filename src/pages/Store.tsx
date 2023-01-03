import { useState } from "react";
import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json";

export default function Store() {
  const [keyword, setKeyword] = useState("")
  return (
    <div className=" overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center items-start justify-between">
        <h1 className='text-3xl font-bold my-5 text-left'>Store</h1>
        <div className="relative border border-black w-full sm:w-96">
          <input onChange={(e) => { setKeyword(e.target.value) }} value={keyword} placeholder="Search for a product" className="bg-gray-100 outline rounded  p-2 w-full outline-none border border-gray-400"></input>
          <svg onClick={()=>{setKeyword("")}} className="absolute cursor-pointer top-2 right-2" width="20" height="20" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" strokeWidth="3" stroke="#000000" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_iconCarrier"><line x1="8.06" y1="8.06" x2="55.41" y2="55.94"></line><line x1="55.94" y1="8.06" x2="8.59" y2="55.94"></line></g></svg>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {storeItems.filter(item => {
          if (keyword.trim()) {
            console.log(item.name)
            if (item.name.toLowerCase().includes(keyword.toLowerCase())) {
              return item
            }
          } else {
            return item
          }
        }).
          map(item => <div key={item.id}>
            <StoreItem {...item} />
          </div>)}
      </div>
    </div>
  )
}
