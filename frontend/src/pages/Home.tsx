import UserSelect from "../components/Select";
import SearchBar from "../components/Searchbar";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useState } from "react";

export default function Home() {

    let plantNames = [];
    let plantData = new Map();

    const [displayedPlants, setDisplayedPlants] = useState([
        {
            "name": "Test Name",
            "description": "A test description",
            "image": "https://t4.ftcdn.net/jpg/01/79/88/65/360_F_179886510_6xf0RHhDnLN5ovd2qmGF4WaZMJjqrt6o.jpg",
        },
        {
            "name": "Test Name 2",
            "description": "A test description",
            "image": "https://t4.ftcdn.net/jpg/01/79/88/65/360_F_179886510_6xf0RHhDnLN5ovd2qmGF4WaZMJjqrt6o.jpg",
        }
    ])

    async function data() {
        console.log("Getting data");
        const response = await fetch("http://127.0.0.1:8000/plants/all");
        const data = await response.json();
        plantNames = data["plants"];

        setDisplayedPlants([]);
        plantNames.forEach(async (name: any) => {
            const currentResponse = await fetch(`http://127.0.0.1:8000/plants?name=${encodeURI(name)}`);
            const currentData = await currentResponse.json();

            plantData.set(name, currentData);
            setDisplayedPlants(prevItems => [...prevItems, currentData]);
        });

        console.log(plantData);
        console.log(displayedPlants);
    }

    return (
        <>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minWidth: '100vw', padding: '2%'}}>
            <p>I am looking for: </p>
            <UserSelect></UserSelect>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minWidth: '100vw', padding: '2%'}}>
            <SearchBar></SearchBar>
            <Button key="data" onClick={data}>Load Plants</Button>
        </Box>

        <ImageList sx={{ width: '100vw', height: '100vh', display: 'flex', position: 'relative'}} cols={3} >
            {displayedPlants.map((plant) => (
                <ImageListItem key={plant["name"]}>
                <img
                    src={plant["image"]}
                    alt={plant["name"]}
                    loading="lazy"
                    style={{position: 'relative', objectFit: 'scale-down'}}
                />
                <ImageListItemBar
                    title={plant["name"]}
                    subtitle={<span>{plant["description"]}</span>}
                    position="below"
                />
                </ImageListItem>)
            )}
            </ImageList>
        </>
    )
}