import React from 'react';
import { Row, Col } from 'reactstrap';
import TaskForm from './TaskForm/taskForm.component';

import ShoppingCart from './ShoppingCart';
import PriceBox from './PriceBox';

function TaskManager(props){   
        
    return (
        <div>
            <Row>
                <Col>
                    <TaskForm />
                </Col>
            </Row>

            <hr />

            <Row>
                <ShoppingCart />
            </Row>

            <Row>
                <PriceBox />
            </Row>



            
        </div>
    )
    }


export default TaskManager;