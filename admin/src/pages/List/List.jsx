import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { url } from '../../assets/assets';
import './List.css';

const List = () => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error fetching list");
    }
  };

  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, {
      id: foodId
    });
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error("Error removing item");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className='list-page'>
      <h2>All Services</h2>
      <div className='list-table'>
        <div className="list-table-header">
          <span>Image</span>
          <span>Name</span>
          <span>Category</span>
          <span>Price</span>
          <span>Action</span>
        </div>
        {list.map((item, index) => (
          <div key={index} className='list-table-row'>
            <img src={`${url}/images/${item.image}`} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>${item.price}</p>
            <button className='delete-btn' onClick={() => removeFood(item._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;