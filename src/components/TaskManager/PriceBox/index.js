import React, { Component } from 'react';
import { connect } from 'react-redux'

import { getCart } from '../../../actions/taskActions';

class PriceBox extends Component {
    componentDidMount(){}

    render() {
    
        const { shoppingCart } = this.props;
        let total = 0;
        shoppingCart.forEach(cartItem => {
            total += Number(cartItem.priceTotal);
        });

        return (
            <div className={'Total'}>{total.toFixed(2)}</div>
        );
      }
}
function mapStateToProps(state){
    return {
        shoppingCart: state.shoppingCart
    }
}

function mapDispatchToProps(dispatch){//dispatch= store.dispatch
    return {
        getCart: () => {
            dispatch(getCart());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PriceBox);