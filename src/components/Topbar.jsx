// import {useState} from "react";
import { NavLink } from "react-router-dom";

function Topbar() {
    // const [toptext,settoptext]= useState("coming home to roost")

    // const [count,setcount]= useState(7);

    // const toptextHandler = () => {
    //     settoptext("Going out to Hustle");
    // }

    // const countHandler = () => {
    //     setcount((very) => {
    //         return very + 5
    //     })
    // }
    const abtUrl = {
        pathname: '/about',
        search: '?prodid=12&customername=taiwo bello' 
    }
    return (
        <>
        <div className="container">
            <div className="theTopbar">
                <ul className="mainnav">
                    <li>
                        <NavLink activeclassname="active" to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink activeclassname="active" to={abtUrl}>About</NavLink>
                    </li>
                    <li>
                        <NavLink activeclassname="active" to="/product">Product</NavLink>
                    </li>
                    <li>
                        <NavLink activeclassname="active" to="/post">Post</NavLink>
                    </li>
                </ul>

            </div>
            {/* <h2>Student Record Manager</h2>
            <p>{toptext}</p>
            <p>{count}</p> */}
        </div>
        {/* <button onClick={toptextHandler}>Change Text</button>
        <button onClick={countHandler}>Change Count</button> */}
        </>
    );
}

export default Topbar;