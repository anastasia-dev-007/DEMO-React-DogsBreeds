import { Link } from "react-router-dom";

function Breed(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <Link to="/details">See details</Link>
        </div>
    )
}

export default Breed;
