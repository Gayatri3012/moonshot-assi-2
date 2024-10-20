import { useContext, useRef, useState } from 'react';
import styles from '../styles/auth.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { AuthContext } from '@/context/AuthContext';
import Cookies from 'js-cookie';

export default function LoginForm() {

    const {isAuthenticated, updateAuthStatus, updateUserId} = useContext(AuthContext);

    const [errorMessage, setErrorMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    
    const router = useRouter();

    const email = useRef();
    const password = useRef();    

    const handleLogin = async (event) => {
        event.preventDefault();
        console.log(isAuthenticated);
        setIsLoading(true);
        console.log('In Handle Login');
        const formData = {
            email: email.current.value,
            password: password.current.value
        }
        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then(res =>{
            if(res.status === 400){
                setErrorMessage(res.message);
            }
            if(res.status !== 200 && res.status !== 400){
                throw new Error('Something went wrong!!!');
            }
            return res.json();
        }).then(resData => {
            if(resData.message === 'Please enter valid credentials.'){
                setErrorMessage('Please enter valid email.');
                password.current.value = '';
            } else if(resData.message === 'Incorrect password.'){
                setErrorMessage('Incorrect password.');
            } else {
                console.log(resData);
                console.log('Login successful');
                localStorage.setItem('userId',JSON.stringify(resData.userId));
                updateAuthStatus(true)
                updateUserId(resData.userId)
                setIsLoading(false);


                const encodedAge = encodeURIComponent('');
                const encodedGender = encodeURIComponent('');
                const encodedStartDate = encodeURIComponent('');
                const encodedEndDate = encodeURIComponent('');
            
                const dashboardUrl = `/dashboard?age=${encodedAge}&gender=${encodedGender}&startDate=${encodedStartDate}&endDate=${encodedEndDate}`;
                const isParamsUrl = Cookies.get('paramsUrl')
                if(isParamsUrl){
                    Cookies.remove('paramsUrl')
                    console.log(isParamsUrl)
                    router.replace(JSON.parse(isParamsUrl));
                }else {
                    router.replace(dashboardUrl); 
                }
                  
            }
              
        }).catch((error) => {
            console.error('Login error:', error); 
        });
        setIsLoading(false)
    }
    
    return <div className={styles.formContainer}>
        <form className={styles.authForm} onSubmit={handleLogin}>
            <p className={styles.formName}>Login</p>
            {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
            <input className={errorMessage === 'Please enter valid email.' ? styles.errorField : undefined} type='email' name='email' id='email' placeholder='Email Address' ref={email} required/>
            <input className={errorMessage === 'Incorrect password.' ? styles.errorField : undefined} type='password' name='password' id='password' placeholder='Password' ref={password} required/>
            <button disabled={isLoading}>{ isLoading ? <img className={styles.loadingGIF} src="/loading.gif" alt="loading..." /> : "Login"}</button>
            <p>Don&apos;t have an account? <Link href='/auth/'>Sign Up</Link></p>
        </form>
    </div>   
}