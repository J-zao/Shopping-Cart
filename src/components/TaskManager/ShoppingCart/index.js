import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Alert, ListGroup } from 'reactstrap';

import CartItem from './CartItem';

import { getCart } from '../../../actions/taskActions';

class ShoppingCart extends Component {
    componentDidMount(){
      //  this.props.getCart();
    }

    render() {
    
    const { shoppingCart } = this.props;
    
        if(shoppingCart.length === 0) {
            return <Alert color="info">No items in basket, add items</Alert>
        }    
    
      return (
        < ListGroup>
            {shoppingCart.map(task => <CartItem key={task.id} task={task} />)}
        </ListGroup>
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

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);