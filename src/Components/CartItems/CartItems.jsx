import React from 'react';
import data from '~/Assets/Images/data';
import './CartItems.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const CartItems = () => {
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
                    {data.map((item) => (
                        <tr>
                            <td className="cart-items-img">
                                <img src={item.image} alt="" />
                            </td>
                            <td className="cart-items-name">{item.name}</td>
                            <td className="cart-items-price">
                                <p className="cart-items-price_old">{item.new_price.toLocaleString('vi-VN')} ₫</p>
                                <p className="cart-items-price_new">
                                    {item.old_price ? `${item.old_price.toLocaleString('vi-VN')} ₫` : ''}
                                </p>
                            </td>

                            <td className="cart-items-quantity">
                                <button>
                                    <FontAwesomeIcon icon={faMinus} />
                                </button>
                                <input type="text" />
                                <button>
                                    <FontAwesomeIcon icon={faPlus} />
                                </button>
                            </td>
                            <td className="cart-items-total">100.000 ₫</td>

                            <td className="cart-items-remove">
                                <button>
                                    <FontAwesomeIcon icon={faTrashCan} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CartItems;
