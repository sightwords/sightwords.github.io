import React, { Component } from 'react';
import {
    HashRouter,
    Route
} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Home from './Home';
import FlashCards from './FlashCards';
import About from './About';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <HashRouter>
                    <div>
                        <Route exact path='/' component={Home}/>
                        <Route path='/flashcards' component={FlashCards}/>
                        <Route path='/about' component={About}/>
                    </div>
                </HashRouter>
            </MuiThemeProvider>
        );
    }
}

export default App;
