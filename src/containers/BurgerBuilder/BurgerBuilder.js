import React, { Component } from 'react'

import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {
    render() {
        return (
           <Aux>
               <Burger />
               <div>Builder Control</div>
           </Aux>
        );
    }
}

export default BurgerBuilder