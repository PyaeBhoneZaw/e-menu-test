'use client';
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import OrderTrackForm from "@/app/components/OrderTrackForm";
import OrderList from "../components/OrderList";

const orders = [
    { name: 'Order 1', quantity: 1, status: 'Ready' },
    { name: 'Order 2', quantity: 2, status: 'Not Ready' },
    { name: 'Order 3', quantity: 3, status: 'Ready' },
    { name: 'Order 4', quantity: 4, status: 'Ready' },
    { name: 'Order 5', quantity: 5, status: 'Not Ready' },
    { name: 'Order 6', quantity: 6, status: 'Ready' },
]

export default function OrderTrackPage() {

    const [OrderNumber, setOrderNumber] = useState<string>('');

    const handleOrderNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
        setOrderNumber(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('OrderNumber', OrderNumber);
    };

    return (
        <div className="flex flex-col lg:container mx-auto">
            <main className="flex-1 p-4 sm:p-8">
                <div className='text-center font-bold text-2xl'>
                    <h2>Track Your Order</h2>
                </div>
                <div className='mt-5'>
                    <label htmlFor="SearchBar" className='font-semibold'>Search By:</label>
                    <OrderTrackForm />
                </div>
                <div className='my-16'>
                    <label htmlFor="YourOrder" className='font-semibold'>Your Order</label>
                    <div className='mx-2 flex'>
                        <p className='w-30 mr-10'>Order Number:</p>
                        <label>123456</label>
                    </div>
                    <div className='mx-2 flex'>
                        <p className='w-30 mr-10'>Delivery Place:</p>
                        <label>Hotel ACE</label>
                    </div>
                </div>



                {/* <div className='flex flex-row items-center mx-auto text-center my-2'>
                        <p className='basis-1/3'>Product Description</p>
                        <p className='basis-1/3 text-end'>QTY</p>
                    </div> */}


                {/* <div className='flex flex-row items-center mx-auto text-center'>
                        <p className='my-4 basis-1/3'>Name</p>
                        <p className='my-4 basis-1/3'>1</p>
                        <button type="button" className="basis-1/3 text-white bg-green-500 rounded-full text-sm px-5 py-2 text-center mb-2 w-15">
                            Ready
                        </button>
                    </div> */}

                <OrderList orders={orders} />

            </main >
        </div >

    )
}