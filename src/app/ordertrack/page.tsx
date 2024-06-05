'use client';
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import OrderTrackForm from "@/app/components/OrderTrackForm";
import OrderList from "../components/OrderList";
import Layout from "../components/layout";

interface Order {
    ordernumber: number;
    name: string;
    quantity: number;
    status: string;
    price: string;
}

const orders = [
    { ordernumber: 101, name: 'Humberger', quantity: 1, status: 'Ready', price: '2000 Ks' },
    { ordernumber: 201, name: 'Humberger', quantity: 2, status: 'Preparing', price: '2000 Ks' },
    { ordernumber: 301, name: 'Humberger', quantity: 3, status: 'Ready', price: '2000 Ks' },
    { ordernumber: 401, name: 'Humberger', quantity: 4, status: 'Served', price: '2000 Ks' },
    { ordernumber: 501, name: 'Humberger', quantity: 5, status: 'Preparing', price: '2000 Ks' },
    { ordernumber: 601, name: 'Humberger', quantity: 6, status: 'Ready', price: '2000 Ks' },
]

// const orders: Order[] = [];

export default function OrderTrackPage() {

    return (
        <Layout>
            <div className="flex flex-col lg:container mx-auto">
                <main className="flex-1 p-4 sm:p-8">
                    <div className='text-center font-bold text-2xl'>
                        <h2>Your Order</h2>
                    </div>
                    <div className='mt-5'>
                        <label htmlFor="SearchBar" className='font-semibold'>Search By:</label>
                        <OrderTrackForm />
                    </div>
                    <div className='my-5 flex flex-col'>
                        <label htmlFor="YourOrder" className='font-semibold'>Your Order</label>
                        <div className='mx-2 flex mt-3 items-start'>
                            <div className="flex-1/3 flex flex-col">
                                <p className='mb-2'>Order Number:</p>
                                <p className='mb-2'>Table:</p>
                            </div>
                            <div className="flex-1/3 flex flex-col mx-10">
                                <label className="text-left mb-2">123456</label>
                                <label className="text-left mb-2">Hotel ACE</label>
                            </div>
                        </div>
                    </div>



                    <OrderList orders={orders} />

                    <div className='flex justify-center'>
                        <button type="button" className='border bg-cyan-500 py-1 px-24 rounded-lg'>Back to Menu</button>
                    </div>
                </main >
            </div >
        </Layout>
    )
}