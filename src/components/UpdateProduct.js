import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  // console.log(user)
  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/products/${id}`)
      .then(res => res.json())
      .then(data => setUser(data));
    setLoading(false);
  }, [id]);


  const handleNameChange =(e) =>{
    const updatedName = e.target.value;
    // console.log(updatedName);
    const updatedUser = {
      name: updatedName,
      price: user.price,
      quantity: user.quantity
    }
    setUser(updatedUser)
  }
  const handlePriceChange =(e) =>{
    const updatedPrice = e.target.value;
    const updatedUser = {
      name: user.name,
      price: updatedPrice,
      quantity: user.quantity
    }
    setUser(updatedUser)
  }
  const handleQuantityChange =(e) =>{
    const updatedQuantity = e.target.value;
    const updatedUser = {
      name: user.name,
      price: user.price,
      quantity: updatedQuantity
    }
    setUser(updatedUser)
  }

  const formSubmitHandler = (e) =>{
    e.preventDefault();
    const url = `http://localhost:5000/products/${id}`
    fetch(url,{
      method: "PUT",
      headers:{
        "Content-Type" : "application/json",
      },
      body: JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.modifiedCount === 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Data Updated Successfull',
          showConfirmButton: false,
          timer: 1500
        })
        navigate('/products')
    }
    })
  }
  return (
    <div>
      {loading ? (
        <p>Loading.....</p>
      ) : (
        <>
          <h2>This is Update User</h2>
          <p>{id}</p>
          <p>{user.name}</p>
       
          <form onSubmit={formSubmitHandler}>
          <input type='text' value={user.name || ""} onChange={handleNameChange}/><br/>
          <input type='text' value={user.price || ""} onChange={handlePriceChange}/><br/>
          <input type='text' value={user.quantity || ""} onChange={handleQuantityChange}/><br/>
          <input type='submit' value="Update"/>
          </form>
        </>
      )}
    </div>
  );
};

export default UpdateProduct;
