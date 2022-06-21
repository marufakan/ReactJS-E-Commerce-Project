import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { customerRegister } from './Services';


function Register() {



    // sayfa geçiş hareketleri için kullanılan bir yonmtmdir
    const navigate = useNavigate()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    //arrow function

    const fncSend = (evt: React.FormEvent) => {
        evt.preventDefault();

        customerRegister(firstName, lastName, phone, email, password).then(res => {
            const status = res.status
            if (status) {
                console.log(res.data)
                navigate("/")
            } else {
                alert("Kayıt Yapılamadı")
            }
        })
    };

    return (
        <>
            <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                    <h1>Customer Register</h1>
                    <form onSubmit={fncSend} >
                        <div className="mt-3">
                            <input onChange={(evt) => { setFirstName(evt.target.value) }} type="text" className="form-control" placeholder="Name" />
                        </div>
                        <div className="mt-3">
                            <input onChange={(evt) => { setLastName(evt.target.value) }} type="text" className="form-control" placeholder="Surname" />
                        </div>
                        <div className="mt-3">
                            <input onChange={(evt) => { setPhone(evt.target.value) }} type="tel" className="form-control" placeholder="Phone" />
                        </div>
                        <div className="mt-3">
                            <input onChange={(evt) => { setEmail(evt.target.value) }} type="email" className="form-control" placeholder="e-Mail" />
                        </div>
                        <div className="mt-3">
                            <input onChange={(evt) => { setPassword(evt.target.value) }} type="password" className="form-control" placeholder="Password" />
                        </div>
                        <div className='mt-3'>
                            <button className='btn btn-success form-control' type='submit'>Send</button>
                        </div>
                        <div className='mt-3'>
                            <a onClick={(evt) => navigate("/")} role="button" className='btn btn-danger form-control'>Back</a>
                        </div>
                    </form>
                </div>
                <div className="col-sm-4"></div>
            </div>


        </>
    )
}

export default Register