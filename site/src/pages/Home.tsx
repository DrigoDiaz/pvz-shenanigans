import UserSelect from "../components/Select";
import SearchBar from "../components/Searchbar";
import { Box } from "@mui/material";

export default function Home() {
    return (
        <>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minWidth: '100vw', padding: '2%'}}>
            <p>I am looking for: </p>
            <UserSelect></UserSelect>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minWidth: '100vw', padding: '2%'}}>
            <SearchBar></SearchBar>
        </Box>
        </>
    )
}