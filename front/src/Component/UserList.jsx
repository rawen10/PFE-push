import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Navigate, useNavigate } from 'react-router-dom';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate=useNavigate()

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/users", {
          headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}` },
        });
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-5" style={{ background: "black", color: "white" }}>
        <p>Loading...</p>
      </div>
    );
  }

  if (users.length === 0) {
    return (
      <div className="text-center py-5" style={{ background: "black", color: "white" ,height:"130vh",alignItems:"center", display:"flex",justifyContent:"center"}}>
        <h2>Only admins can see the users. You have no access to this page</h2>
      </div>
    );
  }

  return (
    <div className="container my-5" style={{ background: "black", paddingTop: 150, height: "100vh", color: "white" }}>
      <h2 className="mb-4">User List</h2>
      <div className="table-responsive">
        <table className="table table-dark table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Full Name</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.fullName}</td>
                <td>{user.role}</td>
                <td>
                  <button className="btn btn-primary btn-sm me-2" onClick={() => navigate(`/edit/${user.id}`)}>Edit</button>
                  <button className="btn btn-danger btn-sm"  >Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
