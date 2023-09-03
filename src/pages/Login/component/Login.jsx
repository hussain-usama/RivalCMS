import React, { useState } from "react";
import Button from "../../../components/Buttons/components/Button";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import styles from '../styles/Login.module.css'
import Textfield from "../../../components/Textfields/components/Textfield";
import { emailValidation } from "../../../utils/validations";
import { useNavigate } from "react-router-dom";

const INITIAL_STATE={
    email:'',
    password:''
}

const Login = () => {
    const [formData,setFormData]=useState({...INITIAL_STATE});
    const [error,setError]=useState({email:false, password:false});
    const navigate=useNavigate();

    const handleChange=(e)=>{
        try {
            setError({email:false, password:false});
            const {value,name}=e.target;
            setFormData((prevState)=>({
                ...prevState,
                [name]:value
            }))
        } catch (error) {
            console.log(error)
        }
    }

    const validateForm={
        email : (obj)=>{
           let value=obj.email; 
           if(!value || !emailValidation(value)){
            return true;
           }
           return false; 
        },
        password : (obj)=>{
           let value=obj.password; 
            if(!value || value?.length<8){
                return true;
               }
            return false;
        }
    }

    const submitForm=()=>{
        try {
            let checkEmail=validateForm.email(formData)
            let checkPassword=validateForm.password(formData)
            if(checkEmail || checkPassword){
                setError({email:checkEmail, password:checkPassword});
                return;
            }
            setError({email:false, password:false});
            localStorage.setItem('token',true)
            navigate('/dashboard/blogArticles')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={styles.login}>
            <div className={styles.loginMain}>
                <label className={`CMSHeader ${styles.loginHeader}`}>
                    <span className={styles.rivalHead}>Rival</span><span className={styles.cmsHead}>CMS</span>
                </label>
                <div className={styles.loginCard}>
                    <div className={styles.loginIcon}>
                        <LockOutlinedIcon />
                        <label >Email address</label>
                    </div>
                    <div>
                        <Textfield type={'text'} name={"email"} value={formData.email} onChange={handleChange}  /><br />
                        {error.email ? <label className={styles.errorText}>Invalid Email</label> : null}
                    </div>
                    <div className={styles.loginIcon}>
                        <MailOutlineOutlinedIcon />
                        <label >Password</label>
                    </div>
                    <div>
                        <Textfield type={'password'}  name={"password"} value={formData.password} onChange={handleChange} /><br />
                        {error.password ? <label className={styles.errorText}>Paswword must be atleast 8 characters</label> : null}
                    </div>
                    <div className={styles.signin}>
                        <label className={styles.forgetPasswrod}>Forgot password?</label>
                        <Button text={'Sign in'} styles={{width:175}} onClick={submitForm} />
                    </div>
                    <Button type={'secondary'} text={"Don't have & account?"} styles={{width:356}} />

                </div>
            </div>
        </div>
    )
}
export default Login