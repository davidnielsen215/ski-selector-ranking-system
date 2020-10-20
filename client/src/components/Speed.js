import React, { Component } from 'react'
import {     FormGroup, Checkbox, CardContent, 
    AppBar, FormControlLabel, FormControl, 
    Card } from '@material-ui/core'
import EntireLogo from '../images/sport_systems.png'
import '../styles.css'
import { Spring } from 'react-spring/renderprops'
import { Alert, AlertTitle } from '@material-ui/lab'


export default class Speed extends Component {
    state = {
        alertDisplay: 'none',
        textShow: 'none',
        percentage: 49.48
    }

    continue = e => {
        e.preventDefault()
        const { values } = this.props
        if(values.speed.f === undefined && values.speed.m === undefined && values.speed.s === undefined){
            this.setState({
                alertDisplay: ''
            })
        } else {
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
            this.setState({ percentage: 66.68 })
        }
    }    
    
    render() {
        const { values, handleSpeed } = this.props 
        
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
                    to={{  opacity: 1}}
                    >
                    { props => (
                    <div style={props}>
                        <Card className='card'>
                            <CardContent>
                            <h4 className='step'>Step {this.getStep(values.step)} of 6</h4>
                                    
                            <ProgressBar percentage={this.state.percentage} />
                                    <br/>
                                    <br/>
                                <div style={{background: 'black', borderRadius: '5px', height: '10%'}}>
                                    <h3 style={{ color: 'white', padding: '8px', fontSize: '150%'}}>How Fast Do You Ski ?</h3>
                                </div>
                                    <br/>
                                
                                <FormControl >
                                    <FormGroup onChange={handleSpeed(values.speed)}>
                                        <FormControlLabel value="f" onClick={this.progressStep}  control={<Checkbox color="primary"/>} label={<p style={styles.form}>Fast</p>}/>
                                        <FormControlLabel value="m" onClick={this.progressStep}  control={<Checkbox color="primary"/>} label={<p style={styles.form}>Moderate</p>}/>
                                        <FormControlLabel value="s" onClick={this.progressStep}  control={<Checkbox color="primary"/>} label={<p style={styles.form}>Slow</p>}/>
                                    </FormGroup>
                                </FormControl>
                                    <br/>
                                <div style={{ display: `${this.state.textShow}`}}>
                                </div>
                                    <br/>
                                {/* <button 
                                    className='previousButton'
                                    onClick={this.back}
                                >   previous
                                </button> */}
                                <button 
                                    className='continueButton'
                                    onClick={this.continue}
                                >   continue
                                </button>
                                <div style={{display: `${this.state.alertDisplay}`}}>
                                <Alert severity='error'><AlertTitle><p className='alert'>Please select an option</p></AlertTitle></Alert>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                        )}
                </Spring>
                </React.Fragment>
            {/* </MuiThemeProvider> */}

            </div>
        )
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

  const styles= {
    form: {
        fontSize: '2.3vh',
        padding: '10px'
    }
}



