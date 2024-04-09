import React, { useContext } from 'react'
import myContext from '../Context/ContectData'
import { useDispatch } from 'react-redux'


function Update() {
    const cotext = useContext(myContext)
    const {product , setProduct , UpdateProduct}=cotext
    const dispatch = useDispatch()
    const handleUpdate = () =>{
      
    }
  return (
    <>
        <div className='main'>
        <h1 className='text-4xl text-center'>Update</h1>
        <div className='grid content-center h-[40vh] border-4 bg-sky-400'>
        <div className='h-14'>
            <input type='text' placeholder='Product_URL' name='Image_URL'  onChange={(e)=>setProduct({...product ,image_URL:e.target.value})} value={product.image_URL} />
            </div>
            <div className=''>
            <input type='text' placeholder='Product Tilte' name='Product title'  onChange={(e)=>setProduct({...product ,title: e.target.value })} value={product.title} />
            </div>
            <div>
            <input type='text' placeholder='Product price' name='Product Price'  onChange={(e)=>setProduct({...product, Price:e.target.value})} value={product.Price} />
            </div>
            <div>
            <button className='' onClick={handleUpdate}>Update</button>
            </div>
        </div>
        </div>
    </>
  )
}

export default Update