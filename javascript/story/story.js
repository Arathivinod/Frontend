let selectedCharacter = '';
const storyContainer = document.getElementById('story-container');

// Function to create a button element
function createButton(id, text, clickHandler, cssClass) {
    const buttonTag = document.createElement('button');
    buttonTag.id = id;
    buttonTag.innerText = text;
    buttonTag.onclick = clickHandler;

    if (cssClass) {
        buttonTag.classList.add(cssClass);
    }

    return buttonTag;
}

// Function to select a character and start the adventure
function selectCharacter(characterName) {
    selectedCharacter = characterName;

    const newPageContent = document.createElement('div');
    newPageContent.innerHTML = `
        <h2 class="selected-character">Hi, ${selectedCharacter}! You stand at a crossroads in the heart of Jumanji.</h2>
        <p>To exit from this world, you, ${selectedCharacter}, need to find the Jumanji Jewel. Choose one of the following paths:</p>
    `;

    const option1Button = createButton('option1', 'The Path of Shadows', () => optionSelected('Option 1', 'dark-background', selectedCharacter), 'option-button');
    const option2Button = createButton('option2', 'The Path of Light', () => optionSelected('Option 2', 'light-background', selectedCharacter), 'option-button');

    newPageContent.appendChild(option1Button);
    newPageContent.appendChild(option2Button);

    storyContainer.innerHTML = '';
    storyContainer.appendChild(newPageContent);
}

// Function to handle the user's choice in the adventure
function optionSelected(option, backgroundClass, characterName) {
    // Remove any previous background class
    document.body.classList.remove('dark-background');
    document.body.classList.remove('light-background');
    
    // Add or remove the specified background class to the body element
    if (backgroundClass) {
        document.body.classList.add(backgroundClass);
    }

    if (option === 'Option 1') {
        goToNextPage('Path of Shadows', characterName);
    } else if (option === 'Option 2') {
        goToNextPage('Path of Light', characterName);
    }
    // Add other cases for different options as needed
    else if (option === 'Option 9') {
        // Handle "Examine Mysterious Plant" scenario.
        touchMysteriousPlant(characterName);
    } else if (option === 'Option 10') {
        // Handle "Follow the Glowing Fireflies" scenario (Game Over).
        const newPageContent = document.createElement('div');
        newPageContent.innerHTML = `
            <h2>Game Over</h2>
            <p>You, ${characterName}, chose to follow the glowing fireflies, and you became hopelessly lost in the forest. </br>Time stands still, and you, wander endlessly. Your adventure has come to an unfortunate end.</p>
            <button id="returnButton" class="option-button" onclick="returnToHomePage()">Return to Start</button>
        `;

        storyContainer.innerHTML = '';
        storyContainer.appendChild(newPageContent);
    }
}

// Function to navigate to the next page in the adventure
function goToNextPage(pathName, characterName) {
    const newPageContent = document.createElement('div');
    newPageContent.innerHTML = `
        <h2>${pathName}</h2>
        <p>You, ${characterName}, are on the ${pathName}. Choose your next step:</p>
    `;

    if (pathName === 'Path of Shadows') {
        const option5Button = createButton('option5', 'Escape the darkness', () => escapeTheDarkness(characterName), 'option-button');
        const option6Button = createButton('option6', 'Embrace the shadows', () => embraceTheShadows(characterName), 'option-button');
        newPageContent.appendChild(option5Button);
        newPageContent.appendChild(option6Button);
    } else if (pathName === 'Path of Light') {
        const option3Button = createButton('option3', 'Find the Jumanji Jewel', () => foundJumanjiJewel(characterName), 'option-button');
        const option4Button = createButton('option4', 'Look for clues', () => lookForClues(characterName), 'option-button');
        newPageContent.appendChild(option3Button);
        newPageContent.appendChild(option4Button);
    }

    storyContainer.innerHTML = '';
    storyContainer.appendChild(newPageContent);
}

function lookForClues(characterName) {
    const newPageContent = document.createElement('div');
    newPageContent.innerHTML = `
        <h2>Looking for Clues</h2>
        <p>You, ${characterName}, decide to look for clues. Choose your next action:</p>
    `;

    const option9Button = createButton('option9', 'Examine a Mysterious Plant', () => optionSelected('Option 9', null, characterName), 'option-button');
    const option10Button = createButton('option10', 'Follow the Glowing Fireflies', () => optionSelected('Option 10', null, characterName), 'option-button');
    newPageContent.appendChild(option9Button);
    newPageContent.appendChild(option10Button);

    storyContainer.innerHTML = '';
    storyContainer.appendChild(newPageContent);
}

function foundJumanjiJewel(characterName) {
    const newPageContent = document.createElement('div');
    newPageContent.innerHTML = `
        <h2>Congratulations!</h2>
        <p>You, ${characterName}, found the Jumanji Jewel. To return home, you must say 'Jumanji' three times and click on return.</p>
        <button id="returnButton" class="option-button" onclick="returnToHomePage()">Return</button>
    `;
    storyContainer.innerHTML = '';
    storyContainer.appendChild(newPageContent);
}

function touchMysteriousPlant(characterName) {
    const newPageContent = document.createElement('div');
    newPageContent.innerHTML = `
        <h2>Touching the Mysterious Plant</h2>
        <p>As you, ${characterName}, touch the mysterious plant, you feel a surge of energy. Suddenly, the plant lashes out and drains your life force.</br> You, are killed by the plant. Your adventure ends here.</p>
        <button id="returnButton" class="option-button" onclick="returnToHomePage()">Return to Start</button>
    `;

    storyContainer.innerHTML = '';
    storyContainer.appendChild(newPageContent);
}

// Function for "Escape the Darkness" button
function escapeTheDarkness(characterName) {
    const newPageContent = document.createElement('div');
    newPageContent.innerHTML = `
        <h2>Stuck in Darkness</h2>
        <p>You, ${characterName}, chose to escape the darkness, but the deeper you go, the more lost you become. You, wander endlessly in the darkness and can't find your way back.</br> Your adventure in Jumanji has come to a dark end.</p>
        <button id="returnButton" class="option-button" onclick="returnToHomePage()">Return to Start</button>
    `;

    storyContainer.innerHTML = '';
    storyContainer.appendChild(newPageContent);
}

function embraceTheShadows(characterName) {
    const newPageContent = document.createElement('div');
    newPageContent.innerHTML = `
        <h2>Stuck in the Shadows</h2>
        <p>You've chosen to embrace the shadows. Unfortunately, you become permanently stuck in the darkness of Jumanji. Your adventure ends here.</p>
        <button id="returnButton" class="option-button" onclick="returnToHomePage()">Return to Start</button>
    `;

    storyContainer.innerHTML = '';
    storyContainer.appendChild(newPageContent);
}

// Function to increase the image size on mouseover
function bigImg(img) {
    img.style.height = "192px";
    img.style.width = "192px";
}

// Function to reset the image size to normal on mouseout
function normalImg(img) {
    img.style.height = "150px";
    img.style.width = "150px";
}

function returnToHomePage() {
    // You can implement the logic to navigate back to the first HTML page here.
    // This can be achieved by simply reloading the page.
    location.reload();
}
