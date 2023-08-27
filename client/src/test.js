const code = 'yourAuthorizationCode'; // Replace with the actual authorization code

fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ code }),
})
.then(response => {
    if (!response.ok) {
        console.error('Request failed. Status:', response.status);
        throw new Error('Request failed');
    }
    return response.json();
})
.then(data => {
    console.log('Response data:', data);
})
.catch(error => {
    console.error('Request error:', error);
});
