import React from 'react';
import './SearchBar.css';
import {Row, Input, Button, Col} from 'react-materialize';

export default class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            search: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault();
        console.log("WHOOOAAA")
        this.createQuery(this.state.search);
    }

    createQuery(text){
        this.props.sendFromApp(text)
        console.log(text);
    }

    render() {
        return (
            <div className="search-form">
                <Row className="input-form">
                    <Col s={4} />
                    <Input 
                        s={4}
                        className='input-text'
                        label="Enter gif term to search, e.g. 'Turtle' " 
                        name="search"
                        onChange={this.handleChange}
                        value={this.state.term}    
                    />
                </Row>
                <Row>
                    <Col s={4} />
                    <Button
                        s={4}
                        onClick={this.handleSubmit}
                    >
                        Search
                    </Button>
                </Row>
            </div>
        )
    }
}