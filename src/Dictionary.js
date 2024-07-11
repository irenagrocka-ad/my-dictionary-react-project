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
                <input type="search" autoFocus={true} placeholder="Enter a word..." onChange={handleKeywordChange} />
                <input type="submit" value="Search" />
            </form>
            <Results results={results} />
        </div>
    );
}