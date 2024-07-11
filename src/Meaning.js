import React from "react";
import './Dictionary.css';

export default function Meaning(props) {
    return (
        <div className="Meaning">
            <h3 className="partOfSpeech">{props.meaning.partOfSpeech}</h3>
            <p>
                <span className="Definition">Definition:</span> {props.meaning.definition}
            </p>
            {props.meaning.example ? (
                <p>
                    <span className="Example">Example:</span> {props.meaning.example}
                </p>
            ) : null}
        </div>
    );
}