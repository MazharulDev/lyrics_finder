import { Box, Button, TextField } from '@mui/material';
import React from 'react';

const SearchField = () => {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: 'center' }}>
            <TextField
                id="standard-search"
                label="Search lyrics"
                type="search"
                variant="standard"
                sx={{ margin: "10px" }}
            />
            <Button variant="contained">Search</Button>
        </Box>
    );
};

export default SearchField;