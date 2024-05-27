import React, { useContext } from 'react';
import './CartItems.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { ShopContext } from '~/Context/ShopContext';
import error_img from '~/Assets/Images/error_img.png';

const CartItems = () => {
    const { allProduct, cartItems, removeFromCart, addToCart, removeOneItem } = useContext(ShopContext);
    return (
        <div className="cart-items">
            <table>
                <thead>
                    <tr>
                        <th>Hình ảnh</th>
                        <th>Tên</th>
                        <th>Đơn giá</th>
                        <th>Số lượng</th>
                        <th>Số tiền</th>
                        <th className="cart-items-remove">Xóa</th>
                    </tr>
                </thead>
                <tbody>
                    {allProduct.map((item) => {
                        if (cartItems[item._id] > 0) {
                            return (
                                <tr key={item._id}>
                                    <td className="cart-items-img">
                                        <img src={item.image ? item.image : error_img} alt="" />
                                    </td>
                                    <td className="cart-items-name">{item.name}</td>
                                    <td className="cart-items-price">
                                        <p className="cart-items-price_old">
                                            {item.new_price.toLocaleString('vi-VN')} ₫
                                        </p>
                                        <p className="cart-items-price_new">
                                            {item.old_price ? `${item.old_price.toLocaleString('vi-VN')} ₫` : ''}
                                        </p>
                                    </td>

                                    <td className="cart-items-quantity">
                                        <button
                                            onClick={() => {
                                                removeOneItem(item._id);
                                            }}
                                        >
                                            <FontAwesomeIcon icon={faMinus} />
                                        </button>
                                        <input type="text" value={cartItems[item._id]} onChange={() => {}} />
                                        <button
                                            onClick={() => {
                                                addToCart(item._id);
                                            }}
                                        >
                                            <FontAwesomeIcon icon={faPlus} />
                                        </button>
                                    </td>
                                    <td className="cart-items-total">
                                        {(item.new_price * cartItems[item._id]).toLocaleString('vi-VN')} ₫
                                    </td>

                                    <td className="cart-items-remove">
                                        <button
                                            onClick={() => {
                                                removeFromCart(item._id);
                                            }}
                                        >
                                            <FontAwesomeIcon icon={faTrashCan} />
                                        </button>
                                    </td>
                                </tr>
                            );
                        }
                        return null;
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default CartItems;
