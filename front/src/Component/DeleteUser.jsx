// import React from 'react';
// import axios from 'axios';

// const DeleteUser = ({ user, onDelete }) => {
//   const handleDelete = async () => {
//     try {
//       await axios.delete("http://localhost:3000/users/{id}", {
//         headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}` },
//       });      onDelete(); // Triggered after successful deletion
//     } catch (error) {
//       console.error('Error deleting user:', error);
//     }
//   };

//   return (
//     <button onClick={handleDelete}>Delete</button>
//   );
// };

// export default DeleteUser;
