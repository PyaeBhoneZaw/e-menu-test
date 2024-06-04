// components/OrderList.tsx
import React from 'react';

interface Order {
    name: string;
    quantity: number;
    status: string;
}

const OrderList: React.FC<{ orders: Order[] }> = ({ orders }) => {
    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 gap-4">
                {/* Header row */}
                <div className='outline outline-1 outline-cyan-500'></div>
                <div className="flex flex-row items-center justify-between p-4 rounded-lg">
                    <p className="font-bold flex-1 text-center">Name</p>
                    <p className="font-bold flex-1 text-center">Quantity</p>
                    <p className="font-bold flex-1 text-center"></p>
                </div>
                <div className='outline outline-1 outline-cyan-500'></div>

                {/* Order rows */}
                {orders.map((order, index) => (
                    <div key={index} className="flex flex-row items-center justify-between p-4 rounded-lg bg-white">
                        <p className="flex-1 text-center">{order.name}</p>
                        <p className="flex-1 text-center">{order.quantity}</p>
                        <div className="flex-1 flex justify-center">
                            <button
                                type="button"
                                className={`text-white rounded-full text-sm px-2 py-1 ${order.status === 'Ready' ? 'bg-green-500' : 'bg-gray-500'}`}
                                style={{ maxWidth: '100px' }} // Ensuring the button has a reasonable max width
                            >
                                {order.status}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrderList;
