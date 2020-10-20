import React, { Component } from 'react'
import {     FormGroup, Checkbox, CardContent, 
            AppBar, FormControlLabel, FormControl, 
            Card } from '@material-ui/core'
import EntireLogo from '../images/sport_systems.png'
import '../styles.css'
import { Spring } from 'react-spring/renderprops'
import { Alert, AlertTitle } from '@material-ui/lab'

export default class Terrain extends Component {
    state = {
        alertDisplay: 'none',
        percentage: 0
    }

    continue = e => {
        e.preventDefault()
        const { values } = this.props
        if(values.terrain.p === undefined && values.terrain.m === undefined && values.terrain.t === undefined && values.terrain.g === undefined && values.terrain.b === undefined){
            this.setState({
                alertDisplay: ''
            })
        }   
        else {
            this.props.nextStep()
        }
    }

    getStep = (x) => {
        let returnedStep = x - 1
        return returnedStep
    }

    progressStep = () => {
        if (this.state.percentage !== 100){
            this.setState({ percentage: 16.5 })
        }
    }

    

    render() {
        const { values, handleT, } = this.props 
        
        return (
            
            <div className="background">
                {/* <MuiThemeProvider> */}
                    <React.Fragment>
                        <AppBar position='static' style={{backgroundColor: 'black' }}>
                            <div>
                            <img className='entirelogo' src={EntireLogo} alt=""/>
                            </div>
                        </AppBar>
                        <br/>
                        <br/>
                        <Spring 
                            from={{  opacity: 0}}
                            to={{  opacity: 1}}>
                            { props => (
                        <div style={props}>
                            <Card className='card'>
                                <CardContent>
                                <h4 className='step'>Step {this.getStep(values.step)} of 6</h4>
                                    
                                <ProgressBar percentage={this.state.percentage} />
                                        <br/>
                                        <br/>
                                    <div style={{background: 'black', borderRadius: '10px', height: '10%'}}>
                                        <h3 style={{ color: 'white', padding: '8px', fontSize: '150%'}}>Select Terrain Performance</h3>
                                        </div>
                                        <br/>
                                    <FormControl margin="dense">
                                        <FormGroup onChange={handleT(values.terrain)}>
                                            <FormControlLabel onClick={this.progressStep} value="p" control={<Checkbox color="primary"/>} label={<p style={styles.form}>Parks</p>}/>
                                            <FormControlLabel onClick={this.progressStep} value="m" control={<Checkbox color="primary"/>} label={<p style={styles.form}>Mouguls</p>} />
                                            <FormControlLabel onClick={this.progressStep} value="t" control={<Checkbox color="primary"/>} label={<p style={styles.form}>Trees</p>}/>
                                            <FormControlLabel onClick={this.progressStep} value="g" control={<Checkbox color="primary"/>} label={<p style={styles.form}>Groom</p>}/>
                                            <FormControlLabel onClick={this.progressStep} value="b" control={<Checkbox color="primary"/>} label={<p style={styles.form}>Backcountry</p>}/>
                                        </FormGroup>
                                    </FormControl>
                                    <br/>
                                <button 
                                    className='continueButton'
                                    onClick={this.continue}>continue
                                </button>
                                <div style={{display: `${this.state.alertDisplay}`}}>
                                <Alert severity='error'><AlertTitle><p className='alert'>Please select an option</p></AlertTitle></Alert>
                                </div>
                                </CardContent>
                            </Card>
                            <br/>
                            
                        </div>
                        )}
                        </Spring>
                        

                    </React.Fragment>
                {/* </MuiThemeProvider> */}
                <br/>
                
            </div>
        )
    }
}
const styles = {
    form: {
        fontSize: '2.3vh',
        padding: '10px'
    }
}

const ProgressBar = (props) => {
    return (
        <div className="progress-bar">
          <Filler percentage={props.percentage} />
        </div>
      )
  }
  
  const Filler = (props) => {
    return <div className="filler" style={{ width: `${props.percentage}%` }} />
  }





