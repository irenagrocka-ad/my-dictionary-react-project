import React from "react";
import AudioPlayer from "react-h5-audio-player";
import 'react-h5-audio-player/lib/styles.css';
import './Phonetics.css';

export default function Phonetics(props) {
    return (
        <section>
            <div className="Phonetics row">
                {props.phonetic.audio && (
                    <div className="col-md-9 Phonetics-item">
                        <AudioPlayer
                            src={props.phonetic.audio}
                            onPlay={e => console.log("onPlay")}
                        // other props here
                        />

                    </div>
                )}
                <div className="col-md-3">
                    <p className="Phonetics-text">{props.phonetic.text}</p>
                </div>
            </div>

        </section>);
}


