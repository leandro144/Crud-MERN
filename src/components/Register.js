import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {

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

  return (
    <div className='container'>
        <Link to="/">Home</Link>
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
            <button type="submit" className="btn btn-primary mb-2">Enviar</button>
            </div> 
     </form>
    </div>
  )
}

export default Register