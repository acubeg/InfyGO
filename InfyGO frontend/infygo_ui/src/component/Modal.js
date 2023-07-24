import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Modal = ({message }) => {

  const navigate = useNavigate();

  useEffect(()=>{
    setTimeout(()=>{
      navigate("/flight-search");
    },1000)
  },[navigate]);




  return (
    <div className="modal fade in" role="dialog" style={{ display: "block" }}>
      <div className="modal-dialog modal-md">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-body">
              <span className="glyphicon glyphicon-ok text-success" aria-hidden="true"></span> {message}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
