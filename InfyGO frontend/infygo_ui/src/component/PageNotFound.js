import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div>
      <h2 className="text-center">404 Not Found</h2>
      <p className="text-center">The page you are looking for does not exist.</p>
      <p className="text-center">
        Go back to <Link to="/">Home</Link>.
      </p>
    </div>
  );
};

export default PageNotFound;
