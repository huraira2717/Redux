import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove, update } from '../../../ReduxStore/Cartslice';

function Cart() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editedItem, setEditedItem] = useState(null);
    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(remove(id));
    };

    const handleEdit = (item) => {
        setEditedItem(item);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditedItem(null);
    };

    const handleUpdateItem = () => {
        dispatch(update({ id: editedItem.id, updatedItem: editedItem }));
        setIsModalOpen(false);
        setEditedItem(null);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedItem((prevItem) => ({
            ...prevItem,
            [name]: value
        }));
    };

    return (
        <div>
            <h2 className='font-bold text-4xl text-center mt-5 mb-6'>Products</h2>
            <div>
                {cartItems.map((item, index) => (
                    <div key={index} className='flex flex-col sm:flex-row justify-evenly p-4 m-2 font-bold border-4'>
                        <img className='img h-36 w-40 mx-auto  sm:h-12 sm:w-16 sm:mx-0' src={item.image} alt='img' />
                        <h3 className='text-2xl text-center mt-10 sm:mt-0'>{item.title}</h3>
                        <h4 className='text-2xl text-center mt-10 sm:mt-0'>{item.price}</h4>
                        <button className='bg-red-400 text-white h-12 rounded-md w-64 mx-auto mt-4 sm:mt-0 sm:w-20 sm:h-auto sm:mx-0' onClick={() => handleRemove(item.id)}>Remove</button>
                        <button className='bg-green-400 text-white h-12 rounded-md w-64 mx-auto mt-4 sm:mt-0 sm:w-20 sm:h-auto sm:mx-0' onClick={() => handleEdit(item)}>Edit</button>
                    </div>
                ))}
            </div>

            {isModalOpen && (
                <div className="modal-container h-[45vh] pt-10 bg-black text-white">
                    <div className="modal ">
                        <h2 className='text-4xl font-semibold text-center mt-8 mb-8'>Edit Item</h2>
                        <div className="modal-content grid justify-center text-center bg-black ">
                            <input className='border-4 bg-black text-white border-amber-400 rounded-lg p-2 mb-4 w-full' type="text" name="title" placeholder="Title" value={editedItem.title} onChange={handleInputChange} />
                            <input className='border-4 bg-black text-white border-amber-400 rounded-lg p-2 mb-4 w-full' type="text" name="price" placeholder="Price" value={editedItem.price} onChange={handleInputChange} />
                            <input className='border-4 bg-black text-white border-amber-400 rounded-lg p-2 mb-4 w-full' type="text" name="image" placeholder="Image URL" value={editedItem.image} onChange={handleInputChange} />
                            <div className='flex justify-center mt-6'>
                                <button onClick={handleUpdateItem} className='bg-purple-600 text-lg w-32 mx-4 h-10 rounded-lg' >Update</button>
                                <button onClick={handleCloseModal} className='bg-pink-800 text-lg w-32 rounded-lg'>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;
