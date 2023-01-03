import { CancelSVG } from "../components/CancelSVG"
import { SupportSVG } from "../components/SupportSVG"
export default function About() {
  return (
    <div>
      <h1 className='text-3xl font-bold my-5'>About</h1>
      <p className='tex text-gray-400'>Glad to have you here!</p>
      <h2 className='my-5 text-lg font-bold'>Dynamic Shopping Cart</h2>
      <p className=''>
        A shopping cart built using TypeScript, ReactJs, Redux Tool Kit, Tailwind CSS and Local Storage.
        Inspired from WebDev Simplified Video<a href="" className='underline'>here</a>. And was modified.
      </p>
      <ul className='list-disc list-outside mb-10 mt-3'>
        <li className='list-item'>Bootstrap <CancelSVG /> {"=>"} Tailwind CSS <SupportSVG />
          <li className="list-item">Context API  <CancelSVG /> {"=>"}  Redux and Redux Tool Kit <SupportSVG /></li>
        </li>
      </ul>

      <a href='' className='p-2 bg-black text-white rounded'>See Code<span className='ml-2'>{">"}</span></a>
    </div>
  )
}
