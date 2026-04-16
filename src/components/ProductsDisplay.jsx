import React from 'react'
import Card from './Card'

const ProductsDisplay = ({products, card, setCard}) => {
    return (
        <div className='grid grid-cols-3 gap-4 '>
            {
                products.map((product) => (
                    <Card key={product.id} product={product} setCard={setCard} card={card} />

                ))
            }
        </div>
    )
}

export default ProductsDisplay
