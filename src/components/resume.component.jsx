import { Card, Link, Typography, CardMedia, Grid, CardContent, Button } from '@mui/material';
import QITLogo from '../assets/q-it-logo.png';
import CBSLogo from '../assets/cbs-logo.png'
import JSLogo from '../assets/javascript-logo.png'


const Resume = () => {
    return (
        <div>
            <Typography variant='h6' pt={2}>Resume summary</Typography>
            <Card
                variant='outlined'
                sx={{ paddingLeft: '4rem', paddingTop: '1rem', paddingBottom: '1rem', margin: '1rem 0' }}>
                <Grid container direction='row' justifyContent='center' alignItems='center' spacing={2}>
                    <Grid item xs={1}>
                        <CardMedia component='img' height='50' image={CBSLogo} sx={{ borderRadius: '4px' }}></CardMedia>
                    </Grid>
                    <Grid item xs={11}>
                        <CardContent>
                            <Typography variant='subtitle2' px={2} pb={1} fontWeight='bold'>Jan. 2019 - May 2021</Typography>
                            <Typography px={2} variant='body1' align='justify'>
                                I came to Denmark to study at the Copenhagen Business School. In May 2021, I graduated with an <Link href='https://www.cbs.dk/en/study/graduate/msc-in-business-administration-and-e-business' target='_blank' underline='hover'>MSc in Business Administration and E-Business</Link>, where I had my first brush-off with JavaScript and commercial web technologies.
                            </Typography>
                        </CardContent>
                    </Grid>
                </Grid>
            </Card>
            <Card
                variant='outlined'
                sx={{ paddingLeft: '4rem', paddingTop: '1rem', paddingBottom: '1rem', margin: '1rem 0' }}>
                <Grid container direction='row' justifyContent='center' alignItems='center' spacing={2}>
                    <Grid item xs={1}>
                        <CardMedia component='img' height='50' image={QITLogo} sx={{ borderRadius: '4px' }}></CardMedia>
                    </Grid>
                    <Grid item xs={11}>
                        <CardContent>
                            <Typography variant='subtitle2' px={2} pb={1} fontWeight='bold'>Feb. 2020 - May 2022</Typography>
                            <Typography px={2} variant='body1' align='justify'>
                                For two and a half years during and after graduating CBS, I worked at <Link href='https://queue-it.com/' underline='hover' sx={{ cursor: 'pointer' }} target='_blank' color='success.main'>Queue-it</Link> as a Business Development Rep. There, I met some very smart IT people and learned a lot about cloud computing, web application architecture, and the e-commerce market. I also learned that I do not want to work in sales and would much rather code for a living.
                            </Typography>
                        </CardContent>
                    </Grid>
                </Grid>
            </Card>
            <Card
                variant='outlined'
                sx={{ paddingLeft: '4rem', paddingTop: '1rem', paddingBottom: '1rem', margin: '1rem 0' }}>
                <Grid container direction='row' justifyContent='center' alignItems='center' spacing={2}>
                    <Grid item xs={1}>
                        <CardMedia component='img' height='50' image={JSLogo} sx={{ borderRadius: '4px' }}></CardMedia>
                    </Grid>
                    <Grid item xs={11}>
                        <CardContent>
                            <Typography variant='subtitle2' px={2} pb={1} fontWeight='bold'>May 2022 - Present</Typography>
                            <Typography px={2} variant='body1' align='justify'>
                                I quit my job at Queue-it in May and started learning web development full time on my own. Over the past six months, I have been learning and developing full-stack applications with React, Express, MongoDB, Firebase, Bootstrap, MUI and more.
                            </Typography>
                        </CardContent>
                    </Grid>
                </Grid>
            </Card>
            <Grid container direction='column' alignItems='flex-end'>
                <Grid item xs={9}>
                    <Button color='warning'>Read about me & my journey up to this point</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button color='secondary'>Check out my projects</Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default Resume;