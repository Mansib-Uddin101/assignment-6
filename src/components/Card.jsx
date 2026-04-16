import React from 'react'
import writeImg from "../assets/products/writing.png"
import { toast } from 'react-toastify';
import { FaCheck } from 'react-icons/fa'
const Card = ({ product, setCard, card }) => {
    const { id, name, description, price, period, tag, tagType, features, icon } = product;
    const tagStyle = {
        bestSeller: "text-[#BB4D00] bg-[#FEF3C6]",
        popular: "text-purple-600 bg-[#E1E7FF]",
        new: "text-[#0A883E] bg-[#DBFCE7]"
    }
    const handleAddToCart = () => {
        const isExist = card.find((item) => item.id === product.id);
        if (isExist) {
            toast.warn("Already in cart!");
            return;
        }
        setCard((prev) => [...prev, product]);
        toast.success("Added to cart!"); 
    };

    return (
        <div className='border border-gray-200 shadow-sm rounded-2xl p-4 flex flex-col justify-between gap-4 relative
        overflow-hidden transition-all duration-300 hover:scale-101 hover:shadow-2xl cursor-pointer'>
            <div className={`${tagStyle[tagType]} mt-1 absolute top-0 right-0 rounded-full px-2 py-1`}>
                <h3>{tag}</h3>
            </div>
            <div className="border w-12 h-12 rounded-full overflow-hidden flex items-center justify-center p-2">
                <img src={icon} alt="" className="w-full h-full object-cover" />
            </div>
            <div>
                <h3 className='text-2xl font-bold'>{name}</h3>
                <p className='text-[#627382]'>{description}</p>
            </div>
            <div>
                <h3 className='text-2xl font-bold'>${price} <span className='text-lg opacity-50'>/{period}</span></h3>
                <ul className='opacity-50'>
                    {features.map((feature, index) => (
                        <li key={index} className='flex items-center gap-1'><FaCheck color='#30B868' />{feature}</li>
                    ))}
                </ul>
            </div>
            <div className=''>
                <button
                    onClick={() => {handleAddToCart()}}
                    className='inline-flex justify-center items-center rounded-full bg-linear-to-r from-blue-600 to-purple-600 px-6 py-3 w-full
                     text-sm font-semibold text-white shadow-md transition-all hover:bg-blue-700 active:scale-95'>Buy Now</button>
            </div>
        </div>
    )
}

export default Card
