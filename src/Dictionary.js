import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Phonetics from "./Phonetics";

import './Dictionary.css';

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [phonetics, setPhonetics] = useState(null);
    let [loaded, setLoaded] = useState(false);

    async function handleResponse(response) {
        console.log(response.data);
        setResults(response.data);
    }

    async function handlePhonetics(response) {
        const phoneticData = response.data[0]?.phonetics || [];
        const filteredPhonetics = phoneticData.filter(phonetic => phonetic.audio && phonetic.text);
        setPhonetics(filteredPhonetics);
    }

    async function search() {
        setPhonetics(null); // Clear previous phonetics
        const apiKey = "3doat099fbcfb24e74ea400f10f43b8a";
        const apiURL = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

        try {
            const response = await axios.get(apiURL);
            await handleResponse(response);

            const apiURL2 = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
            const phoneticsResponse = await axios.get(apiURL2);
            await handlePhonetics(phoneticsResponse);
        } catch (error) {
            console.error("Error fetching data from APIs:", error);
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        search(); // Prevent the form from submitting
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (!loaded) {
        load();
        return "Loading...";
    }

    return (
        <div className="Dictionary">
            <section>
                <form onSubmit={handleSubmit}>
                    <h4>What word do you want to look up?</h4>
                    <div className="row">
                        <div className="col-md-9">
                            <input type="search" className="form-control Input" autoFocus={true} placeholder="Enter a word... " onChange={handleKeywordChange} />
                            <div className="hint">Suggests words: sunset, book, water, chocolate....</div>
                        </div>
                        <div className="col-md-3">
                            <input className="btn btn-primary Button" type="submit" value="Search" />
                        </div>
                    </div>
                </form>
            </section>

            {phonetics && phonetics.map((phonetic, index) => (
                <Phonetics key={index} phonetic={phonetic} />
            ))}

            {results && <Results results={results} />}
        </div>
    );
}

