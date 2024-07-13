import React from "react";
import './Meaning.css';
export default function Meaning(props) {
    return (
        <div className="Meaning">
            <h3 className="partOfSpeech">{props.meaning.partOfSpeech}</h3>
            <p>
                <span className="describe">Definition:</span> {props.meaning.definition}
            </p>
            {props.meaning.example ? (
                <p>
                    <span className="describe">Example:</span> {props.meaning.example}
                </p>
            ) : null}

            {props.meaning.synonyms ? (
                <div>
                    <p className="describe">Synonyms:</p>
                    <ul className="synonyms">
                        {props.meaning.synonyms.map(function (synonym, index) {
                            return <li key={index}>{synonym}</li>;
                        })}</ul> </div>
            ) : null}
        </div>
    );
}