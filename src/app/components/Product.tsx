import React from "react";
import { useCart } from "../contexts/CartContext";
import { Button } from "@/components/ui/button"


const Product: React.FC = () => {
    const { addToCart } = useCart();

    return (
        <a>
            {/* <button className="mx-2 inline-block rounded-lg bg-cyan-500 px-4 py-2 hover:bg-cyan-600" onClick={addToCart}>
                Add to Cart
            </button> */}
            <Button className="mx-2 inline-block rounded-lg bg-cyan-500 px-4 py-2 hover:bg-cyan-600" onClick={addToCart}>Add to Cart</Button>
        </a>
    );
}
export default Product;