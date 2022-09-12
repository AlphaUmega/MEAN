import styleSheet from './BannerComponent.module.css';
import { useState } from 'react';

export default function BannerComponent(){
    const [userEmail,setUserEmail]=useState('');
    const [password,setPassword]=useState('');

    const onEmailEntered=(event)=>{
        setUserEmail(event.target.value);
    }
    const onPasswordEntered=(event)=>{
        setPassword(event.target.value);
    }

    let userDetails={};

    const submitForm=()=>{
        userDetails['email']=userEmail;
        userDetails['password']=password;
        console.log(userDetails);
    }

    return(
        <div className={`row ${styleSheet.backgroundImage}`}>
            <div className='col-md-6 offset-md-3' style={{marginTop:'14%'}}>
            <div className="card" style={{width : '100%', background:'transparent', color:'white', border:'none'}}>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control"
                            placeholder='Enter Your Email ID' onKeyUp={onEmailEntered} />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" 
                            placeholder='Enter Your Password' onKeyUp={onPasswordEntered}/>
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" >Check me out</label>
                        </div>
                        <button type="button" className="btn btn-outline-light" onClick={submitForm}>Submit</button>
                    </form>
                </div>
            </div>
            </div>
        </div>
    )
}
