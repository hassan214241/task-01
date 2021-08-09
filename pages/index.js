// import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
// import "../styles/app.css"
// import 'tailwindcss/tailwind.css'
import ime from "../asts/img.jpg"


export default function Home() {


  return (
    <div className="flex bg-red-400 " >
      <div className="flex-none w-48 relative">
        <img src="https://images.pexels.com/photos/2603464/pexels-photo-2603464.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="absolute inset-0 w-full h-full object-cover bg-gray-100 sm:rounded-lg" />
      </div>
      <form className="flex-auto p-6">
        <div className="flex flex-wrap">
          <h1 className="flex-auto text-xl font-semibold">
            classNameic Utility Jacket
          </h1>
          <div className="text-xl font-semibold text-gray-500">
            $110.00
          </div>
          <div className="w-full flex-none text-sm font-medium text-gray-500 mt-2">
            In stock
          </div>
        </div>
        <div className="flex items-baseline mt-4 mb-6">
          <div className="space-x-2 flex">
            <label>
              <input className="w-9 h-9 flex items-center justify-center bg-gray-100 rounded-lg" name="size" type="radio" value="xs" checked />
              XS
            </label>
            <label>
              <input className="w-9 h-9 flex items-center justify-center" name="size" type="radio" value="s" />
              S
            </label>
            <label>
              <input className="w-9 h-9 flex items-center justify-center" name="size" type="radio" value="m" />
              M
            </label>
            <label>
              <input className="w-9 h-9 flex items-center justify-center" name="size" type="radio" value="l" />
              L
            </label>
            <label>
              <input className="w-9 h-9 flex items-center justify-center" name="size" type="radio" value="xl" />
              XL
            </label>
          </div>
          <div className="ml-auto text-sm text-gray-500 underline">Size Guide</div>
        </div>
        <div className="flex space-x-3 mb-4 text-sm font-medium">
          <div className="flex-auto flex space-x-3">
            <button className="w-1/2 flex items-center justify-center rounded-md bg-black text-white" type="submit">Buy now</button>
            <button className="w-1/2 flex items-center justify-center rounded-md border border-gray-300" type="button">Add to bag</button>
          </div>
          <button className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-gray-400 border border-gray-300" type="button" aria-label="like">

          </button>
        </div>
        <p className="text-sm text-gray-500">
          Free shipping on all continental US orders.
        </p>
      </form>
    </div>



  )
}
