import React from 'react'
import '../styles/components/spot.css'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const Spot = ({spot, handleCallWeatherAPI}) => {

    return (
        <Card className='spot' onClick={() => handleCallWeatherAPI(spot.latitude, spot.longitude)}>
            <CardContent >
                <Typography variant="h5" component="h2">
                    {spot.spot}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                     {spot.region}, {spot.departement}, {spot.ville}
                </Typography>
                <Typography variant="body2" component="p">
                    Type : {spot.type}
                </Typography>
                <Typography variant="body2" component="p">
                    Hauteur : {spot.hauteur}
                </Typography>
                <Typography variant="body2" component="p">
                    Nombre lignes : {spot.nb_lignes}
                </Typography>
                <Typography variant="body2" component="p">
                    Cotations : {spot.cotations}
                </Typography>
                <Typography variant="body2" component="p">
                    Orientation : {spot.orientation}
                </Typography>
                <Typography variant="body2" component="p">
                    Meilleures saisons : {spot.meilleures_saisons}
                </Typography>
                <Typography variant="body2" component="p">
                    Approche : {spot.approche}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Spot
