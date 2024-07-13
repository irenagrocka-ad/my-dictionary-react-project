import React from "react";
import './Meaning.css';
export default function Meaning(props) {
    return (
        <section>
            <div className="Meaning">
                <h3 className="partOfSpeech">{props.meaning.partOfSpeech}</h3>
                <p className="definition">
                    <span className="describe">Definition:</span> {props.meaning.definition}
                </p>
                {props.meaning.example ? (
                    <p className="example">
                        <span className="describe ">Example:</span> {props.meaning.example}
                    </p>
                ) : null}

                {props.meaning.synonyms ? (
                    <div className="synonyms">
                        <p className="describe">Synonyms:</p>
                        <span>  <ul >
                            {props.meaning.synonyms.map(function (synonym, index) {
                                return <li key={index}>{synonym}</li>;
                            })}</ul> </span></div>
                ) : null}
            </div>
        </section>
    );
}