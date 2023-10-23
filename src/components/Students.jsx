import Card from "./shared/Card";
import { AiFillCloseCircle } from "react-icons/ai";

function Students({theItem,deleteHandler}) {

    const localStyle = {
        backgroundColor: 'pink',
        fontColor: 'maroon',
        fontSize: '2rem'
    }

    return (
        <Card reverse={true}>
            <div className="container">
                {/* <div className="idCircle">{theItem.id}</div> */}
                <p style={localStyle} className="fullnameP">{theItem.fullName}</p>
                <div className="ratingSqr">{theItem.classRating}</div>
                <button onClick={()=>deleteHandler(theItem.id)} className="btn btn-primary">
                    <AiFillCloseCircle color="black"/>
                    Delete
                </button>
            </div>
        </Card>
    );
}

export default Students;