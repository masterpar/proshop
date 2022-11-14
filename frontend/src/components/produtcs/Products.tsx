import {products} from "../../data/products";
import { starts } from "../../utils/rating";

export const Products = () => {


    return (
        <div className='grid md:grid-cols-2 xs:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            {
                products.map((product) => (

                    <div key={product._id}
                         className="w-full m-4 max-w-xs bg-white rounded-lg shadow-md shadow-gray-200 dark:border-gray-700">
                        <a href="#">
                            <img className="p-0 " src={product.image}
                                 alt={ product.brand }/>
                        </a>
                        <div className="px-5 pb-5">
                            <a href="#">
                                <h5 className="text-xl font-semibold tracking-tight text-gray-700 mt-4 ">
                                    { product.name}</h5>
                            </a>
                            <div className="flex items-center mt-2.5 mb-5">
                                <>
                                { starts(product.rating)  }
                                <span
                                    className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                                    { product.rating}
                                </span>
                                </>
                            </div>
                            <div className="flex justify-between items-center align-bottom">
                                <span className="text-3xl font-bold text-gray-700 ">$ { product.price}</span>
                                <a href="#"
                                   className="text-white bg-blue-400 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium
                                       rounded-lg text-sm px-5 py-2.5 text-center dark:bg-dark-700 dark:hover:bg-dark-700 dark:focus:ring-blue-800">
                                    Add to cart</a>
                            </div>
                        </div>
                    </div>

                ))
            }
        </div>
    )
}
