
import React, { useState } from 'react';
import './tweet.css';


function Tweet(props) {
    const { isRed, setRed } = useState(false);
    const [count, setCount] = useState(0);
    const [decount, setdeCount] = useState(0);


    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setdeCount(decount + 1);
    }
    return (
        <div>
            <div className="tweet">
                <h5>{props.name}</h5>
                <p>{props.message}</p>
                <h5>{props.title}</h5>
                <div className="row">
                    <div className="col-md-6">
                        <button className="btn btn-success usebtn" onClick={increment}><i className="fa fa-thumbs-up"></i></button>
                        <p>{count}</p>
                    </div>
                    <div className="col-md-6">
                        <button className="btn btn-danger usebtn" onClick={decrement}><i className="fa fa-thumbs-down"></i></button>
                        <p>{decount}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tweet;