import {useEffect} from "react";
import { useState } from "react";

function About() {

    const [params, setParams] = useState({})

    useEffect(()=>{

        const searchParams = new URLSearchParams(window.location.search);

        const id = searchParams.get("prodid");
        const custname = searchParams.get("customername");

        const paramObj = {
            id,
            custname,
        };

        setParams(paramObj);
    },[]);
    
    return (
         <div className="container">
           <h4>About Page</h4>
           <p>
            product ID: {params.id}, Customer Name: {params.custname}
          </p>
        </div>
       );
    }

    export default About;