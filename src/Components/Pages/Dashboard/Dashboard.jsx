import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { useDispatch } from 'react-redux';
import { add } from '../../../ReduxStore/Cartslice';
import Crosel from '../Crosel/Crosel'
import Box from '../Box/Box'
import Footer from '../Footer/Footer';
import './Dashboard.css'
import axios from 'axios'

function Dashboard() {
  const [products, setProducts] = useState([]);
  const dispatch=useDispatch()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
  
        const data = response.data;
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);
  
const handleAdd=(product) =>{
dispatch(add(product))
}

  return (
    <>
       <Navbar /> 
 <Crosel />
            <Box />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto gap-8 p-4 sm:mx-0">
        {products.map(product => (
          <div className="card h-96 border-4 w-80 shadow-2xl text-center rounded-xl align-middle grid justify-center" key={product.id}>
            <img src={product.image} className='h-36 mx-auto grid-flow-row align-middle' alt={product.title} />
            <h3 className='font-bold text-center text-lg mt-10'>{product.title}</h3>
            <h4 className='text-center font-bold text-2xl'>{product.price}</h4>
            <button className='w-44 bg-blue-700 font-bold rounded-2xl text-white  mx-auto' onClick={()=>handleAdd(product)}>Add to cart</button>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}

export default Dashboard;
