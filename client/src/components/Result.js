import React, { Component } from 'react'
import Axios from 'axios'
import SkiResult from './SkiResult'
import Loading from './Loading'

export default class Result extends Component {
    
    state = {
            skiResults :{
                result1: undefined,
                result2: undefined,
                result3: undefined,
                result4: undefined,
                result5: undefined,
                result6: undefined
            },
            inputValues: {
                terrain: {
                    p: this.props.values.terrain.p,
                    m: this.props.values.terrain.m,
                    t: this.props.values.terrain.t,
                    g: this.props.values.terrain.g,
                    b: this.props.values.terrain.b
                },
                gender: this.props.values.gender,
                skillLevel: {
                    b: this.props.values.skillLevel.b,
                    i: this.props.values.skillLevel.i,
                    a: this.props.values.skillLevel.a,
                    e: this.props.values.skillLevel.e
    
                },
                speed: {
                    f: this.props.values.speed.f,
                    m: this.props.values.speed.m,
                    s: this.props.values.speed.s
                },
                turnRadius: {
                    s: this.props.values.turnRadius.s,
                    m: this.props.values.turnRadius.m,
                    l: this.props.values.turnRadius.l
                },
                snow:{
                    g: this.props.values.snow.g,
                    p: this.props.values.snow.p,
                    a: this.props.values.snow.a
                },
                
            },
            isEmpty: false
    }

    retrieveSki = () => {
        Axios.post('https://ski-selector.herokuapp.com/skis/find', this.state.inputValues).then(res => {  
            console.log(res.data)
            if(res.data[0] !== undefined){
                this.setState({
                    skiResults: {
                        ...this.state.skiResults,
                        result1: res.data[0].name
                    }
                })
            }
            if(res.data[1] !== undefined){
                this.setState({
                    skiResults: {
                        ...this.state.skiResults,
                        result2: res.data[1].name
                    }
                })
            }
            if(res.data[2] !== undefined){
                this.setState({
                    skiResults: {
                        ...this.state.skiResults,
                        result3: res.data[2].name
                    }
                })
            }
            if(res.data[3] !== undefined){
                this.setState({
                    skiResults: {
                        ...this.state.skiResults,
                        result4: res.data[3].name
                    }
                })
            }
            if(res.data[4] !== undefined){
                this.setState({
                    skiResults: {
                        ...this.state.skiResults,
                        result5: res.data[4].name
                    }
                })
            }   
            if(res.data[5] !== undefined){
                this.setState({
                    skiResults: {
                        ...this.state.skiResults,
                        result6: res.data[5].name
                    }
                })
            } 
            if( res.data[0] === undefined && res.data[1] === undefined && res.data[2] === undefined && res.data[3] === undefined 
                && res.data[4] === undefined && res.data[5] === undefined){
                this.setState({
                    isEmpty: true
                })
            } 
            })
        .catch(err => (console.log(err)))
    }
 
    

    componentDidMount() {
            this.retrieveSki()     
    }
    
    restart = (e) => {
        e.preventDefault()
        this.props.restart()
    }
    
    render() {
        let skis = this.state.skiResults
        let emptiness 
        let loading
        if(skis.result1 === undefined){
            loading =   <div style={{paddingLeft: '50%', paddingTop: '5%'}}>
                            <Loading/>
                        </div>
        }
        if(skis.result1 !== undefined){
            loading = false
        }
        if(this.state.isEmpty === true){
            emptiness =  <h3 style={styles.textColor}>no skis with matching selections</h3>
            loading = false
        }
        return(
        <div style={styles.background}>
            <div>
            <h1 style={styles.textColor}>Recommended Skis</h1>
            {/* <div style={{paddingLeft: '50%', paddingTop: '5%'}}>
            <Loading/>
            </div> */}
            <br/>
                {emptiness}
                {loading}
            <br/>
            <div style={styles.cardContainer}>
            {Object.keys(skis).map(function(item, i){
                if(skis[item] !== undefined){
                    return <SkiResult key={i} skis={skis} item={item} cardStyle={styles.card}/>
                }
                
            })}
            </div >
            
            </div>
            {/* <button onClick={this.retrieveSki} style={styles.previousButton}>retrieve</button> */}
            <button onClick={this.restart} style={styles.restartButton}>restart</button>
        </div>
        )
    }
    }

const styles = {
    restartButton: {
        color: 'white',
        minWidth: '15vw',
        minHeight: '5%',
        backgroundColor: 'rgba(63,84,184,1)',
        // font-family: 'Roboto', sans-serif;;
        fontSize: '25px',
        borderRadius: '10px',
        margin: '2vh',
        padding: '3px',
        cursor: 'pointer'
    },
    cardContainer: {
        display: 'flex',
        overflow: 'scroll',
        maxWidth: '85vw',
        marginLeft: '7vw',
        // flex: 'row',
        border: '1px solid red'
    },
    card: {
        minWidth: '23vw',
        maxWidth: '30vw',
        maxHeight: '35vh',
        margin: '2vh'
        // margin: '35px',
        // minWidth: '315px',
    },
    textColor: {
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '15px',
        fontSize: '22px'
    },
    background: {
        minHeight: '100vh',
        maxHeight: '170vh',
        background: 'black'
    },
    previousButton: {
        color: 'white',
        minWidth: '15vw',
        minHeight: '5%',
        backgroundColor: '#9e2232',
        // font-family: 'Roboto', sans-serif;;
        fontSize: '25px',
        borderRadius: '10px',
        margin: '2vh',
        padding: '3px',
        cursor: 'pointer'
    }
}

