import React, {useState} from 'react';
import { useEffect } from 'react';
import {Link, useNavigate, useSearchParams} from "react-router-dom";
import Message from "../Basic/Message";

import React from 'react'

export default function UpdateAuthor() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [author, setAuthor] = useState();

    const [message, setMessage] = useState('');

    const [FirstName, setFirstName] = useState('')
    const [LastName, setLastName] = useState('')

    const navigate = useNavigate()
    const id = searchParams.get('id')

    const fetchAuthorInfo =async () =>{
        const res = await fetch("http://localhost:5000/authors/viewbyID/"+id)
        const data = await res.json()
        return data;
    }

    useEffect(() => {
        fetchAuthorInfo().then(res => {
            
            setFirstName(res.authorExist.FirstName)
            setLastName(res.authorExist.LastName)
            
            
        })
    }, [])

    const editAuthor = async (data) => {
        const res = await fetch('http://localhost:5000/authors/update/'+id, {
            method : "PUT",
            headers : {
                'Content-type' : 'application/json',
            },
            body : JSON.stringify(data)
        })
        return await res.json() 
    }

    const onSubmit = (e)=> {
        e.preventDefault()

        const regData ={
            FirstName ,
            LastName
        }

        editAuthor(regData).then(res => {
            if(res.success){
                setMessage("Author Updated Successfully!")
                setTimeout(() => {
                    navigate('/viewAuthor');
                }, 1000)
            }
        }

        )
        
    }
  return (
    <div>
      <>
        <section className="heading">
          <h3>Author Details Update</h3>
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
                onChange={(e) => setFirstName(e.target.value)}
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
                onChange={(e) => setLastName(e.target.value)}
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
