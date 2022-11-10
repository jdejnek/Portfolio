import { Accordion, AccordionSummary, AccordionDetails, Link, Grid } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Typography from '@mui/material/Typography';


const ProjectAccordion = ({ projectName, projectDescription, projectUrl, projectType, typeColor }) => {
    return (
        <div>
            <Accordion>
                <AccordionSummary id='panel1' aria-controls="panel1-content" expandIcon={<ExpandMoreIcon />}>
                    <Grid container direction='column'>
                        <Grid item>
                            <Typography variant="body1" fontWeight='bold'>{projectName}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography color={typeColor} variant="body2">{projectType}</Typography>
                        </Grid>
                    </Grid>
                </AccordionSummary>
                <AccordionDetails sx={{ background: 'rgba(0, 0, 0, 0.3)' }}>
                    <Typography py={2}>{projectDescription}</Typography>
                    <Link sx={{cursor: 'pointer'}}textAlign='right' underline="hover" color='secondary.main'>View the project</Link>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default ProjectAccordion;