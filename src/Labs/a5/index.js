import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";

function Assignment5() {
    const BASE = process.env.REACT_APP_API_BASE || 'http://localhost:4000';
    return (
        <div>
            <h1>Assignment 5</h1>
            <div className="list-group">
                <a href={`${BASE}/a5/welcome`}
                   className="list-group-item">
                    Welcome
                </a>
                <EncodingParametersInURLs></EncodingParametersInURLs>
                <WorkingWithObjects></WorkingWithObjects>
                <WorkingWithArrays></WorkingWithArrays>
            </div>
        </div>
    );
}
export default Assignment5;