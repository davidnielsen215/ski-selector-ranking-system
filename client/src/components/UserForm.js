import React, { Component } from 'react'
import SkillLevel from './SkillLevel'
import Speed from './Speed'
import TurnRadius from './TurnRadius'
import Snow from './Snow'
import LandingPage from './LandingPage'
import Gender from './Gender'
import Terrain from './Terrain'
import Result from './Result'
import Trail from './Trail'
// import CheckboxTest from './CheckboxTest'
// import Calculation from './Calculation'

export class UserForm extends Component {
    state = {
        step: 1,
        terrain: {
            p: undefined,
            m: undefined,
            t: undefined,
            g: undefined,
            b: undefined
        },
        gender: undefined,
        skillLevel: {
            b: undefined,
            i: undefined,
            a: undefined,
            e: undefined
        },
        speed: {
            f: undefined,
            m: undefined,
            s: undefined
        },
        turnRadius: {
            s: undefined,
            m: undefined,
            l: undefined
        },
        snow:{
            g: undefined,
            p: undefined,
            a: undefined
        }
    }

    // Proceed to next step
    nextStep = () => {
        const { step } = this.state
        this.setState({
          step: step + 1
        })
    }

    trailMap = () => {
        const { step } = this.state
        this.setState({
            step: step + 8
        })
    }

    homeScreen = () => {
        const { step } = this.state
        this.setState({
            step: step - 8
        })
    }

    // Go to previous step
    prevStep = () => {
        const { step } = this.state
        this.setState({
            step: step - 1
        })
    }

    restart = () => {
        this.setState({
            step: 1,
            terrain: {
                p: undefined,
                m: undefined,
                t: undefined,
                g: undefined,
                b: undefined
            },
            gender: undefined,
            skillLevel: {
                b: undefined,
                i: undefined,
                a: undefined,
                e: undefined

            },
            speed: {
                f: undefined,
                m: undefined,
                s: undefined
            },
            turnRadius: {
                s: undefined,
                m: undefined,
                l: undefined
            },
            snow:{
                g: undefined,
                p: undefined,
                a: undefined
            }
        })
    }

    //Handle field change

    handleChange = input => e => {
        this.setState({[input]: e.target.value})
    }

    handleT = input => evt => {
        const value = evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
        if(value === true){
            this.setState({
              ...this.state,
              terrain: {
                  ...this.state.terrain,
                  [evt.target.value]: evt.target.value}
            });
        }
        else {
            this.setState({
                ...this.state,
                terrain: {
                    ...this.state.terrain,
                    [evt.target.value]: undefined}
              });
        }
      }

      handleSkill = input => evt => {
        const value = evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
        if(value === true){
            this.setState({
              ...this.state,
              skillLevel: {
                  ...this.state.skillLevel,
                  [evt.target.value]: evt.target.value}
            });
        }
        else {
            this.setState({
                ...this.state,
                skillLevel: {
                    ...this.state.skillLevel,
                    [evt.target.value]: undefined}
              });
        }
      }

      handleSpeed = input => evt => {
        const value = evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
        if(value === true){
            this.setState({
              ...this.state,
              speed: {
                  ...this.state.speed,
                  [evt.target.value]: evt.target.value}
            });
        }
        else {
            this.setState({
                ...this.state,
                speed: {
                    ...this.state.speed,
                    [evt.target.value]: undefined}
              });
        }
      }

      handleTurn = input => evt => {
        const value = evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
        if(value === true){
            this.setState({
              ...this.state,
              turnRadius: {
                  ...this.state.turnRadius,
                  [evt.target.value]: evt.target.value}
            });
        }
        else {
            this.setState({
                ...this.state,
                turnRadius: {
                    ...this.state.turnRadius,
                    [evt.target.value]: undefined}
              });
        }
      }

      handleSnow = input => evt => {
        const value = evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
        if(value === true){
            this.setState({
              ...this.state,
              snow: {
                  ...this.state.snow,
                  [evt.target.value]: evt.target.value}
            });
        }
        else {
            this.setState({
                ...this.state,
                snow: {
                    ...this.state.snow,
                    [evt.target.value]: undefined}
              });
        }
      }


    render() {
        const { step } = this.state
        const { terrain, gender, skillLevel, speed, turnRadius, snow, result } = this.state
        const values = {step, terrain, gender, skillLevel, speed, turnRadius, snow, result }
                
        switch (step) {
            default:
                
            case 1: 
                return(
                    <LandingPage
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    trailMap={this.trailMap}
                    values={values}/>
                    )
            case 2: 
                return ( 
                    <Terrain
                    handleT={this.handleT}
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                    />
                )
            case 3: 
                return ( 
                    <Gender
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}/>
                )
            case 4: 
                return(
                    <SkillLevel
                    prevStep={this.prevStep}
                    nextStep={this.nextStep}
                    handleSkill={this.handleSkill}
                    values={values}/>
                )
            case 5:
                return(
                    <Speed
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleSpeed={this.handleSpeed}
                    values={values}/>
                )
            case 6:
                return (
                    <TurnRadius
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleTurn={this.handleTurn}
                    values={values}/>
                )
            case 7:
                return (
                    <Snow
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleSnow={this.handleSnow}
                    values={values}
                    />
                )
            case 8: 
                return (
                    <Result
                    values={values}
                    restart={this.restart}
                    />
            )
            case 9: 
                return (
                    <Trail
                    homeScreen={this.homeScreen}
                    />
                )
            }
    }
}

export default UserForm
