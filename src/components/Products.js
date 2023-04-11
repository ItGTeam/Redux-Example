import React from 'react'
import Navbar from './Navbar'
import { Data } from '../data';
import formatCurrency from '../util';
import { useSelector, useDispatch } from 'react-redux';
import './style.css';

function Products() {

     const cart = useSelector((store) => store);
     console.log(cart);
     const dispatch = useDispatch();

     return (
          <>
               <Navbar />
               <div className="products">
                    {
                         Data.map(item => {
                              return (

                                   <div key={item.id} class="max-w-sm mt-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                        <a href="#">
                                             <img class="rounded-t-lg" src={item.image} alt="" />
                                        </a>
                                        <div class="p-5">
                                             <a href="#">
                                                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                                             </a>
                                             <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                                  {formatCurrency(item.price)}
                                             </p>
                                             <a href="#" onClick={() => dispatch({ type: "ADD", payload: item })} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                  افزودن به سبد خرید
                                             </a>
                                        </div>
                                   </div>

                              )
                         })
                    }
               </div>
          </>
     )
}

export default Products