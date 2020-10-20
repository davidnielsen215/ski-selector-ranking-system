import React, { Component } from 'react'
import {     FormGroup, Checkbox, CardContent, 
    AppBar, FormControlLabel, FormControl, 
    Card } from '@material-ui/core'
import EntireLogo from '../images/sport_systems.png'
import { Spring } from 'react-spring/renderprops'
import { Alert, AlertTitle } from '@material-ui/lab'


export default class Snow extends Component {
    state = {
        alertDisplay: 'none', 
        percentage: 83.34
    }

    continue = e => {
        e.preventDefault()
        const { values } = this.props
        if(values.snow.g === undefined && values.snow.p === undefined && values.snow.a === undefined){
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
        const returnedStep = x -1
        return returnedStep
    }

    progressStep = () => {
        if (this.state.percentage !== 100){
            this.setState({ percentage: 100 })
        }
    }

    setText = e =>{
        e.preventDefault()
        this.setState({
            textShow: ''
        })
        this.progressStep()
    }

    render() {
        const { values, handleSnow } = this.props 
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
                        <Card className="card">
                            <CardContent>
                                <h4 className='step'>Step {this.getStep(values.step)} of 6</h4>
                                    
                                <ProgressBar percentage={this.state.percentage} />
                                    <br/>
                                    <br/>
                                <div style={{background: 'black', borderRadius: '5px', height: '10%'}}>
                                    <h3 style={{ color: 'white', padding: '8px', fontSize: '150%'}}>What Snow Condition Do You Ski In ?</h3>
                                </div>
                                    <br/>
                                <FormControl component="fieldset" >
                                    <FormGroup onChange={handleSnow(values.snow)} >
                                        <FormControlLabel onClick={this.progressStep} value="g" control={<Checkbox color="primary"/>} label={<p style={styles.form}>Groomed</p>}/>
                                        <FormControlLabel onClick={this.progressStep}value="p" control={<Checkbox color="primary"/>} label={<p style={styles.form}>Powder</p>}/>
                                        <FormControlLabel onClick={this.progressStep} value="a" control={<Checkbox color="primary"/>} label={<p style={styles.form}>All Terrain</p>}/>
                                    </FormGroup>
                                </FormControl>
                                    <br/>
                                    <br/>
                                {/* <button 
                                    className='previousButton'
                                    onClick={this.back}
                                >   previous
                                </button> */}
                                <button 
                                    className='continueButton'
                                    onClick={this.continue}
                                >   result
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
