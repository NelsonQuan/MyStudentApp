import { useParams } from "react-router-dom";

function Product() {
    const params = useParams()
    console.log(params);
    return <div className="container">
        <h4>Products Page</h4>
        <p>
            Product ID: {params.id}
        </p>
    </div>
}

export default Product;