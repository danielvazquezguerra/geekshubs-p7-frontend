import React from 'react'
import './Register.scss'

const Register = (props) => {

    return (
        <div className="Login">


            <div className="LoginWrapper">

                <section className="LoginUp">

                <form className="FormLogin">

                    <div className="form-group">
                        <label for="email">Email</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group">
                        <label for="password">Password</label>
                        <input type="password" className="form-control" id="password" />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>

                </form>
                    
                </section>

                     <img src="images/register-fondo-01.png" className="BackLogin" alt="patineta"/>
            
                <section className="FootLogin">

                <div className="FootLeft">

                    <h3>PENNY SKATEBOARDS</h3>

                </div>
                <div className="FootRight">
                    
                    <p>

                        12 years experience in skateboard manufacturing has given me a strong appreciation for what it takes to make great quality skateboards. I’ve channeled everything I’ve learnt in manufacturing and design to come up with a high performance, long lasting, ultra fun plastic skateboard. 

                    </p>
                        
                </div>
                        
                </section>

            </div>
        </div>
    )
}

export default Register;
