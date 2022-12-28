import Card from '../UI/Card'
import styles from './AddUser.module.css'
import Button from '../UI/Button' 
import { useState } from 'react'
import ErrorModal from '../UI/ErrorModal'
const AddUser=(props)=>{

const[enteredUsername,setEnteredUsername]=useState('')
const[enteredUserAge,setEnteredUserAge]=useState('')
const[error,setError]=useState()

const addUserNameHandler=(event)=>{
    setEnteredUsername(event.target.value)
}
const addUserAgeHanlder=(event)=>{
    setEnteredUserAge(event.target.value)
}
const addUserHandler=(event)=>{
    event.preventDefault();
    if(enteredUsername.trim().length===0 || enteredUserAge.trim().length===0){
        setError({
            title:'Invalid input',
            message:'Please enter a valid name and age(non-empty value)'
        })
        return;
    }
    if(+enteredUserAge<1){
        setError({
            title:'Invalid age',
            message:'Please enter a valid age (>0)'
        })
    }
  
    props.onAdd(enteredUsername,enteredUserAge)
    setEnteredUserAge('')
    setEnteredUsername('')
}

const errorHandler=()=>{
    setError(null)
}
return(
    <div>
        {error && <ErrorModal title={error.title} message={error.message} onErrorHandling={errorHandler}/>}
        <Card className={styles.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input onChange={addUserNameHandler} value={enteredUsername} type="text" id="username"/>
                <label htmlFor="age">Age (years)</label>
                <input onChange={addUserAgeHanlder} value={enteredUserAge} type="number" id="age"/>
                <Button type='submit'>Add User</Button>
            </form>
        </Card>
    </div>
   
)
}

export default AddUser;