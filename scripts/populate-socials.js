let socials_container = document.getElementsByClassName("socials-container")[0];

const socialsDataPath = '../data/socials.json';

fetch(socialsDataPath).then(response =>
{
    if (!response.ok)
    {
        throw new Error('Fetch response was not ok');
    }
    return response.json();
}).then(data =>
{
    for (let name in data)
    {
        let newAnchor = document.createElement('a');
        newAnchor.className = 'social-button';
        newAnchor.href = data[name].url;
        newAnchor.target = "_blank";
        newAnchor.rel = "noreferrer noopener";
        newAnchor.textContent = "> " + name;
    
        socials_container.appendChild(newAnchor);
    }
})
.catch(error =>
{
    console.error('There was a problem with the fetch operation:', error);
});