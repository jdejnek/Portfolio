import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ProjectAccordion from '../components/accordion';


const Projects = () => {
    return (
        <div>
            <Typography variant='h6' py={2}>Web development projects</Typography>
            <Grid container direction='column' spacing={2} justifyContent='flex-start'>
                <Grid item>
                    <ProjectAccordion projectName={'Portfolio'} projectDescription={'The website you are viewing right now. A study in the marvels of Material UI.'} projectType={'Front-end'} typeColor={'primary.main'} />
                </Grid>
                <Grid item>
                    <ProjectAccordion projectName={'Unnamed Productions'} projectDescription={"My dear friend is a tattoo artist and a painter. For my very first React project, I made a website for him to sell his art. It's called what it is as, well, we haven't named it yet."} projectType={'Full-stack'} typeColor={'warning.main'} />
                </Grid>
                <Grid item>
                    <ProjectAccordion projectName={'CSSNeakers'} projectDescription={'While working at Queue-it, I must have seen every single sneaker store operating in Europe at one point or another. When it came to building my own project, I decided to recreate one.'} projectType={'Full-stack'} typeColor={'warning.main'} />
                </Grid>
            </Grid>
        </div>
    )
}

export default Projects;