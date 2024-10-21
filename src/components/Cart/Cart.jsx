import PropTypes from 'prop-types';

const Cart = ({ cart, handleRemoveFromCart }) => {

    
    return (
        <div className="border border-dotted border-pink-300 mb-4 rounded-xl">
            <h4 className="text-center text-3xl font-semibold mb-2 ">Cart: {cart.length}</h4>
            <div className="p-3">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3" >
                    {
                        cart.map(bottle =>
                            <div key={bottle.id} className='flex flex-col items-center'>
                                <img  className="w-44 h-44 rounded-xl" src={bottle.img}></img>
                                <button onClick={()=> handleRemoveFromCart(bottle.id)} className="btn bg-[#8A2BE2] text-black hover:text-white mt-2">Remove</button>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    handleRemoveFromCart:PropTypes.func.isRequired,
}

export default Cart;
