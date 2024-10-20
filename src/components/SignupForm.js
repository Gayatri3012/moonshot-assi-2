import { useContext, useRef , useState} from 'react';
import styles from '../styles/auth.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { AuthContext } from '@/context/AuthContext';


export default function SignupForm() {

    const {isAuthenticated} = useContext(AuthContext);

    console.log('In signup', isAuthenticated)

    const [errorMessage, setErrorMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    
    const name = useRef();
    const email = useRef();
    const password = useRef();


    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Submitting...');
        setIsLoading(true);
        const formData = {
            name: name.current.value,
            email: email.current.value,
            password: password.current.value,
        }

        fetch('/api/signup',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then(res =>{
            if(res.status === 400){
                setErrorMessage(res.message);
                // throw new Error('Email already exists!!!');
            }
            if(res.status !== 200 && res.status !== 400){
                throw new Error('Something went wrong!!!');
            }
            return res.json();
        }).then(resData => {
            console.log(resData);
            if(resData.message === 'Email already exists.'){
                setErrorMessage('Email already exists.')
                password.current.value = '';
                return;
            }else {
               console.log('Signup successful');
               setIsLoading(false);
                router.push('/auth/login');   
            }
                 
            
        }).catch((error) => {
            console.error('Signup error:', error); 
        });
        setIsLoading(false)
    }
 
    return <div className={styles.formContainer}>
        <form className={styles.authForm} onSubmit={handleSubmit} >
            <p className={styles.formName}>Sign Up</p>
            {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
            <input type="text" name="userName" id="userName" placeholder="Name" required ref={name}/>
            <input className={errorMessage ? styles.errorField : undefined} type='email' name='email' id='email' placeholder='Email Address' required ref={email}/>
            
            <input type='password' name='password' id='password' placeholder='Password' required ref={password} minLength={5}/>
            <button disabled={isLoading}>{ isLoading ? <img className={styles.loadingGIF} src="/loading.gif" alt="loading..." /> : "Sign Up"}</button>
            <p>Already have an account? <Link href='/auth/login'>Log in</Link></p>
        </form>
    </div>   
}