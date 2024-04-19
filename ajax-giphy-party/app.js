function app(){
    //------------- create presentation layer -------------------
    const root = document.getElementById('root');

    const mainBody = document.createElement('div');

    const giphyTitle = document.createElement('h1');
    giphyTitle.innerText = 'Giphy Party';

    const inputArea = document.createElement('div');
    inputArea.className = 'input-area';

    const searchBar = document.createElement('input');
    searchBar.setAttribute('type', 'text');
    searchBar.setAttribute('placeholder', 'Search for a specific Gif...');
    searchBar.setAttribute('id', 'search-bar');

    const searchBtn = document.createElement('button');
    searchBtn.innerText = 'Search';
    searchBtn.setAttribute('id', 'search-btn');

    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'Remove Gifs';
    removeBtn.setAttribute('id', 'remove-btn');

    const gifImageContainer = document.createElement('div');
    gifImageContainer.className = 'gif-img-container'

    inputArea.appendChild(searchBar);
    inputArea.appendChild(searchBtn);
    inputArea.appendChild(removeBtn);
    mainBody.appendChild(giphyTitle);
    mainBody.appendChild(inputArea);
    mainBody.appendChild(gifImageContainer);
    root.appendChild(mainBody);

    //----------- functionality -------------

    function addGif(gifUrl) {
        //-------- presentation creation (cards) -----------
        const newGif = document.createElement('img');
        newGif.className = 'new-gif';
        newGif.src = gifUrl;

        gifImageContainer.appendChild(newGif);
    }
    const getRandomInt = (max) => (Math.floor(Math.random() * max));
    
    async function getGiphyImage() {
        const inputValue = document.getElementById('search-bar').value;
    
        try {
            const res = await axios.get('https://api.giphy.com/v1/gifs/search', {
                params: {
                    q: inputValue,
                    api_key: 'GOf3UG8U012O5dN4uAeXEhaGQjiLkWhv',
                }
            });
    
            const numGifs = res.data.data.length;
    
            const randomIndex = getRandomInt(numGifs);
    
            const gifUrl = res.data.data[randomIndex].images.original.url;

            addGif(gifUrl);

            // --------- reset input after each click -------------

            document.getElementById('search-bar').value = '';

        } catch (error) {
            console.error('Error fetching Giphy image:', error);
        }
    }

    // ----------- search button hanlder -------------------

    document.getElementById('search-btn').addEventListener('click', getGiphyImage);


    //------------ remove btn functionality and handler -----------------

    function removeAllGifs() {
        const gifs = document.querySelectorAll('.gif-img-container .new-gif');
        
        gifs.forEach(gif => {
            gif.remove();
        });
    }
    
    document.getElementById('remove-btn').addEventListener('click', removeAllGifs);
}
app();