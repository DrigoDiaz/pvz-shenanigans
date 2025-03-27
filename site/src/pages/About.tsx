import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { GitHub } from '@mui/icons-material';
import katImage from '../assets/potato.jpg';
import drigoImage from '../assets/pea_vine.png';

export default function About() {
    function handleKat() {
        window.open('https://github.com/k1tk4t5', '_blank')
    };

    function handleDrigo() {
        window.open('https://github.com/DrigoDiaz', '_blank')
    };

    return (
        <>
        <Box
            sx={{
                display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '25vh', minWidth: '100vw', flexDirection: { xs: 'column', md: 'row' }
            }}
        >
            <Typography variant="body1" display='inline-block' sx={{width: '75%'}}>
            This website was made as a Spring Break project during 2025. We wanted to create a simple experience for users who wanted to learn some information of both the units & enemies from PvZ (Plants vs Zombies) 2.

            <br></br>
            <br></br>
            Hopefully you had a good time browsing through our website and continue protecting your lawns!
            </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '25vh', minWidth: '100vw', flexDirection: { xs: 'column', md: 'row' }, gap: 10, marginBottom: '10%', marginTop: '10%'}}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={katImage}
                    title="primal potato mine"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Katrina
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Currently a senior studying CS who enjoys playing games and
                        working on fun side projects! 
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" startIcon={<GitHub />} onClick={handleKat}>k1tk4t5</Button>
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={drigoImage}
                    title="pea vine"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Rodrigo
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Currently a senior studying Informatics with a specialization in Human-Computer Interaction.
                        I enjoy gaming and working on projects as well!
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" startIcon={<GitHub />} onClick={handleDrigo}>DrigoDiaz</Button>
                </CardActions>
            </Card>
        </Box>
        </>
    )
}