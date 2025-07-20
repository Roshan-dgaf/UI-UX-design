import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { assets, url } from '../../assets/assets';
import './Add.css';

const Add = () => {

    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        category: "Newari"
    });

    const [image, setImage] = useState(false);

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("price", Number(data.price));
        formData.append("category", data.category);
        formData.append("image", image);
        const response = await axios.post(`${url}/api/food/add`, formData);
        if (response.data.success) {
            toast.success(response.data.message)
            setData({
                name: "",
                description: "",
                price: "",
                category: "Newari"
            })
            setImage(false);
        }
        else {
            toast.error(response.data.message)
        }
    }

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }))
    }

    return (
        <div className='add'>
            <form className='flex-col' onSubmit={onSubmitHandler}>
                <div className='add-img-upload flex-col'>
                    <p>Service image</p>
                    <label htmlFor="image">
                        <img src={!image ? assets.upload_area : URL.createObjectURL(image)} alt="" />
                    </label>
                    <input onChange={(e) => { setImage(e.target.files[0]) }} type="file" id="image" hidden required />
                </div>
                <div className='add-product-name flex-col'>
                    <p>Service name</p>
                    <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Type here' required />
                </div>
                <div className='add-product-description flex-col'>
                    <p>Service description</p>
                    <textarea name='description' onChange={onChangeHandler} value={data.description} type="text" rows={6} placeholder='Write content here' required />
                </div>
                <div className='add-category-price'>
                    <div className='add-category flex-col'>
                        <p>Service category</p>
                        <select name='category' onChange={onChangeHandler} >
                            <option value="Newari">Basic</option>
                            <option value="Nepali">Intermidiate</option>
                            <option value="Indian">Advance</option>
                            {/* <option value="Chinese">Chinese</option>
                            <option value="Italian">Italian</option>
                            <option value="Korean">Korean</option>
                            <option value="German">German</option>
                            <option value="English">English</option> */}
                        </select>
                    </div>
                    <div className='add-price flex-col'>
                        <p>Service Price</p>
                        <input type="Number" name='price' onChange={onChangeHandler} value={data.price} placeholder='$25' />
                    </div>
                </div>
                <button type='submit' className='add-btn' >Add New Service</button>
            </form>
        </div>
    )
}

export default Add
