import React from 'react';
import { connect } from 'react-redux';
import { ListGroupItem, Button } from 'reactstrap';

import { removeTask } from '../../../../actions/taskActions';

function TaskItem(props){
    const { task } = props;
    return(
        <ListGroupItem>
        { task.title }
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
export default connect(null, mapDispatchToProps)(TaskItem);