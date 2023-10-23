import { Navigate, useNavigate } from "react-router-dom";

function Post() {
    const status = 200;

    const nav = useNavigate();

    const moveHandler = () => {
        // Do some stuffs here
        nav("/notfound");
    };

    if (status !== 200) {
        return <Navigate to="/notfound"/>;
    }

    return (
        <div className="container">
            <h3>Post Page</h3>
            <button onClick={moveHandler} className="btn btn-secondary">
                Do Redirect
            </button>
          </div>
    );
}

export default Post;