import React,  { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import  {  ToastContainer ,  toast  }  from  'react-toastify' ; 
import  'react-toastify/dist/ReactToastify.css' ;

const Edit = () => {

    // const [getuserdata,setUserdata] = useState([]);
   // console.log(getuserdata); //

    const navigate = useNavigate("");

    const {id} = useParams("");
    console.log(id);

    const [inpval,setINP] = useState({
        name:"",
        email:"",
        age:"",
        mobile:"",
        work:"",
        add:"",
        desc:""
    })

    const setdata = (e) => {
        console.log(e.target.value);
        const {name, value} = e.target;
        setINP((preval) => {
            return {
            ...preval,
            [name]:value
            }
            
        })

    }

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
    
            setINP(data)
            console.log("get data");
        }
       
    }

    useEffect(()=> {
        getdata();
    },[]);

    const updateuser = async(e)=> {
        e.preventDefault();

        const {name,email,work,add,mobile,desc,age} = inpval;

        const res2 = await fetch(`/updateuser/${id}`, {
            method: "PATCH",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                name,email,work,add,mobile,desc,age
            })
        });

        const data2 = await res2.json();
        console.log(data2);

        if(res2.status === 422 || !data2){
            toast.error("Erro ao Editar !", {
                position: toast.POSITION.TOP_CENTER
              });
        }else{
            toast.success("Editado com sucesso !", {
                position: toast.POSITION.TOP_CENTER
              });
              navigate("/")
        }
    }

  return (
    <div className='container'>
        <Link to="/">Home2</Link>
        <form className='mt-4'>
            <div className="row">
            <div className="mb-2 col-lg-6 col-md-6 col-12" >
                <label htmlFor="exampleInputEmail1" className="form-label">Nome</label>
                <input type="text" name='name' value={inpval.name} onChange={setdata} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text"></div>
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
                <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                <input type="email" name='email' value={inpval.email} onChange={setdata} className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
                <label htmlFor="exampleInputPassword1" className="form-label">Idade</label>
                <input type="number" name='age' value={inpval.age} onChange={setdata}  className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
                <label htmlFor="exampleInputPassword1" className="form-label">Telefone</label>
                <input type="tel" name='mobile' value={inpval.mobile} onChange={setdata} className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
                <label htmlFor="exampleInputPassword1" className="form-label">Trabalho</label>
                <input type="text" name='work' value={inpval.work}  onChange={setdata} className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
                <label htmlFor="exampleInputPassword1" className="form-label">Endereço</label>
                <input type="text" name='add' value={inpval.add} onChange={setdata} className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3 col-lg-12 col-md-12 col-12">
                <label htmlFor="exampleInputPassword1" className="form-label">Descrição</label>
                <textarea name="desc" value={inpval.desc} onChange={setdata} className='form-control' id="" cols="30" rows="s"></textarea>
            </div>
            <button type="submit" onClick={updateuser} className="btn btn-primary mb-2">Enviar</button>
            <ToastContainer/>
            </div> 
     </form>
    </div>
  )
}

export default Edit;