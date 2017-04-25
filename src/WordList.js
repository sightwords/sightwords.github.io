import React from 'react';
import Word from './Word';

export default class WordList extends React.Component {
    render() {
        const wordList = this.props.words.map((word, index) => {
            return <Word {...word} key={index}/>;
        });
        return <div>{wordList}</div>;
    }
}
