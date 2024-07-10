import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const EditUserForm = ({ onSave }) => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState("");
  const { id } = useParams(); // Get user ID from route params
  const navigate = useNavigate(); // For navigation after saving

  useEffect(() => {
    const fetchUser = async () => {
      const token = JSON.parse(localStorage.getItem("token")); // Fetch token from localStorage

      if (token) {
        try {
          const response = await axios.get(`http://localhost:3000/users/${id}`, {
            headers: { Authorization: `Bearer ${token}` }, // Include token in headers
          });

          if (response.data) {
            setEmail(response.data.email);
            setFullName(response.data.fullName);
            setRole(response.data.role);
          }
        } catch (error) {
          console.error("Error fetching user:", error); // Handle fetch error
        }
      } else {
        console.error("No token found");
      }
    };

    fetchUser(); // Fetch user data on mount
  }, [id]); // Dependency array includes user ID

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = JSON.parse(localStorage.getItem("token")); // Fetch token again for updating

    if (token) {
      try {
        await axios.patch(`http://localhost:3000/users/${id}`, {
          email,
          fullName,
          role,
        }, {
          headers: { Authorization: `Bearer ${token}` }, // Include token in headers
        });

        if (onSave) {
          onSave();
        }

        navigate("/users"); // Redirect to user list after saving
      } catch (error) {
        console.error("Error updating user:", error); // Handle update error
      }
    } else {
      console.error("No token found"); // Handle missing token error
    }
  };

  return (
    <div className="container" style={{ paddingTop: 130, color: "white", height: "130vh" }}>
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Full Name:</label>
          <input
            type="text"
            className="form-control"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Role:</label>
          <input
            type="text"
            className="form-control"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
        <button
          type="button"
          className="btn btn-secondary ms-2"
          onClick={() => navigate("/users")} // Navigate back to user list
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditUserForm;
