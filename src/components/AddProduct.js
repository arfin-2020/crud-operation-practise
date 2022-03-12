import React, { useRef } from "react";
import Swal from "sweetalert2";

const AddProduct = () => {
  const nameRef = useRef("");
  const priceRef = useRef("");
  const quantityRef = useRef("");

  const handleFormSubmit = e => {
    e.preventDefault();
    const name = nameRef.current.value;
    const price = priceRef.current.value;
    const quantity = quantityRef.current.value;
    const newProducts = {name,price,quantity};
    // console.log(newProducts);
    // console.log(nameRef.current.value);

    

    fetch("http://localhost:5000/products",{
        method: "POST",
        headers: {
            
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(newProducts)
    })

    .then(res=>res.json())
    .then(data=>{
        // console.log(data)
        if(data.insertedId){
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your Product added successfull.',
                showConfirmButton: false,
                timer: 1500
              })
              e.target.reset()
        }
    })

  };
  return (
    <div>
      <h1>Please Add your Products</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="name" ref={nameRef} placeholder="Enter product name" />{" "}
        <br />
        <input type="name" ref={priceRef} placeholder="Enter price" />
        <br />
        <input type="name" ref={quantityRef} placeholder="Enter Quantity" />
        <br />
        <input type="submit" value="Add Products" />
      </form>
    </div>
  );
};

export default AddProduct;
