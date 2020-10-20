import React, { Component } from 'react'
import '../styles.css'
import { Spring } from 'react-spring/renderprops'
import EntireLogo from '../images/sport_systems2.png'

export default class LandingPage extends Component {
    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }

    render() {
        
        return (
                    <div >
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
                            <img style={{width: '15%', paddingTop: '5%'}} src={EntireLogo} alt=""/>
                            <h1 className='title'>SKI SELECTOR</h1>
                            <h3 className='statement'><i>A Personalized Assesment To Find You The Best Equipment</i></h3>

                            <button onClick={this.continue}
                            className='button'>B E G I N</button>
                            <br/>
                            <button onClick={this.props.trailMap}
                            className='button'>TRAIL MAP</button>

                            </div>
                            )}
                        </Spring>
                        </div>
                    </div>
                )
        }
}