import React from 'react';
import { connect } from 'react-redux';
import { ListGroupItem, Button } from 'reactstrap';

import { removeTask } from '../../../../actions/taskActions';

function CartItem(props){
    const { task } = props;
    console.log(task)
    return(
        <ListGroupItem className={'Cart-item'}>
            <span>{ task.name }</span>
            <span className={'Qty'}>{task.qty}</span>
            <span className={'Price'}>{task.priceTotal}</span>
            <Button close onClick={() => props.remove(task.id)} />
        </ListGroupItem>
    );
}

function mapDispatchToProps(dispatch){//state=store.dispatch
    return {
        remove: (id) => {
            dispatch(removeTask(id));
        }        
    }
}
export default connect(null, mapDispatchToProps)(CartItem);