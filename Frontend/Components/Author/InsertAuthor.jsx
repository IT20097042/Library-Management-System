import React, { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
import Message from "../Basic/Message";

import React from "react";

import React from 'react'

export default function InsertAuthor() {

    const [message, setMessage] = useState("");
   [insertFormData, setFormData] = useState({
    FirstName: "",
    LastName: ""
  });

  const { FirstName, LastName } = insertFormData;

  const navigate = useNavigate();


  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const enterAuthor = async (data) => {
    const res = await fetch("http://localhost:5000/authors/create", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await res.json();
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const regData = {
        FirstName,
        LastName
    };

    enterAuthor(regData).then((res) => {
      if (res.success) {
        setMessage(res.message);
        setTimeout(() => {
          navigate("/viewAuthor");
        }, 1000);
      } else {
        setMessage(res.message);
      }
    });
    setFormData({
        FirstName: "",
        LastName: ""
    });
  };
  return (
    <div>
      <>
        <section className="heading">
          <h3>Author Registration Form</h3>
        </section>
        <center>{message ? <Message msg={message} /> : null}</center>
        <section className="form">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label className="form-label">Author First Name </label>
              <input
                type="text"
                className="form-control"
                id="FirstName"
                name="FirstName"
                value={FirstName}
                placeholder="Enter the First Name"
                onChange={onChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Author Last Name </label>
              <input
                type="text"
                className="form-control"
                id="LastName"
                name="LastName"
                value={LastName}
                placeholder="Enter the Last Name"
                onChange={onChange}
                required
              />
            </div>

            

            <div className="form-group">
              <button type="submit" className="btn btn-block">
                Submit
              </button>
            </div>
          </form>
        </section>
      </>
    </div>
  )
}
