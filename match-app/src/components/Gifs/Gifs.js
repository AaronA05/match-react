import React from 'react';
import './Gifs.css';
import { Card, CardTitle, Button } from 'react-materialize'

export default class Gifs extends React.Component {

    render(){
        return(
            <div>
                <Card 
                    className='small'
                    header={<CardTitle 
                                image={this.props.image}
                                >
                                
                            </CardTitle>}
                >
                    <Button 
                        waves='light'
                        className="button"
                    >
                        <a href={this.props.link} target="blank">Gif Source</a>
                    </Button>
                    <p>Title: {this.props.title}</p>
                </Card>
            </div>
        )
    }
}
