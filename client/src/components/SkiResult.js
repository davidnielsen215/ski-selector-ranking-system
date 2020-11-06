import React, { Component } from 'react'
import {Card, CardContent, Typography} from '@material-ui/core'
import ImgUrl from '../images/sport_systems3.png'

export default class SkiResult  extends Component {
    render() {
        return (
            <React.Fragment>
            <Card style={this.props.cardStyle}>
                <img src={ImgUrl} alt='' style={{width: '230px', height: 'auto'}}/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h1">
                        {this.props.skis[this.props.item].name}
                    </Typography>
                    <Typography gutterBottom variant="h7" component="h4">
                       terrain score: {this.props.skis[this.props.item].rank}
                    </Typography>
                </CardContent>
            </Card>
            </React.Fragment>
        )
    }
}

// const styles = {
//     root: {
//       maxWidth: '145px',
//     },
//     media: {
//       height: '140px',
//     },
//   };


