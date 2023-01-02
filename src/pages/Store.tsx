import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json";

export default function Store() {
  return (
    <div>
      <h1 className='text-3xl font-bold my-5'>Store</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {storeItems.map(item => <div>
         <StoreItem {...item}/>
        </div>)}
      </div>

    </div>
  )
}
