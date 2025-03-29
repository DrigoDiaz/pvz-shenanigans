import UserSelect from "../components/Select";
import SearchBar from "../components/Searchbar";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";

export default function Home() {
    async function data() {
        console.log("Getting data");
        const response = await fetch('https://minecraft-api.vercel.app/api/items');
        const data = await response.json();
        console.log(data);
    }

    return (
        <>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minWidth: '100vw', padding: '2%'}}>
            <p>I am looking for: </p>
            <UserSelect></UserSelect>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minWidth: '100vw', padding: '2%'}}>
            <SearchBar></SearchBar>
            <Button key="data" onClick={data}>Data</Button>
        </Box>
        </>
    )
}