import React, { useState } from 'react'
import { IoCartOutline } from 'react-icons/io5'
import { toast } from 'react-toastify';

const CartDisplay = ({ card, setCard }) => {
    const totalPrice = card.reduce((sum, item) => sum + Number(item.price), 0);
    const handleRemove = (id, name) => {
        const remainingItems = card.filter((item) => item.id !== id);
        setCard(remainingItems);
        toast.error(`${name} removed from cart`);
    };
    const [isLoading, setIsLoading] = useState(false);

    const handleCheckout = () => {
        setIsLoading(true); 

        setTimeout(() => {
            setCard([]); 
            setIsLoading(false); 
            toast.success("Purchase Successful!");
        }, 2000);
    };
    return (
        <div className='border border-gray-300 p-10 rounded-xl flex flex-col gap-6'>
            <div className='text-2xl font-bold'>
                Your Cart
            </div>
            {!card || card.length === 0 ?
                <div className="p-10">
                    <div className='flex flex-col justify-center items-center'>
                        <IoCartOutline size={200}></IoCartOutline>
                        <p className='text-lg opacity-50'>Your cart is currently empty.
                            Start adding items to your cart to see them here.</p>
                    </div>
                </div> :
                <>
                    {card.map((item) => (
                        <div key={item.id} className='flex items-center justify-between p-5 bg-gray-100 rounded-xl'>
                            <div className='flex gap-4'>
                                <div className="bg-white w-12 h-12 rounded-full overflow-hidden flex items-center justify-center p-2.5">
                                    <img src={item.icon} alt="" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h3 className='text-xl font-semibold'>{item.name}</h3>
                                    <p className='text-lg opacity-50'>$<span>{item.price}</span></p>
                                </div>
                            </div>
                            <div>
                                <button
                                    onClick={() => handleRemove(item.id, item.name)}
                                    className='text-[#FF3980] font-bold hover:cursor-pointer'>Remove</button>
                            </div>
                        </div>
                    ))}

                    <div className='flex  justify-between'>
                        <div>
                            <h3 className='text-lg opacity-50'>Total:</h3>
                        </div>
                        <div className='text-xl font-bold'>
                            <h3>$<span>{totalPrice}</span></h3>
                        </div>
                    </div>
                    <div>
                        <button
                            onClick={handleCheckout}
                            disabled={isLoading || card.length === 0}
                            className='w-full flex justify-center items-center gap-2 rounded-full bg-linear-to-r from-blue-600 to-purple-600 px-5 py-2.5 font-semibold text-white shadow-md transition-all hover:bg-blue-700 active:scale-98 disabled:opacity-70 disabled:cursor-not-allowed'
                        >
                            {isLoading ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    <span>Processing...</span>
                                </>
                            ) : (
                                "Proceed to checkout"
                            )}
                        </button>
                    </div>
                </>
            }

        </div>
    )
}

export default CartDisplay
