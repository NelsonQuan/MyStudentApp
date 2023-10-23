import Students from "./Students";
import StudentContext from "../context/StudentContext";
import { useContext } from "react";

function StudentsList() {
    const {myStud: students,studentDeleteHandler} = useContext(StudentContext);
    return (
        <div className="container">
        {students.map((item) => (
          <Students deleteHandler={studentDeleteHandler} key={item.id} theItem={item} />
        ))}
    </div>
    );
}

export default StudentsList;