import React from 'react';
import './Gifs.css';
import { Card, CardTitle, Button } from 'react-materialize'

export default class Gifs extends React.Component {
    constructor(props){
        super(props)
        this.pauseTheGif = this.pauseTheGif.bind(this);
    }

    pauseTheGif(){
        this.props.stopTheGif(this.props.title);
    }

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
                        onClick={this.pauseTheGif}
                    >
                        Pause Gif
                    </Button>
                    <p><a href={this.props.link} target="blank">Gif Source</a></p>
                    <p>Title: {this.props.title}</p>
                </Card>
            </div>
        )
    }
}
