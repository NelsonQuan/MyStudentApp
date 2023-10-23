import { createContext, useState } from "react";
import { v4 } from "uuid";

// - context
const StudentContext = createContext()

// - provider
export const StudentProvider = ({children})=>{
    const [students,setStudents] = useState([
        {id:1,fullName:"Funke Robert",classRating:8},
        {id:2,fullName:"Kemi Allison",classRating:8},
    ])
    const studentAddHandler = (studObj)=> {
        studObj.id = v4();
        setStudents([studObj,...students])
    }

    const studentDeleteHandler = (id) => {
        if (window.confirm("Are you sure?")) {
            setStudents(students.filter((item) => {
                return item.id !== id
            }))
        }
    }

    const contextObj = {
        myStud:students,
        studentAddHandler,
        studentDeleteHandler
    }
    return <StudentContext.Provider value={contextObj}>
        {children}
    </StudentContext.Provider>
}
export default StudentContext;