import PropTypes from 'prop-types';

const Bottle = ({ bottle,handleAddToCart }) => {
    console.log(bottle);


    const { name, price, img, ratings,seller,shipping } = bottle;

    const passWithPrams = () => {
        handleAddToCart(bottle);
    }
    return (
        <div className="border border-purple-500 p-3 rounded-xl">
            <div className="flex justify-center items-center">
                <p><img className="w-[300px] h-[300px] rounded-xl mb-3" src={img} alt="" /></p>
            </div>
            <h3>Bottle: {name}</h3>
            <p>Price: {price}</p>
            <p>Rating: {ratings}</p>
            <p>Seller: {seller}</p>
            <p>Shipping: {shipping}</p>
            <div>
                <button onClick={passWithPrams} className="btn bg-[#8A2BE2] text-black hover:text-white">Purchase</button>
            </div>
        </div>
    );
};

Bottle.propTypes = {
    bottle:PropTypes.object.isRequired,
    handleAddToCart:PropTypes.func.isRequired,
}

export default Bottle;