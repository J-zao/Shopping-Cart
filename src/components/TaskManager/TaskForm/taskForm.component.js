import React, { Component } from 'react';

import { Button, Form, FormGroup, Label} from 'reactstrap';

import { connect } from 'react-redux';
import { addTask } from '../../../actions/taskActions';
import productCatalogue from '../../../dataSource/productCatalogue.json';

class TaskForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            taskData: '',
            taskErr: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this)
        
    }
    
    handleChange(e){
        console.log(e.target);
        const selectedIndex = e.target.value;
        const selected = productCatalogue[selectedIndex];
        this.setState({
            taskData: selected
        });
    }
       
    handleSubmit (e) {
        e.preventDefault();
        const { taskData } = this.state;
        if (taskData === ''){
            this.setState({
                taskErr: 'Items can not be blank'
            })
        } else {
            this.props.add(taskData);
            this.setState({
                taskData: '',
                taskErr: ' '
            })
        }
    }
    render(){
        const { taskErr } = this.state;

    return (
        <Form onSubmit = {this.handleSubmit}>
            
            <FormGroup>
                <Label htmlFor="task">Add Items </Label>
                
                <select id = "dropdown"  onChange={this.handleChange}>
                    { 
                        productCatalogue.map( (product, index) => (
                            <option value={index} key={product.id}>{product.name}</option>
                        ))
                    }
                   
                </select>              

                <span>{ taskErr }</span>
                
            </FormGroup>


            <Button type="submit" color="primary" >Add</Button>
        </Form>

    )
}
        
};

function mapDispatchToProps(dispatch){
    return {
        add: (title) => {
            dispatch(addTask(title))
        }
    }
}

export default connect(null, mapDispatchToProps)(TaskForm);