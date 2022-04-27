import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Details = () => {
  return (
    <div>
        <div className="container mt-3">
            <h1 style={{fontweigth: 400}}>Welcome Harsh Pathak</h1>
            <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <img src="/profile.png" style={{width:70, borderRadius:50}} alt="" />
                <h3>Name: <span>Harsh Pathak</span></h3>
                <h3>Age: <span>21</span></h3>
            </CardContent>
            </Card>
        </div>
    </div>
  )
}

export default Details