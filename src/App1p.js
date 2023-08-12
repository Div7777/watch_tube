import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import { Navbar, Feed, VideoDetail, SearchFeed, ChannelDetail } from './components';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
const App1p = () => {
    return (
        <BrowserRouter>
            <Box sx={{ backgroundColor: "black" }}>
                <Navbar />
                <Routes>
                    <Route path='/' exact element={<Feed />} />
                    <Route path='/video/:id' element={<VideoDetail />} />
                    <Route path='/channel/:id' element={<ChannelDetail />} />
                    <Route path='/search/:searchTerm' element={<SearchFeed />} />
                </Routes>
                <SearchFeed />
            </Box>
        </BrowserRouter>
    );
}


export default App1p