import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setListOfUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="user-list">
      <h1>User List</h1>
      <ul>
        {listOfUsers.map(user => (
          <li key={user.id}>
            <div className="user-info">
              <h2>{user.name}</h2>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
              <p>Address: {user.address.street}, {user.address.city}, {user.address.zipcode}</p>
              <p>Company: {user.company.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
