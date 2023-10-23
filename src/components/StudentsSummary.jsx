import StudentContext from "../context/StudentContext";
import { useContext } from "react";

function StudentsSummary() {
    const {myStud: studCount} = useContext(StudentContext)

    let totalCount = 0
    for (const item of studCount) {
        totalCount += item.classRating
    }

    const avg = totalCount / studCount.length

    return <div className="container">
        <h4>{studCount.length} Student Enteries</h4>
        <h4>{avg.toFixed(2)} Student Average Att Score</h4>
    </div>
}

export default StudentsSummary;