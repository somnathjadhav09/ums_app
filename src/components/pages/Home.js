import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const Home = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();

    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3003/users");
        setUser(result.data)
    }

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3003/users/${id}`);
        loadUsers();
        alert("User has been deleted successfully!");
      };

    return (
        <div className="container">
           <div className="py-4">
           <h1>Home Page</h1>
            <table className="table border shadow">
                <thead className="thead-dark">
                    <tr className="table-dark">
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                   {
                       users.map((user,index)=>(
                           <tr className="table-success">
                               <th scope="row">{index+1}</th>
                               <td>{user.name}</td>
                               <td>{user.username}</td>
                               <td>{user.email}</td>
                               <td>
                                  <div class="d-grid gap-2 d-md-flex justify-content">
                                   <Link type="button" className="btn btn-outline-primary btn-sm mr-2" to={`/users/${user.id}`}>View</Link>
                                   <Link type="button" className="btn btn-outline-secondary btn-sm mr-2" to={`/users/edit/${user.id}`}>Edit</Link>
                                   <Link type="button" className="btn btn-outline-danger btn-sm mr-2 "onClick={() => deleteUser(user.id)}>Delete</Link>
                                  </div>
                                  
                               </td>
                           </tr>
                       ))
                   }
                </tbody>
            </table>
           </div>
        </div>
    );

};

export default Home;