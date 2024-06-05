'use client';
import Image from 'next/image';
import { useState } from 'react';
import Layout from '../components/layout';

export default function ProductPage() {
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState<number>(25000.00);
    const [cartItemCount, setCartItemCount] = useState<number>(0);
    const [selectedMeat, setSelectedMeat] = useState<string | null>(null);
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [selectedOther, setSelectedOther] = useState<string | null>(null);

    const handleIncrement = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        setPrice(newQuantity * 25000.00);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            setPrice(newQuantity * 25000.00);
        }
    };

    const handleAddToCart = (quantity: number) => {
        setCartItemCount(cartItemCount + quantity);
    };


    return (
        <Layout>
            <div className="flex flex-col">

                <main className="container mx-auto flex-1 p-4 sm:p-8">
                    <div className="mx-auto flex flex-col sm:flex-row rounded-lg bg-white p-4 sm:p-8">

                        <div className="w-full sm:w-1/2 pr-0 sm:pr-8">
                            <div className="sm:flex sm:mb-5 justify-center my-3">
                                <Image src="data:image/jpeg;base64,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" alt="Product Image" width={500} height={500} className='rounded-lg object-fit' />
                            </div>
                        </div>

                        <div className="w-full sm:w-1/2 pl-0 sm:pl-8 items-center ">
                            <h1 className="mb-4 text-xl sm:text-2xl font-bold">Product Name</h1>

                            <div className="mb-6">
                                <p className="mb-2 mr-2 font-semibold mx-2">Size</p>
                                <div className="flex flex-wrap">
                                    <button
                                        className={`mx-2 my-2 rounded-lg px-4 py-1 outline outline-1 outline-cyan-500 ${selectedSize === 'Small' ? 'bg-cyan-600 text-black' : 'bg-white text-black'}`}
                                        onClick={() => setSelectedSize('Small')}
                                    >
                                        Small
                                    </button>
                                    <button
                                        className={`mx-2 my-2 rounded-lg px-4 py-1 outline outline-1 outline-cyan-500 ${selectedSize === 'Medium' ? 'bg-cyan-600 text-black' : 'bg-white text-black'}`}
                                        onClick={() => setSelectedSize('Medium')}
                                    >
                                        Medium
                                    </button>
                                    <button
                                        className={`mx-2 my-2 rounded-lg px-4 py-1 outline outline-1 outline-cyan-500 ${selectedSize === 'Large' ? 'bg-cyan-600 text-black' : 'bg-white text-black'}`}
                                        onClick={() => setSelectedSize('Large')}
                                    >
                                        Large
                                    </button>
                                </div>
                            </div>

                            <div className="mb-6">
                                <p className="mb-2 mr-2 font-semibold mx-2">Other</p>
                                <div className="flex flex-wrap">
                                    <button className={`mx-2 my-2 rounded-lg px-4 py-1 outline outline-1 outline-cyan-500 ${selectedOther === 'LessSpicy' ? 'bg-cyan-600 text-black' : 'bg-white text-black'}`} onClick={() => setSelectedOther('LessSpicy')}>
                                        Less Spicy
                                    </button>
                                    <button className={`mx-2 my-2 rounded-lg px-2 py-1 outline outline-1 outline-cyan-500 ${selectedOther === '2x' ? 'bg-cyan-600 text-black' : 'bg-white text-black'}`} onClick={() => setSelectedOther('2x')}>
                                        2x
                                    </button>
                                    <button className={`mx-2 my-2 rounded-lg px-2 py-1 outline outline-1 outline-cyan-500 ${selectedOther === '3x' ? 'bg-cyan-600 text-black' : 'bg-white text-black'}`} onClick={() => setSelectedOther('3x')}>
                                        3x
                                    </button>
                                </div>
                            </div>

                            <div className="mb-6">
                                <p className="mb-2 mr-2 font-semibold mx-2">Meat</p>
                                <div className="flex flex-wrap">
                                    <button
                                        className={`mx-2 my-2 rounded-lg px-4 py-1 outline outline-1 outline-cyan-500 ${selectedMeat === 'Chicken' ? 'bg-cyan-600 text-black' : 'bg-white text-black'}`}
                                        onClick={() => setSelectedMeat('Chicken')}
                                    >
                                        Chicken
                                    </button>
                                    <button
                                        className={`mx-2 my-2 rounded-lg px-4 py-1 outline outline-1 outline-cyan-500 ${selectedMeat === 'Pork' ? 'bg-cyan-600 text-black' : 'bg-white text-black'}`}
                                        onClick={() => setSelectedMeat('Pork')}
                                    >
                                        Pork
                                    </button>
                                    <button
                                        className={`mx-2 my-2 rounded-lg px-4 py-1 outline outline-1 outline-cyan-500 ${selectedMeat === 'Seafood' ? 'bg-cyan-600 text-black' : 'bg-white text-black'}`}
                                        onClick={() => setSelectedMeat('Seafood')}
                                    >
                                        Seafood
                                    </button>
                                </div>
                            </div>
                            <div className='flex flex-wrap justify-center md:justify-normal lg:justify-normal'>
                                <textarea id="message" rows={4} className="block p-2.5 w-80 text-sm bg-gray-50 rounded-lg border border-cyan-500 focus:ring-cyan-500 focus:border-cyan-500 mb-3 " placeholder="Option"></textarea>
                            </div>


                            <div className="flex flex-wrap my-3 items-center justify-center md:justify-normal lg:justify-normal">
                                <label htmlFor="Qty" className='mx-2 text-2xl'>Qty:</label>
                                <button onClick={handleDecrement} className="mx-2 px-3 py-1 text-black text-2xl">-</button>
                                <span className="mx-2 text-2xl px-3 py-1 rounded-lg outline outline-1 outline-cyan-500">{quantity}</span>
                                <button onClick={handleIncrement} className="mx-2 px-3 py-1 text-black text-2xl">+</button>
                            </div>

                            <div className="flex mx-2 justify-center lg:justify-normal md:justify-normal text-2xl">
                                <span className='mr-5'>Total: </span>
                                {price.toFixed(2)}
                            </div>

                            <div className="my-6 text-center md:text-left lg:text-left">
                                <a href="#" className="mx-2 inline-block rounded-lg bg-cyan-500 px-4 py-2 hover:bg-cyan-600">Back</a>
                                <a href="#" className="mx-2 inline-block rounded-lg bg-cyan-500 px-4 py-2 hover:bg-cyan-600">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </Layout>

    );
}
