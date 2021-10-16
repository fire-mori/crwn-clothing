import React from 'react';
import { connect } from 'react-redux';
import { addItem, removeItem, removeItemByQuantity } from '../../redux/cart/cart.actions';
import './checkout-item.styles.scss';

const CheckoutItem = ({
  cartItem,
  removeItem: removeItemAction,
  addItem: addItemAction,
  removeItemByQuantity: removeItemByQuantityAction,
}) => {
  const {
    name, imageUrl, price, quantity,
  } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div role="button" className="arrow" onClick={() => removeItemByQuantityAction(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div role="button" className="arrow" onClick={() => addItemAction(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div role="button" onClick={() => removeItemAction(cartItem)} className="remove-button">
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItem(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItemByQuantity: (item) => dispatch(removeItemByQuantity(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
