import React from 'react'
import '../styles/components/spot.css'

// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles({
//   root: {
//     minWidth: 275,
//     margin: '10px',
//   },
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)',
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
// });

const Spot = ({spot}) => {

    // const classes = useStyles();
    // const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className='spot' onClick={() => alert(`hello ${spot.spot}`)}>
            <CardContent >
                <Typography variant="h5" component="h2">
                    {spot.spot}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                     {spot.region}
                </Typography>
                <Typography  color="textSecondary">
                    {spot.departement}
                </Typography>
                <Typography variant="body2" component="p">
                    {spot.ville}
                </Typography>
                <Typography variant="body2" component="p">
                    Meilleures saisons : {spot.meilleures_saisons}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Spot
