import React from 'react';
import {Card, CardTitle, CardText} from 'material-ui/Card';

export default class Word extends React.Component {
    //constructor() {
    //    super();
    //}

    render() {
        return (
            <Card>
                <CardTitle title={this.props.spanish.word} subtitle={`${this.props.english.word} ${this.props.chinese.word}`}/>
                <CardText>
                    {this.props.spanish.example}
                </CardText>
            </Card>
        );
    }
}

