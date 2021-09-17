import React, {Component} from 'react'
import Aux from './hoc/Aux'
import {Route, Switch} from 'react-router-dom'

import Form from './Form/Form'
import Success from './Form/Success'
import NotFoundPage from './NotFoundPage'


class Layout extends Component {

    render() {
        return (
            <Aux>
                
                    
                        <section>
                    
                            <Switch> 
                                <Route path="/" exact component={Form} />
                                <Route path="/success" exact component={Success} />
                                <Route path="/404" exact component={NotFoundPage} />
                            </Switch>

                        </section>


            </Aux>
        );
    } 

}

export default Layout;

