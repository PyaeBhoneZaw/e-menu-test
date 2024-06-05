import React from "react";
import Image from "next/image";

interface Order {
    ordernumber: number;
    name: string;
    quantity: number;
    status: string;
    price: string;
}

const OrderList: React.FC<{ orders: Order[] }> = ({ orders }) => {
    return (

        <div className="container mx-auto p-4 min-h-screen md:min-h-0">


            <div className="grid grid-cols-1 gap-4">
                <div className="outline outline-1 outline-cyan-500"></div>
                <div className="flex flex-row items-center justify-between rounded-lg">
                    <p className="font-bold flex-1 text-center text-sm md:text-lg">Product Description</p>
                    <p className="font-bold flex-1 text-center text-sm md:text-lg">Quantity</p>
                    <p className="font-bold flex-1 text-center"></p>
                </div>
                <div className="outline outline-1 outline-cyan-500"></div>
                {orders.length === 0 ? (
                    <p className=" my-10 mx-12 text-center text-lg text-red-500">Currently there is no order with the value that you input.</p>
                ) : (
                    <div>
                        {orders.map((order, index) => (
                            <div
                                key={index}
                                className="flex flex-row items-center justify-between p-4 rounded-lg bg-white"
                            >
                                <div className="flex-1 flex items-center justify-center text-xs md:text-lg">
                                    <img src="https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg" alt={order.name} className="w-10 h-10 md:w-12 md:h-12 mr-2 object-cover rounded" />
                                    <div>
                                        <p className="text-center">{order.name}</p>
                                        <p className="text-center">{order.price}</p>
                                    </div>
                                </div>

                                <p className="flex-1 text-center text-sm md:text-lg">{order.quantity}</p>
                                <div className="flex-1 flex justify-center">
                                    <button
                                        type="button"
                                        className={`text-black rounded-full text-sm px-2 py-1 ${order.status === "Ready" ? "bg-green-400" : order.status === "Served" ? "bg-cyan-500" : "bg-gray-400"
                                            }`}
                                        style={{ maxWidth: "100px" }}
                                    >
                                        {order.status}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

            </div>


        </div >
    );
};

export default OrderList;
