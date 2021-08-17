


    export const getGifs = async( category) =>{

        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI( category )}&limit=12&api_key=fuFWVDEb0I312FNI5fN8LQkTwYPwBDdh`;
        const resp = await fetch( url );
        const { data }= await resp.json();
        console.log(data);

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }        
        })
        return gifs;
    }