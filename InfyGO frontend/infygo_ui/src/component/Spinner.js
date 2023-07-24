import React from "react";

const Spinner = ({ loading }) => {
    if (!loading) return null; // Don't render the spinner if loading is false
  
    return (
      <div className="spinner-overlay">
        <div className="spinner"></div>
      </div>
    );
  };

export default Spinner;