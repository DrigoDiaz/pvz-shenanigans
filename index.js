const api_URL = "https://pvz-2-api.vercel.app/api/plants";
const outputElement = document.getElementById('output');

fetch(api_URL)
.then(response => {
    if (!response.ok){
        throw new Error('API response was not good');
    }
    return response.json();
})
.then(data =>{
    outputElement.textContent = JSON.stringify(data, null, 2);
})
.catch(error => {
    console.error("Error: ", error)
});