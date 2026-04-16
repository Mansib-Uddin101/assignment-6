import React, { useEffect, useState } from 'react'
import Card from './Card'
import ProductsDisplay from './ProductsDisplay';
import CartDisplay from './CartDisplay';


const ProductPage = ({ card, setCard }) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch("/data.json");
                const data = await res.json();
                setProducts(data);
                ;
            }
            catch (error) {
                console.log("Error fetching data", error);

            }
        };
        fetchProduct();
    }, []);

    const [toggle, setToggle] = useState("product");
    const toggleClasses = {
        active: " bg-linear-to-r from-blue-600 to-purple-600 text-white",
        inactive: ""
    }

    return (
        <div className='w-5/6 mx-auto mb-10'>
            <div className='text-center mb-10'>
                <div>
                    <h1 className='text-6xl text-[#101727] font-bold mb-4'>Premium Digital Tools</h1>
                    <p className='text-[#627382]'>Choose from our curated collection of premium digital products
                        designed <br /> to boost your productivity and creativity.</p>
                </div>
                <div className='mt-4 border border-[#4F39F6] inline-flex rounded-full'>
                    <button
                        onClick={() => setToggle("product")}
                        className={`${toggle === "product" ? " bg-linear-to-r from-blue-600 to-purple-600 text-white" : ""} rounded-l-full px-6 py-3 inline-flex
                     text-sm font-semibold shadow-md active:scale-95`}>
                        Products</button>
                    <button
                        onClick={() => setToggle("cart")}
                        className={`${toggle === "product" ? "" : " bg-linear-to-r from-blue-600 to-purple-600 text-white"} py-2 px-6 active:scale-95 gap-2 rounded-r-full`}>
                        Cart (<span>{card.length}</span>)</button>
                </div>
            </div>
            {toggle === "product" ?
                <ProductsDisplay products={products} setCard={setCard} card={card}></ProductsDisplay> :
                <CartDisplay setCard={setCard} products={products} card={card}></CartDisplay>}

        </div>
    )
}

export default ProductPage
