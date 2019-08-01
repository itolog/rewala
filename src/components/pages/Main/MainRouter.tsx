import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './Home/Home';
import Search from './Search/Search';

function MainRouter() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/search/">Search</Link>
                        </li>
                    </ul>
                </nav>

                <Route path="/" exact component={Home} />
                <Route path='/search/' component={Search} />

            </div>
        </Router>
    );
}

export default MainRouter;