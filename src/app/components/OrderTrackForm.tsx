// components/OrderForm.tsx
import React from 'react';

const OrderForm: React.FC = () => {
    return (
        <div className='outline outline-1 outline-cyan-500 p-4 rounded-lg py-3 '>
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 justify-around text-xs md:text-sm">

                <div className="flex items-center">
                    <label htmlFor="order_number" className="mr-2 whitespace-nowrap">Order Number:</label>
                    <input
                        type="text"
                        id="order_number"
                        className="bg-gray-50 border border-black text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-1 md:py-2 mx-5 md:mx-0"
                        placeholder="Type your order number"
                        required
                    />
                </div>


                <div className="flex items-center">
                    <label htmlFor="delivery_place" className="mr-2 whitespace-nowrap">Delivery Place:</label>
                    <input
                        type="text"
                        id="delivery_place"
                        className="bg-gray-50 border border-black text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-1 md:py-2 mx-5 md:mx-0"
                        placeholder="Enter delivery place"
                    />
                </div>


                <button type="submit" className="bg-cyan-500 hover:bg-cyan-700 py-1 px-3 md:py-2 rounded-lg w-40 lg:w-60 mx-auto lg:mx-0 text-white border border-black">
                    Search
                </button>
            </div>
        </div>
    );
};

export default OrderForm;
