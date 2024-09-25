// Replace these with your own YouTube API key and channel ID
const apiKey = 'AIzaSyBN3qH6fo2nXdGtdUsM4EtY-5HI3NLfpT8';
const channelId = 'UCcw3dKBCoXZQuGW6xGPJLwA';

// Fetch the latest videos
async function fetchVideos() {
  const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=6`;
  try {
    const response = await fetch(url);
    console.log(response);
    
    const data = await response.json();
    displayVideos(data.items);
  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
  }
}

// Display the videos on the page
function displayVideos(videos) {
  const videosContainer = document.getElementById('videos');
  videosContainer.innerHTML = '';

  videos.forEach((video) => {
    if (video.id.videoId) {
      const videoElement = document.createElement('div');
      videoElement.classList.add('video');

      videoElement.innerHTML = `
        <iframe
          src="https://www.youtube.com/embed/${video.id.videoId}"
          allowfullscreen
        ></iframe>
        <p>${video.snippet.title}</p>
      `;

      videosContainer.appendChild(videoElement);
    }
  });
}

// Initialize the app by fetching videos when the page loads
fetchVideos();
