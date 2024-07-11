import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

import './Dictionary.css';
export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    function handleResponse(response) {
        console.log(response.data);
        console.log(response.data.meanings[0].definition);
        setResults(response.data);
    }
    function search(event) {
        event.preventDefault(); // Prevent the form from submitting
        // Documentation https://www.shecodes.io/learn/apis/dictionary 
        let apiKey = "3doat099fbcfb24e74ea400f10f43b8a";
        let apiURL = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

        axios.get(apiURL).then(handleResponse)
    }

    function handleKeywordChange(event) {
        //console.log(event.target.value);
        setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <h3>What word do you want to look up?</h3>
                <div className="row">
                    <div className="col-6 col-sm-9 mb-2 mb-sm-0">
                        <input type="search" className="form-control Input" autoFocus={true} placeholder="Enter a word..." onChange={handleKeywordChange} />
                    </div>
                    <div className="col-6 col-sm-3">
                        <input className="btn btn-primary Button" type="submit" value="Search" />
                    </div>
                </div>
            </form>
            <Results results={results} />
        </div>
    );
}