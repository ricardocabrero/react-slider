import React, { Component } from 'react'
import pelis from '../data/pelis.json'

const lengthSlides = pelis.length

class Item extends Component {
    _activeElements = (counterForActive, number) => {
        if(counterForActive === number){
            return ' active'   
        }
            return ''
    }
    render(){
        const { title, image, number, counterForActive } = this.props
        return(
            <li className={`item-${number+1}${this._activeElements(counterForActive,number)}`}>
                <p>{title}</p>
                <img alt={title} src={image}/>
            </li>
        )
    }
}

export class Slider extends Component {
    state = {
        counter: this.props.counterDefault
    }
    static defaultProps = {
        counterDefault: Math.round(Math.random() * (lengthSlides-1)) 
    }
    _handleRight = () => {
        const { counter } = this.state
        counter < lengthSlides - 1 &&
        this.setState({
            counter: counter + 1
        })
    }
    _handleLeft = () => {
        const { counter } = this.state
        counter > 0 &&
        this.setState({
            counter: counter - 1
        })
    }
    render(){
        const { counter } = this.state
        return(
            <div className="wraper-slider-p">
                <button 
                onClick={ this._handleLeft }
                className="button is-info">left</button>
                <button 
                onClick={ this._handleRight }
                className="button is-info">right</button>
                <div className="slider">
                    <div className="slider-run" 
                    style={{transform:`translateX(${(-100/lengthSlides) * counter}%)`}}>
                        {pelis.map((el,index) => (
                             <Item
                            counterForActive={counter}
                            key={index}
                            number={index}
                            title={el.Title}
                            image={el.Poster}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}