import PropTypes from "prop-types";

function BodyContent(props) {
    const attendance = [
        {id:1, name: "Zion Alele"},
        {id:2, name: "David Odezi"},
        {id:3, name: "Gbenga taiwo"},
        {id:4, name: "Ife Oladepo"},
        {id:5, name: "Ayoade Yusuf"},
        {id:6, name: "Kunle Owolabi"},
        {id:7, name: "Nelson Okpithe"},
        {id:8, name: "Aminat Ayoade"},
    ]
    return ( 
        <div className="container">
            <ul>
                {
                    attendance.map((item) =>
                    <li key={item.id}>{item.name}</li>
                    )
                }
            </ul>
            <h2 className="fullname">
                <ul>
                    <li>First Name: {props.first_name}</li>
                    <li>Last Name: {props.last_name}</li>
                    <li>Age: {props.age}</li>
                    <li>Status: {props.studentStat}</li>
                    <li>proptypetext: {props.str_num}</li>
                </ul>
            </h2>
        </div>
     );
}

BodyContent.defaultProps = {
    studentStat: "No data found"
}

BodyContent.propTypes = {
    str_num: PropTypes.number.isRequired
}
// best to use proptypes and still use the set type in the parent.

export default BodyContent;