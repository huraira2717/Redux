import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove, update } from '../../../ReduxStore/Cartslice';

function Cart() {
    const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal open/close
    const [editedItem, setEditedItem] = useState(null); // State to track the item being edited
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
                    <div key={index} className='flex justify-around p-4 m-2 font-bold border-4'>
                        <img className='h-12' src={item.image} alt='img' />
                        <h3 className='text-2xl'>{item.title}</h3>
                        <h4 className='text-2xl'>{item.price}</h4>
                        <button className='bg-red-400 w-20  text-white rounded-md' onClick={() => handleRemove(item.id)}>Remove</button>
                        <button className='bg-green-400 w-20  text-white rounded-md' onClick={() => handleEdit(item)}>Edit</button>
                    </div>
                ))}
            </div>

            {isModalOpen && (
                <div className="modal border-4 shadow-2xl w-96 mx-auto mt-10 bg-black text-white h-[60vh] font-semibold">
                <h2 className='text-4xl font-semibold text-center mt-8 mb-8'>Edit Item</h2>

                    <div className="modal-content grid justify-center text-center">
                        
                        <input className='border-4 bg-black border-amber-400   rounded-lg p-2 mb-4 w-[100%]' type="text" name="title" value={editedItem.title} onChange={handleInputChange} />
                        <input className='border-4 bg-black border-amber-400  rounded-lg p-2 mb-4 w-[100%]' type="text" name="price" value={editedItem.price} onChange={handleInputChange} />
                        <input className='border-4 bg-black border-amber-400 rounded-lg p-2 mb-4 w-[100%]' type="text" name="image" value={editedItem.image} onChange={handleInputChange} />
                        <div className='flex justify-center mt-6'>
                        <button onClick={handleUpdateItem} className='bg-purple-600 text-lg w-32 mx-4 h-10 rounded-lg' >Update</button>
                        <button onClick={handleCloseModal} className='bg-pink-800 text-lg w-32 rounded-lg'>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;
