function Card({children,reverse}) {
    return ( 
        <div className={`card ${reverse ? "changeMode": null}`}>{children}</div>
     );
}

export default Card;