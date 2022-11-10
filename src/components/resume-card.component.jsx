import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material"

const ResumeCard = ({ imageUrl, cardDescription }) => {
    return (
        <div>
            <Card
                variant='outlined'
                sx={{ paddingLeft: '4rem', paddingTop: '1rem', paddingBottom: '1rem', margin: '1rem 0' }}>
                <Grid container direction='row' justifyContent='center' alignItems='center' spacing={2}>
                    <Grid item xs={1}>
                        <CardMedia component='img' height='50' image={imageUrl} sx={{ borderRadius: '4px' }}></CardMedia>
                    </Grid>
                    <Grid item xs={11}>
                        <CardContent>
                            <Typography px={2} variant='body1'>
                                {cardDescription}
                            </Typography>
                        </CardContent>
                    </Grid>
                </Grid>
            </Card>
        </div>
    )
}

export default ResumeCard;

