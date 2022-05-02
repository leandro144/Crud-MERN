import React from 'react'
import "../components/Home.css"
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='mt-5'>
        <div className="container">
            <div className="add_btn mt-2">
                <Link to="/register" className="btn bg-success text-white">Adicionar</Link>
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
                    <tr className='align-middle center'>
                        <th scope="row">1</th>
                        <td>Meet</td>
                        <td>meet@email.com</td>
                        <td>WebDeveloper</td>
                        <td>91919191919191</td>
                        <td className='d-flex justify-content-around'>
                        <button className='btn bg-success text-white'><span className="icon"><RemoveRedEyeIcon /></span></button>
                            <button className='btn bg-primary text-white'><span className="icon"><EditIcon /></span></button>
                            <button className='btn bg-danger text-white'><span className="icon"><DeleteIcon /></span></button>
                        </td>
                    </tr>
                    <tr className='align-middle center'>
                        <th scope="row">1</th>
                        <td>Meet</td>
                        <td>meet@email.com</td>
                        <td>WebDeveloper</td>
                        <td>91919191919191</td>
                        <td className='d-flex justify-content-around'>
                            <button className='btn bg-success text-white'><span className="icon"><RemoveRedEyeIcon /></span></button>
                            <button className='btn bg-primary text-white'><span className="icon"><EditIcon /></span></button>
                            <button className='btn bg-danger text-white'><span className="icon"><DeleteIcon /></span></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Home