import {React, useState} from "react"

export default function Mainpage(){
    const [userData, setUserData]= useState({
        username:'',
        password:''
    })

    const changingData= (e)=>{
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    const submitData=(e)=>{
        e.preventDefault()
    }

    return(
        <main>
            <div className="InfoInicio">
                <p>Esta es una página web para Dokkan Battle</p>
            </div>
            <div className="Login">
                <form onSubmit={submitData}>
                    <label>
                        Usuario:
                        <input type="text" name="username" className="input" required value={userData.username} onChange={changingData}></input>
                    </label>
                    <br/>
                    <label>
                        Contraseña:
                        <input type="password" name="password" className="input" required value={userData.password} onChange={changingData}></input>    
                    </label>
                    <br/>
                    <button type="submit">Iniciar Sesión</button>                    
                </form>                
            </div>
        </main>
    )
}