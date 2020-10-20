import React, { Component } from 'react'
import {     FormGroup, Checkbox, CardContent, 
    AppBar, FormControlLabel, FormControl, 
    Card } from '@material-ui/core'
import EntireLogo from '../images/sport_systems.png'
import '../styles.css'
import { Spring } from 'react-spring/renderprops'
import { Alert, AlertTitle } from '@material-ui/lab'

export default class SkillLevel extends Component {
    state = {
        alertDisplay: 'none',
        percentage: 33.36
    }

    continue = e => {
        e.preventDefault()
        const { values } = this.props
        if(values.skillLevel.b === undefined && values.skillLevel.i === undefined && values.skillLevel.a === undefined && values.skillLevel.e === undefined){
            this.setState({
                alertDisplay: ''
            })
        } 
        else {
            this.props.nextStep()
        }
    }

    back = e =>{
        e.preventDefault()
        this.props.prevStep()
    }

    getStep = (x) => {
        let returnedStep = x - 1
        return returnedStep
    }

    progressStep = () => {
        if (this.state.percentage !== 100){
            this.setState({ percentage: 49.48 })
        }
    }

    render() {
        const { values, handleSkill } = this.props 
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
                                        <h3 style={{ color: 'white', padding: '8px', fontSize: '150%'}}>Select Skill Level</h3>
                                        </div>
                                        <br/>
                                    <FormControl margin="dense">
                                        <FormGroup onChange={handleSkill(values.skillLevel)} >
                                            <FormControlLabel  onClick={this.progressStep} value="b" control={<Checkbox color="primary" />} label={<p style={styles.form}>Beginner</p>}/>
                                            <FormControlLabel onClick={this.progressStep} value="i" control={<Checkbox color="primary"/>} label={<p style={styles.form}>Intermediate</p>} />
                                            <FormControlLabel onClick={this.progressStep} value="a" control={<Checkbox color="primary"/>} label={<p style={styles.form}>Advanced</p>}/>
                                            <FormControlLabel onClick={this.progressStep} value="e" control={<Checkbox color="primary"/>} label={<p style={styles.form}>Expert</p>}/>
                                        </FormGroup>
                                    </FormControl>
                                    <br/>
                                    <br/>
                                {/* <button 
                                    className='previousButton'
                                    onClick={this.back}>
                                    previous
                                </button> */}
                                <button 
                                    className='continueButton'
                                    onClick={this.continue}>
                                    continue
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
const styles= {
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





