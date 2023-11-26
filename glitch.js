const glitchElement = document.getElementById("glitchy");
const originalText = glitchElement.textContent;

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const charactersLength = characters.length;

const glitchChance = 0.15;

function applyGlitchEffect()
{
    var newText = '';
    for (var i = 0; i < originalText.length; i++)
    {
        if (Math.random() < glitchChance)
        {
            if (Math.random() < 0.1)
            {
                newText += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            else
            {
                newText += originalText[i];
            }
        }
        else
        {
            newText += glitchElement.textContent[i];
        }
    }
    glitchElement.textContent = newText;
}

setInterval(applyGlitchEffect, 100);