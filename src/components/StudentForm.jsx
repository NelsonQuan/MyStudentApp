import { useState,useContext } from 'react';
import Card from './shared/Card';
import MainButton from './shared/MainButton';
import RatingSelector from './RatingSelector';
import StudentContext from '../context/StudentContext';


function StudentForm() {
    const {studentAddHandler} = useContext(StudentContext);
    const [text,setText] = useState('')
    const [classRating, setClassRating] =useState()
    const [isDisabled,setIsDisabled] = useState(true)
    const [valMessage, setValMessage] = useState('')

    const textHandler = (e)=>{
        if (text ==='') {
            setIsDisabled(true)
            setValMessage(null)
        } else if (text !== '' && text.trim().length <= 5) {
            setIsDisabled(true)
            setValMessage('character is less than 15')
        }else{
            setIsDisabled(false)
            setValMessage(null)
        }
        setText(e.target.value);
    }
    const studentFormHandler = (e)=>{
        e.preventDefault();

        const myObj = {
            fullName:text,
            classRating: classRating
        }
        studentAddHandler(myObj)
        setText('')
    }
    return <div className='container'>
        <Card>
       <form onSubmit={studentFormHandler}>
        <h2>Enter a Student with Rating</h2>
        <RatingSelector theRating={(x)=> setClassRating(x)}/>
        <div className='input-group'>
            <input onChange={textHandler} type="text" value={text} placeholder='Enter content'/>
            <MainButton isDisabled={isDisabled}>Post Submit</MainButton>
         </div>
         {valMessage ? <div>{valMessage}</div>:null}  
         </form>
        </Card>

    </div>
}

export default StudentForm;