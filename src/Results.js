import React from "react";
import Meaning from "./Meaning";


import './Results.css';
export default function Results(props) {
    if (props.results) {
        return (
            <div className="Results">
                <section>
                    <h2>  {props.results.word}</h2> <span className="phonetic">/{props.results.phonetic}/</span>
                </section>

                {props.results.meanings.map(function (meaning, index) {
                    return (
                        <div key={index}>
                            <Meaning meaning={meaning} />
                        </div>
                    );
                })}

            </div>
        );
    } else {
        return null;
    }
}