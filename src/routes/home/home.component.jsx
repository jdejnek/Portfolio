import Container from '@mui/material/Container';
import Resume from '../../components/resume.component';
import Intro from '../../components/intro.component';
import BottomNav from '../../components/bottom-nav/bottom-nav.component';


const Home = () => {
    return (
        <Container style={{ height: '92vh', marginTop: '2rem', marginBottom: '2rem' }} maxWidth='md'>
            <Intro />
            <Resume />
            <BottomNav />
        </Container>
    )
}

export default Home;