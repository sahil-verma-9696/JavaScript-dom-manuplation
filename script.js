const API_KEY = 'AIzaSyCFgRMXAeOFOp24OSPhGS7bmBwxQhn6zIo'; // Replace with your YouTube Data API key

// Function to execute the YouTube search using fetch
async function execute() {
    const query = "music";  // Your search query
    const maxResults = 50;   // Number of results you want to retrieve
    const regionCode = "IN"; // Set the region code (optional)

    // Build the URL for the YouTube search API request
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=channel&maxResults=${maxResults}&q=${encodeURIComponent(query)}&regionCode=${regionCode}&key=${API_KEY}`;

    try {
        // Fetch the data from the YouTube API
        const response = await fetch(url);
        const data = await response.json();

        // Log the response data to the console
        console.log("Response:", data);
    } catch (err) {
        console.error("Error executing YouTube API request:", err);
    }
}

execute();