import React, { Component } from 'react';

import virgo from '../virgo.jpg'

import aries from '../aries.jpg'
import taurus from '../taurus.jpg'
import gemini from '../gemini.jpg'
import cancer from '../cancer.jpg'
import leo from '../leo.jpg'
import libra from '../libra.jpg'
import scorpio from '../scorpio.jpg'
import sagittarius from '../sagittarius.jpg'
import capricorn from '../capricorn.jpg'
import aquarius from '../aquarius.jpg'
import pisces from '../pisces.jpg'


class Aztro extends Component {
    constructor(props){
        super(props);
        this.state = {
          json: {},
          type: this.props.type,
            a:""
        }
        eval(this.state.a +"= 9");
        
        console.log(this.state.a)

    }
    

    componentDidMount () {
        const URL = `https://aztro.sameerkumar.website/?sign=${this.state.type}&day=today`;
        fetch(URL, {
            method: 'POST'
        }).then(response => response.json())
        .then(json => { this.setState({json}); });
        
    }
        render() {
        return (
          <div className='col-md-4' >
              {/* Current Date: {this.state.json.current_date} <br />
              Compatibility: {this.state.json.compatibility} <br />
              Lucky Number: {this.state.json.lucky_number} <br />
              Lucky Time: {this.state.json.lucky_time} <br />
              Color: {this.state.json.color} <br />
              Date Range: {this.state.json.date_range} <br />
              Mood: {this.state.json.mood} <br />
              Description: {this.state.json.description}<br/> */}
              
              <div >
                    <div className="card mb-4 mx-4" style={{ height: "23rem" }}>
                        <img src={this.state.type} className="card-img-top" alt="..." style={{ height: "50%" }} />
                        <div className="card-body">
                            <h5 className="card-title">{this.state.type}</h5>
                            <p className="card-text">{this.state.json.description}</p>
                            <a href="#" className="btn btn-sm btn-primary">Read more</a>
                        </div>
                    </div>
                </div>
          </div>
        );
    }
}

export default Aztro;