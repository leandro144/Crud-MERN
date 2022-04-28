import React from 'react'
import Card from '@mui/material/Card';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CardContent from '@mui/material/CardContent';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import "./Details.css";

const Details = () => {
  return (
    <div>
        <div className="container mt-3">
            <h1 style={{fontweigth: 400}}>Welcome Harsh Pathak</h1>
            <Card sx={{ maxWidth: 600 }}>
            <CardContent>
              <div className="row">
              <div className="add_btn">
              <button className='btn bg-primary text-white mx-2'><span className="icon"><EditIcon /></span></button>
                            <button className='btn bg-danger text-white'><span className="icon"><DeleteIcon /></span></button>
              </div>
                <div className="left_view col-lg-6 col-md-6 col-12">
                <img src="/profile.png" style={{width:70, borderRadius:50}} alt="" />
                <h3 className='mt-3'>Name: <span>Harsh Pathak</span></h3>
                <h3 className='mt-3'>Age: <span>21</span></h3>
                <p className='mt-3'><EmailIcon /> Email: <span>Harshok@gmail.com</span></p>
                <p className='mt-3'><WorkIcon /> Occuption: <span>WebDeveloper</span></p>
              </div>
                <div className="right_view col-lg-6 col-md-6 col-12">
                    <p className='mt-5'><PhoneIphoneIcon /> Mobile: <span>+55 11951685569</span></p>
                    <p className='mt-3'><LocationOnIcon /> Local: <span>Av. Doutor Benedito Estevam Dos Santos</span></p>
                    <p className='mt-3'>Description : <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, quaerat?</span></p>
                </div>
              </div>
              
            </CardContent>
            </Card>
        </div>
    </div>
  )
}

export default Details