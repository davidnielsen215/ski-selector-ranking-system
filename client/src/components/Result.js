import React, { Component } from 'react'
import Axios from 'axios'
import SkiResult from './SkiResult'
import Loading from './Loading'

export default class Result extends Component {
    
    state = {
            skiResults :{
                result1: {  name: undefined,
                            rank: ""
                },
                result2: {  name: undefined,
                            rank: ""
                },
                result3: {  name: undefined,
                            rank: ""
                },
                result4: {  name: undefined,
                            rank: ""
                },
                result5: {  name: undefined,
                            rank: ""
                },
                result6: {  name: undefined,
                            rank: ""
                }
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
        Axios.post('http://localhost:5000/skis/find', this.state.inputValues).then(res => {  
            console.log(res.data)

             const removeEmpty = obj =>
            Object.keys(obj)
            .filter(k => obj[k] != null) // Remove undef. and null.
            .reduce(
                (newObj, k) =>
                typeof obj[k] === "object"
                ? { ...newObj, [k]: removeEmpty(obj[k]) } // Recurse.
                : { ...newObj, [k]: obj[k] }, // Copy value.
                {}
                );
                
                let terVals = this.state.inputValues.terrain;
                let onlyVals = removeEmpty(terVals);
                let onlyLetters = [];
                
                
                if(onlyVals.p !== undefined){
                    onlyLetters.push(onlyVals.p)
                }
                if(onlyVals.m !== undefined){
                    onlyLetters.push(onlyVals.m)
                }
                if(onlyVals.t !== undefined){
                    onlyLetters.push(onlyVals.t)
                }
                if(onlyVals.g !== undefined){
                    onlyLetters.push(onlyVals.g)
                }
                if(onlyVals.b !== undefined){
                    onlyLetters.push(onlyVals.b)
                }
                
                console.log(onlyVals)
                console.log(onlyLetters)

                //Since we already have a value that contains all the entries from state of which to add the res.data, implement way to 
                //add the values of the response together and then concat the values onto the res.data within a new property
                
                res.data.map(ski => {

                    let first = 0;
                    let second = 0;
                    let third = 0;
                    let fourth = 0;
                    let fifth = 0;
                    if(ski.tRank[onlyLetters[0]]){
                        first = ski.tRank[onlyLetters[0]];
                    }else first = 0
                    if(ski.tRank[onlyLetters[1]]){
                         second = ski.tRank[onlyLetters[1]];
                    }else second = 0
                    if(ski.tRank[onlyLetters[2]]){
                     third = ski.tRank[onlyLetters[2]];
                    }else third = 0
                    if(ski.tRank[onlyLetters[3]]){
                         fourth = ski.tRank[onlyLetters[3]];
                    }else fourth = 0
                    if(ski.tRank[onlyLetters[4]]){
                         fifth = ski.tRank[onlyLetters[4]];
                    }else fifth = 0
                    

                    ski.addition = parseInt(first) + parseInt(second) + parseInt(third) + parseInt(fourth) + parseInt(fifth)
                })
                
                res.data.sort((a,b) => {     
                    return b.addition - a.addition
                });
                console.log(res.data)
            
            if (res.data.length === 0){
                this.setState({
                    isEmpty : true
                })
            }

            if(res.data[0] !== undefined){
                this.setState({
                    skiResults: {
                        ...this.state.skiResults,
                        result1: {
                                    name: res.data[0].name,
                                    rank: res.data[0].addition
                                } 
                    }
                })
            }
            if(res.data[1] !== undefined){
                this.setState({
                    skiResults: {
                        ...this.state.skiResults,
                        result2: {
                            name: res.data[1].name,
                            rank: res.data[1].addition
                        } 
                    }
                })
            }
            if(res.data[2] !== undefined){
                this.setState({
                    skiResults: {
                        ...this.state.skiResults,
                        result3: {
                            name: res.data[2].name,
                            rank: res.data[2].addition
                        } 
                    }
                })
            }
            if(res.data[3] !== undefined){
                this.setState({
                    skiResults: {
                        ...this.state.skiResults,
                        result4: {
                            name: res.data[3].name,
                            rank: res.data[3].addition
                        } 
                    }
                })
            }
            if(res.data[4] !== undefined){
                this.setState({
                    skiResults: {
                        ...this.state.skiResults,
                        result5: {
                            name: res.data[4].name,
                            rank: res.data[4].addition
                        } 
                    }
                })
            }   
            if(res.data[5] !== undefined){
                this.setState({
                    skiResults: {
                        ...this.state.skiResults,
                        result6: {
                            name: res.data[5].name,
                            rank: res.data[5].addition
                        } 
                    }
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
        if(skis.result1.name === undefined){
            loading =   <div style={{paddingLeft: '50%', paddingTop: '5%'}}>
                            <Loading/>
                        </div>
        }
        if(skis.result1.name !== undefined){
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
            
            <br/>
                {emptiness}
                {loading}
            <br/>
            <div style={styles.cardContainer}>
            {Object.keys(skis).map(function(item, i){
                if(skis[item].name !== undefined){
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

