import React, { Component } from 'react'
import {     FormGroup, Checkbox, CardContent, 
    AppBar, FormControlLabel, FormControl, 
    Card } from '@material-ui/core'
import EntireLogo from '../images/sport_systems.png'
import { Spring } from 'react-spring/renderprops'
import { Alert, AlertTitle } from '@material-ui/lab'


export default class TurnRadius extends Component {
    state = {
        alertDisplay: 'none',
        percentage: 66.68
    }

    continue = e => {
        e.preventDefault()
        const { values } = this.props
        if(values.turnRadius.s === undefined && values.turnRadius.m === undefined && values.turnRadius.l === undefined ){
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
            this.setState({ percentage: 83.34 })
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
        const { values, handleTurn } = this.props 

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
                                    <h3 style={{ color: 'white', padding: '8px', fontSize: '150%'}}>What Is Your Turn Radius ?</h3>
                                </div>
                                    <br/>
                                <FormControl component="fieldset" >
                                    <FormGroup onChange={handleTurn(values.turnRadius)} >
                                        <FormControlLabel onClick={this.progressStep} value="s" control={<Checkbox color="primary"/>} label={<p style={styles.form}>Short</p>}/>
                                        <FormControlLabel onClick={this.progressStep} value="m" control={<Checkbox color="primary"/>} label={<p style={styles.form}>Medium</p>}/>
                                        <FormControlLabel onClick={this.progressStep} value="l" control={<Checkbox color="primary"/>} label={<p style={styles.form}>Long</p>}/>

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
            <br/>
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

