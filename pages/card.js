import Image from 'next/image';
import img from "../asts/img.jpg";

function Card() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:px-8 sm:py-12 sm:gap-x-8 md:py-16">
            <div className="relative z-10 col-start-1 row-start-1 px-4 pt-40 pb-3 bg-gradient-to-t from-black sm:bg-none">
                <p className="text-sm font-medium text-white sm:mb-1 sm:text-gray-500">Entire house</p>
                <h2 className="text-xl font-semibold text-white sm:text-2xl sm:leading-7 sm:text-black md:text-3xl">Beach House in Collingwood</h2>
            </div>
            <div className="col-start-1 row-start-2 px-4 sm:pb-16">
                <div className="flex items-center text-sm font-medium my-5 sm:mt-2 sm:mb-4">
                    <div className="ml-1">
                        <span className="text-black">4.94</span>
                        <span className="sm:hidden md:inline">(128)</span>
                    </div>
                    <div className="text-base font-normal mx-2">·</div>
                    <div>Collingwood, Ontario</div>
                </div>
                <hr className="w-16 border-gray-300 hidden sm:block" />
            </div>
            <div className="col-start-1 row-start-3 space-y-3 px-4">
                <p className="flex items-center text-black text-sm font-medium">
                    <img src="https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="w-6 h-6 rounded-full mr-2 bg-gray-100" />
                    Hosted by Kevin Francis
                </p>
                <button type="button" className="bg-violet-100 text-violet-700 text-base font-semibold px-6 py-2 rounded-lg">Check availability</button>
            </div>
            <div className="col-start-1 row-start-1 flex sm:col-start-2 sm:row-span-3">
                <div className="w-full grid grid-cols-3 grid-rows-2 gap-2">
                    <div className="relative col-span-3 row-span-2 md:col-span-2">
                        <img src="https://images.pexels.com/photos/2603464/pexels-photo-2603464.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="absolute inset-0 w-full h-full object-cover bg-gray-100 sm:rounded-lg" />
                    </div>
                    <div className="relative hidden md:block">
                        <img src="https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="absolute inset-0 w-full h-full object-cover rounded-lg bg-gray-100" />
                    </div>
                    <div className="relative hidden md:block">
                        <img src="https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="absolute inset-0 w-full h-full object-cover rounded-lg bg-gray-100" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;