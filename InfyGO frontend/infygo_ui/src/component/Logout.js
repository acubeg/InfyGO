import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const Logout = () => {
  // Here, you can implement the logout functionality as per your application's requirements.
  // For example, clearing session data, logging out the user, etc.

  // For this example, we will simply display a logout message and a link to the home page.
 useEffect(()=>{

    sessionStorage.clear();
 },[])
  return (
    <div>
      <h2 className="text-center">Successfully logout</h2>
      <p className="text-center">
        Go back to <Link to="/">Home</Link>.
      </p>
      <p className="text-center">
        Do you want to <Link to="/login">Login again</Link>.
      </p>
    </div>
  );
};

export default Logout;
