import React, { useEffect, useState } from 'react'
import "../components/Home.css"
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link, } from 'react-router-dom';
import  { ToastContainer, toast }  from  'react-toastify' ; 
import  'react-toastify/dist/ReactToastify.css';


const Home = () => {

    const [getuserdata,setUserdata] = useState([]);
    console.log(getuserdata);


    const getdata = async(e)=> {

        const res = await fetch("/getdata" ,{
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
    },[])
 
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

    <div className='mt-5'>
        <div className="container">
            <div className="add_btn mt-2">
                <Link to="/register" className="btn bg-success text-white">Adicionar</Link>
                <ToastContainer />
            </div>

            <table class="table mt-3">
                <thead className='table-dark'>
                    <tr className='center'>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Email</th>
                        <th scope="col">Trabalho</th>
                        <th scope="col">Telefone</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>

                {
                    getuserdata.map((element,id)=> {
                        return (
                            <>
                        <tr className='align-middle center'>
                        <th scope="row">{id + 1}</th>
                        <td>{element.name}</td>
                        <td>{element.email}</td>
                        <td>{element.work}</td>
                        <td>{element.mobile}</td>
                        <td className='d-flex justify-content-around'>
                            <Link to={`view/${element._id}`}><button className='btn bg-success text-white'><span className="icon"><RemoveRedEyeIcon /></span></button></Link>
                            <Link to={`edit/${element._id}`}><button className='btn bg-primary text-white'><span className="icon"><EditIcon /></span></button></Link>
                            <button className='btn bg-danger text-white' onClick={()=>deleteuser(element._id)}><span className="icon"><DeleteIcon /></span></button>
                        </td>
                        </tr>
                            </>
                        )
                    })
                }

                </tbody>
            </table>
        </div>
    </div>
    
  )
}

export default Home