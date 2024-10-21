const getStoredCart = () => {
  const storedCartString = localStorage.getItem('cart');//local storage theke item khuje ber korchi

  if (storedCartString) {
    return JSON.parse(storedCartString);
  }
  return [];
};

const saveCartToLocalStorage = (cart) => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem('cart', cartStringified);
};

const addToLoaclStorage = (id) => {
  const cart = getStoredCart();//cart ta khuje ber korchi
  cart.push(id);//id push korchi
  saveCartToLocalStorage(cart);
};

const removeFromLocalStorage = id => {
    const cart = getStoredCart();

    //removing every id
    const remaining = cart.filter(idx => idx !== id);
    saveCartToLocalStorage(remaining);
}

export {addToLoaclStorage,getStoredCart,removeFromLocalStorage};
