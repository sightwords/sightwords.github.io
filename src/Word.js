import React from 'react';
import {Card, CardTitle, CardText, CardActions} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import IconButton from 'material-ui/IconButton';
import AvVolumeUp from 'material-ui/svg-icons/av/volume-up.js';

const styles = {
  chip: {
    'margin-right': '8px',
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    'align-items': 'center'     // vertical center align
  },
};

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
                <CardTitle title={this.props.spanish.word} subtitle=""/>
                <CardText>
                    <p>{this.props.spanish.example}</p>
                    <p style={styles.wrapper}><Chip style={styles.chip}>EN</Chip> <span>{this.props.english.word}</span></p>
                    <p style={styles.wrapper}><Chip style={styles.chip}>CN</Chip> <span>{this.props.chinese.word}</span></p>
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
