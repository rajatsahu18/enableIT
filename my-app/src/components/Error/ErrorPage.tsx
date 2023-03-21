import { AiTwotoneSetting } from "react-icons/ai"

import "./ErrorPage.css"

const ErrorPage = () => {
    return (    
        <div className="container">
            <h1>
                <span className="num">4</span>
                <div><AiTwotoneSetting /></div>
                <span className="num">4</span>
            </h1>
            <h2>Oops, Something went wrong</h2>
        </div>
    )
}

export default ErrorPage;