const generateBtn = document.getElementById('button');
const containImage = document.getElementById('animeImage');
const title = document.getElementById('title');

generateBtn.addEventListener("click", async () => {
    try {
        const response = await fetch('https://api.nekosia.cat/api/v1/images/catgirl');
        const data = await response.json();

        if (data.success) {
            containImage.src = data.image.original.url;
            title.textContent = `Neko Image - ${data.category}`; 
        } else {
            title.textContent = 'No images found'; 
        }
    } catch (error) {
        console.error('Error fetching anime image:', error);
        title.textContent = 'Failed to load image';
    }
});
