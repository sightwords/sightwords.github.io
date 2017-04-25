import React from 'react';
import WordList from './WordList';
import WordGenerator from './WordGenerator';

class FlashCards extends React.Component {
    render() {
        const words = new WordGenerator().generate();
        return (
            <div className="App">
                <div>
                    <WordList words={words}/>
                </div>
            </div>
        );
    }
}

export default FlashCards;
