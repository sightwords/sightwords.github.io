import React from 'react';
import {Card, CardTitle, CardText, CardActions} from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import AvVolumeUp from 'material-ui/svg-icons/av/volume-up.js';


export default class Word extends React.Component {
    constructor() {
        super();

        this.voice = null;
    }

    speak() {
        console.log(`speak ${this.props.spanish.word}`);
        if ('speechSynthesis' in window) {

            if (!this.voice) {
                let voices = speechSynthesis.getVoices();
                console.log('voices length: ' + voices.length);

                for (var i in voices) {
                    if (voices[i].lang === 'es-MX') {
                        this.voice = voices[i];
                        break;
                    }
                }
            }

            if (this.voice === undefined) {
                console.log('TTS is not support for es-MX');
                return;
            }

            var msg = new SpeechSynthesisUtterance();
            msg.voice = this.voice;
            msg.rate = 1;   // TODO: allow user change it
            msg.pitch = 1;  // TODO: allow user change it
            msg.text = this.props.spanish.word;
            msg.onend = function(e) {
                //console.log('Finished in ' + event.elapsedTime + ' seconds.');
            };

            speechSynthesis.speak(msg);
        } else {
            console.log('TTS is not supported');
        }
    }

    render() {
        return (
            <Card>
                <CardTitle title={this.props.spanish.word} subtitle={`${this.props.english.word} ${this.props.chinese.word}`}/>
                <CardText>
                    {this.props.spanish.example}
                </CardText>
                <CardActions>
                    <IconButton tooltip="Speak to me" onClick={this.speak.bind(this)}>
                        <AvVolumeUp />
                    </IconButton>
                </CardActions>
            </Card>
        );
    }
}