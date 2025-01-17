const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Use CORS middleware to allow requests from your React app
app.use(cors(), express.json());

//API base url
const ApiBaseUrl = 'https://api.spotify.com/v1';

// Search for tracks
app.get('/api/search', async (req, res) => {
    const trimmedUrl = req.url.substring(4);
    console.log(trimmedUrl);
    try {
        const response = await axios.get(ApiBaseUrl + trimmedUrl, {
            headers: {
                Authorization: req.headers.authorization,
                "Content-Type": "application/json"
            }
        });
        
        // Send the fetched image data to the frontend
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching content:', error);
        res.status(500).json({ error: 'Failed to fetch content' });
    }
});
//Get user ID
app.get('/api/me', async (req, res) => {
    const trimmedUrl = req.url.substring(4);
    console.log(trimmedUrl);
    try {
        const response = await axios.get(ApiBaseUrl + trimmedUrl, {
            headers: {
                Authorization: req.headers.authorization,
                "Content-Type": "application/json"
            }
        });
    
        // Send the fetched image data to the frontend
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching content:', error);
        res.status(500).json({ error: 'Failed to fetch content' });
    }
});
//Post new playlist
app.post('/api/*/playlists', async (req, res) => {
    const trimmedUrl = req.url.substring(4);
    console.log(ApiBaseUrl + trimmedUrl);
    try {
       const response = await axios.post(ApiBaseUrl + trimmedUrl, req.body, {
        headers: {
            Authorization: req.headers.authorization,
            "Content-Type": "application/json"
        }
       });
       
        // Send the fetched image data to the frontend
       res.json(response.data);
    } catch (error) {
        console.error('Error fetching content:', error);
        res.status(500).json({ error: 'Failed to fetch content' });
    }
});
//Post tracks to playlist
 app.post('/api/playlists/*', async (req, res) => {
    const trimmedUrl = req.url.substring(4);
     console.log(ApiBaseUrl + trimmedUrl);
     try {
         const response = await axios.post(ApiBaseUrl + trimmedUrl, req.body, {
             headers: {
                 Authorization: req.headers.authorization
             }
         });
        
         // Send the fetched image data to the frontend
         res.json(response.data);
     } catch (error) {
         console.error('Error fetching content:', error);
         res.status(500).json({ error: 'Failed to fetch content' });
     }
 });

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
