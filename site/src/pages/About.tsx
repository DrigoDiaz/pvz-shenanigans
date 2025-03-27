import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { GitHub } from '@mui/icons-material';
import katImage from '../assets/potato.jpg';

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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
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
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Rodrigo
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
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