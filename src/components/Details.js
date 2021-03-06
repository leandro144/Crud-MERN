import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CardContent from '@mui/material/CardContent';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import  { ToastContainer, toast }  from  'react-toastify' ; 
import  'react-toastify/dist/ReactToastify.css' ;
import { useParams, Link } from 'react-router-dom';

import "./Details.css";

const Details = () => {

  const [getuserdata,setUserdata] = useState([]);
  console.log(getuserdata);

  const {id} = useParams("");
  console.log(id);

  const getdata = async()=> {

    const res = await fetch(`/getuser/${id}` ,{
        method: "GET",
        headers:{
            "Content-Type": "application/json"
        }
    });

    const data = await res.json();
    console.log(data);

    if(res.status === 422 || !data) {
        console.log("error ");

    }else{

        setUserdata(data)
        console.log("get data");
    }
   
}

useEffect(()=> {
  getdata();
})

const deleteuser = async (id)=>{
  const res2 = await fetch(`/deleteuser/${id}`, {
      method: "DELETE",
      headers:{
          "Content-Type": "application/json"
      }
  });

  const deletedata = await res2.json();
  console.log(deletedata);

  if(res2.status === 422 || !deletedata) {
      console.log("error")
  }else{
      toast.success(" Usuário excluido com sucesso !", {
          position: toast.POSITION.TOP_CENTER
      });
      getdata();
  }
}

  return (
    <div>
        <div className="container mt-3">
            <h1 style={{fontweigth: 400}}>Welcome <span>{getuserdata.name}</span></h1>
            <Card sx={{ maxWidth: 600 }}>
            <CardContent>
              <div className="row">
              <div className="add_btn">
              <Link to={`/edit/${getuserdata._id}`}><button className='btn bg-primary text-white mx-2'><span className="icon"><EditIcon /></span></button></Link>
              <button className='btn bg-danger text-white' onClick={()=>deleteuser(getuserdata._id)}><span className="icon"><DeleteIcon /></span></button>
              <ToastContainer />
              </div>
                <div className="left_view col-lg-6 col-md-6 col-12">
                <img src="/profile.png" style={{width:70, borderRadius:50}} alt="" />
                <h3 className='mt-3'>Name: <span>{getuserdata.name}</span></h3>
                <h3 className='mt-3'>Age: <span>{getuserdata.age}</span></h3>
                <p className='mt-3'><EmailIcon /> Email: <span>{getuserdata.email}</span></p>
                <p className='mt-3'><WorkIcon /> Occuption: <span>{getuserdata.work}</span></p>
              </div>
                <div className="right_view col-lg-6 col-md-6 col-12">
                    <p className='mt-5'><PhoneIphoneIcon /> Mobile: <span>{getuserdata.mobile}</span></p>
                    <p className='mt-3'><LocationOnIcon /> Local: <span>{getuserdata.add}</span></p>
                    <p className='mt-3'>Description : <span>{getuserdata.desc}</span></p>
                </div>
              </div>
              
            </CardContent>
            </Card>
        </div>
    </div>
  )
}

export default Details