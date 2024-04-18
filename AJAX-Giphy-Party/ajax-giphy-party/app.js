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
    searchBar.setAttribute('placeholder', 'Type requested Gif genre');
    searchBar.className = 'search-bar';

    const searchBtn = document.createElement('button');
    searchBtn.innerText = 'Search';
    searchBtn.className = 'search-Btn';

    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'Remove Gifs';
    removeBtn.className = 'remove-btn';

    const gifImageContainer = document.createElement('div');

    inputArea.appendChild(searchBar);
    inputArea.appendChild(searchBtn);
    inputArea.appendChild(removeBtn);
    mainBody.appendChild(giphyTitle);
    mainBody.appendChild(inputArea);
    mainBody.appendChild(gifImageContainer);
    root.appendChild(mainBody);

    //----------- functionality -------------

    function addGif() {

    }


    let inputValue = '';
   
    inputValue = document.getElementsByClassName('search-bar').value;

    async function getGiphyImage() {
        const res = await axios.get('http://api.giphy.com/v1/gifs/search', {
            params: {
                
            }
        });
    }

}
app();