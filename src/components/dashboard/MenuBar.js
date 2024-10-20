import { useContext, useEffect, useRef, useState } from 'react';
import styles from '../../styles/dashboard.module.css';
import { AuthContext } from '@/context/AuthContext';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';


const formatDate = (data) => {
    const [year, month, day] = data.split('-');
    return (`${month}/${day}/${year}`).toString() 
}

export default function MenuBar({ 
    selectedAge, 
    selectedGender , 
    selectedStartDate,  
    selectedEndDate,
    setSelectedAge,
    setSelectedGender,
    setSelectedStartDate,
    setSelectedEndDate
}) {
    const { updateAuthStatus, updateUserId} = useContext(AuthContext);
    const [isDropDownOpen, setIsDropDownOpen] = useState(0);
    
    const router = useRouter();

    const start = useRef()
    const end = useRef()

    const [errorMessage, setErrorMessage] = useState(null);

    const url = router.asPath;
    const params = {};

    const regex = /([^=&?]+)=([^=&?]+)/g;
    let match;

    while ((match = regex.exec(url)) !== null) {
        params[match[1]] = decodeURIComponent(match[2]);
    }
    console.log(params)
    useEffect(() => {
        console.log("use effect menuBar")
        if(params.age){
            const decodedAge = (params.age);
            if(decodedAge) {
                setSelectedAge(decodedAge)
                Cookies.set('selectedAge', decodedAge)
            };
        }
        if(params.gender){
            const decodedGender = (params.gender);
            if(decodedGender) {
                setSelectedGender(decodedGender)
                Cookies.set('selectedGender', decodedGender)
            };

        }
        if(params.startDate){
            const decodedStartDate = (params.startDate);
            if(decodedStartDate) {
                setSelectedStartDate(decodedStartDate)
                Cookies.set('selectedStartDate', decodedStartDate)
            };

        }
        if(params.endDate){
            const decodedEndDate = (params.endDate);
            if(decodedEndDate) {
                setSelectedEndDate(decodedEndDate)
                Cookies.set('selectedEndDate', decodedEndDate)
            };

        }

    }, [params.age, params.gender, params.startDate, params.endDate])


    const handleShareChart = () => {
        const encodedAge = encodeURIComponent(selectedAge || '');
        const encodedGender = encodeURIComponent(selectedGender || '');
        const encodedStartDate = encodeURIComponent(selectedStartDate || '');
        const encodedEndDate = encodeURIComponent(selectedEndDate || '');
        console.log(encodedAge, encodedGender, encodedStartDate, encodedEndDate)
            
        const shareUrl = `${window.location.origin}/dashboard?${encodedAge ? `age=${encodedAge}&`: 'age=&'}${encodedGender ? `gender=${encodedGender}&` : 'gender=&'}${ encodedStartDate ? `startDate=${encodedStartDate}&`: 'startDate=&'}${encodedEndDate ? `endDate=${encodedEndDate}`: 'endDate='}`;
        navigator.clipboard.writeText(shareUrl);
        alert("Chart link copied. Share it with your team."); 
        
    }
    const handleLogout = () => {
       
        localStorage.removeItem('userId')
        updateAuthStatus(false);
        updateUserId(undefined);
        router.push('/')
    }

    function handleFilterClick(index){
        if(index === isDropDownOpen){ 
            setIsDropDownOpen(0)
        }else {
            setIsDropDownOpen(index);
        }
       
    }

    function handleAgeChange(event){
        setSelectedAge(event.target.value);
    }

    function handleGenderChange(event){
        setSelectedGender(event.target.value);
    }


    function handleTimeRangeChange(event){
        event.preventDefault();
        const startDate = formatDate(start.current.value);
        const endDate = formatDate(end.current.value);
        if(new Date(startDate) > new Date(endDate)){
            setErrorMessage('Start date should not be greater than endDate')
            start.current.value = null;
            end.current.value = null;
        }else{
            setErrorMessage(null)
             setSelectedStartDate(startDate)
            setSelectedEndDate(endDate)
            setIsDropDownOpen(0) 
        }
      
    }

    
    const handleClearFilters = () => {
        setSelectedAge(null);
        setSelectedGender(null);
        setSelectedStartDate(null);
        setSelectedEndDate(null)
        // Cookies.remove('selectedAge');
        // Cookies.remove('selectedGender');
        // Cookies.remove('selectedStartDate');
        // Cookies.remove('selectedEndDate');
        Cookies.set('selectedAge',null);
        Cookies.set('selectedGender',null);
        Cookies.set('selectedStartDate',null);
        Cookies.set('selectedEndDate',null);
    }


    return <div className={styles.menuBar}>
        <header>
            <p>📊 DataLens</p>
            <div className={styles.headerButtons}>
                <button onClick={handleShareChart}><img height={18} width={18} src='/share.png' /></button>
                <button onClick={handleLogout}>Logout</button>
            </div>
           
        </header>
        <nav className={styles.filters}>
            <li>
                <p className={styles.filterName} onClick={() => handleFilterClick(1)}>Time Range <img src='/down-arrow.png'/></p>
                {isDropDownOpen === 1 && <div className={styles.dropdownMenu}>
                    <form className={styles.timeRangeForm} onSubmit={handleTimeRangeChange}>
                        {errorMessage && <span style={{color: 'red'}}>{errorMessage}</span>}
                        <p>{start.current?.value ? `From - ${start.current.value}` : 'From'}</p>
                        <input type='date' name='start-date' ref={start} required min="2022-10-03" max="2022-10-29"/>
                        <p>{end.current?.value ? `to - ${end.current.value}`  : 'To'}</p>
                        <input type='date' name='end-date' ref={end} required min="2022-10-03"/>
                        <button>Apply</button>
                    </form>
                    
                </div>}
            </li>
            <li>
                <p className={styles.filterName} onClick={() => handleFilterClick(2)}>Age <img src='/down-arrow.png'/></p>
                { isDropDownOpen === 2 && <div className={styles.dropdownMenu} >
                <span><input type='radio' name='Age' alt='15-25' value="15-25" 
                checked={selectedAge === '15-25'}
                onChange={handleAgeChange} /> 15-25</span>
                <span><input type='radio' name='Age' alt='>25' value=">25" 
                checked={selectedAge === '>25'}
                onChange={handleAgeChange} /> &gt;25</span>
                </div>}
            </li>
            <li> 
                <p className={styles.filterName} onClick={() => handleFilterClick(3)}>Gender <img src='/down-arrow.png'/></p>
                {isDropDownOpen === 3 && <div className={styles.dropdownMenu} >
                    <span><input type='radio' name='Gender' alt='Male' value="Male" 
                    checked={selectedGender === 'Male'}
                    onChange={handleGenderChange}/> Male</span>
                    <span><input type='radio' name='Gender' alt='Female' value="Female" 
                    checked={selectedGender === 'Female'}
                    onChange={handleGenderChange}/> Female</span>
                </div>}
            </li>
            {/* <li className={styles.filterButtons}>
                <button 
                // onClick={handleApplyFilters}
                >
                    Apply</button>
            </li> */}
            <li className={styles.filterButtons}>
                <button onClick={handleClearFilters}>Clear</button>
            </li>
        </nav>
       
    </div>
}