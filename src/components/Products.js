import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Products = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/products")
      .then(res => res.json())
      .then(data => setUsers(data));
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const deleteHandler = id => {
    // console.log(id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/products/${id}`, {
          method: "DELETE",
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount === 1) {
              const remainingProducts = users.filter(user => user._id !== id);
              setUsers(remainingProducts);
            }
          });
      }
    });
  };

  return (
    <div>
      {loading ? (
        <h1>loading......</h1>
      ) : (
        <>
          <h1>Total Products {users.length}</h1>
          <ul>
            {users.map(user => (
              <li key={user._id}>
                Name: {user.name} Price:{user.price} Quantity: {user.quantity}{" "}
                <button onClick={() => deleteHandler(user._id)}>Delete</button>{" "}
                <Link to={`/products/update/${user._id}`}><button>update</button></Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Products;
