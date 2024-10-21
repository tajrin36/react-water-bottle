import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import { addToLoaclStorage, getStoredCart, removeFromLocalStorage } from "../utilities/localStorage";
import Cart from "../Cart/Cart";

const Bottles = () => {

    const [bottles, setBottles] = useState([]);

    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch('bottles.json')
            .then(response => response.json())
            .then(data => setBottles(data));
    }, []);

    //!load cart from local storage
    useEffect(() => {
        console.log('called useeffect', bottles.length);
        if (bottles.length > 0) {
            const storedCart = getStoredCart();
            console.log(storedCart, bottles);

            const savedCart = [];

            //!id gula k loop through kore pete hobe
            for (const id of storedCart) {
                console.log(id);
                //find operator diye bottle k khujbe
                const bottle = bottles.find(bottle => bottle.id === id);
                if (bottle) {
                    savedCart.push(bottle);
                }
            }

            console.log(savedCart);
            setCart(savedCart);
        }
    }, [bottles])

    const handleAddToCart = bottle => {
        console.log('bottle goinf to be added!');
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLoaclStorage(bottle.id);
    }

    const handleRemoveFromCart = id => {

        //1.remove from local storage
        removeFromLocalStorage(id);

        //1.visual cart remove
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart);

    }


    return (
        <div>
            <Cart
                cart={cart}
                handleRemoveFromCart={handleRemoveFromCart}
            ></Cart>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 border border-dotted border-pink-300 p-6 rounded-xl">
                {
                    bottles.map(bottle => <Bottle
                        key={bottle.id}
                        bottle={bottle}
                        handleAddToCart={handleAddToCart}
                    ></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;