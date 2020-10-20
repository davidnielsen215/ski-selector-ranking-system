import React, { Component } from 'react'
import '../styles.css'
import { Spring } from 'react-spring/renderprops'
import EntireLogo from '../images/Purgatory.png'

export default class Trail extends Component {
    

    render(){
        return(
            <div>
            <div style=
            {{
            color: 'white',
            background: 'black',
            minHeight: '100vh',
            maxHeight: '150vh'
            }}>

            <Spring 
            from={{ opacity: 0}}
            to={{ opacity: 1}}
            config={{ duration: 1700}}
            >
            { props => (
            <div style={props}>
                <h1 style={{paddingTop: '3%'}}>Trail Map</h1>                
                <h3 className='statement'><i>Purgatory Mountain</i></h3>
                <img style={{width: '90%'}} src={EntireLogo} alt=""/>
                
                <button onClick={this.props.homeScreen}
                    className='button'>B A C K</button>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                </div>
                )}
            </Spring>
            </div>
        </div>
        )
    }
}