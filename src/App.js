import React, { useState } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import ColorList from './ColorList';
import ColorForm from './ColorForm';
import Color from './Color';

function App() {
    const [colors, setColors] = useState([]);

    return (
        <div>
            <Switch>
                <Route exact path="/colors">
                    <ColorList colors={colors} />
                </Route>
                <Route exact path="/colors/new">
                    <ColorForm addColor={setColors} />
                </Route>
                <Route exact path="/colors/:color">
                    <Color colors={colors} />
                </Route>
                <Redirect to="/colors" />
            </Switch>
        </div>
    );
}

export default App;
