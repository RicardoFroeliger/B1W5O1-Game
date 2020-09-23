let path = [], colorSwitch;
String.prototype.capitalize = function() { 
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase(); 
};

/* Toggles Color Cycle Of Start Button */
function toggleColor(bool) {
    let colorIndex = 0;
    let colorArray = ['#81D3E8-#173057', '#6E6D2D-#292712', '#D46628-#762815', '#FAD672-#F49547']; 
    if(bool === true) {
        colorSwitch = setInterval(() => {
            let splitColors = colorArray[colorIndex].split('-');
            document.getElementById('startButton').style.background = `linear-gradient(to bottom, ${splitColors[0]}, ${splitColors[1]}`;
            colorIndex < colorArray.length - 1 ? colorIndex++ : colorIndex = 0;
        }, 500);
    } else {
        clearInterval(colorSwitch);
        document.getElementById('startButton').style.background = 'linear-gradient(to right, #66ff33, #00ff77)';
    };
};

/* Creates Element Buttons */
function createElementButtons(type) {
    let element = document.createElement('input');  
    element.type = 'image'; element.src = `images/${type}.png`;
    element.id = `${type}Button`; 

    element.classList.add('elementButton', `${type}`);
    element.onclick = function() { path.push(type); startGame(); }; 
    document.body.appendChild(element);
    // let typeText = document.createElement('H1'); 
    // typeText.id = `${type}Text`;
    // typeText.classList.add('elementText', `${type}Text`);
    // typeText.appendChild(document.createTextNode(type.capitalize())); 
    // document.body.appendChild(typeText);
};

/* Deletes Element Buttons */
function deleteElementButtons(type) {
    let element = document.getElementById(`${type}Button`);
    element.parentNode.removeChild(element);
};


/********** Story Line Functions **********/


/* Triggers When Start Button Is Clicked */
function choosePath() {
    /* Clears Color Toggler Interval */
    clearInterval(colorSwitch);

    /* Deletes Start Button */
    let startButton = document.getElementById('startButton');
    startButton.parentNode.removeChild(startButton);
    
    /* Edits H1 */
    let startH1 = document.getElementById('startH1'); startH1.id = 'chooseElement';
    startH1.innerHTML = 'Choose an element to start your adventure with';

    /* Creates Warning H1 */
    let warnH1 = document.createElement('H1'); 
    warnH1.appendChild(document.createTextNode('NOTE: Each element results in a different story / ending.'));
    warnH1.classList.add('center')
    warnH1.id = 'chooseElementWarn'; document.body.appendChild(warnH1);

    /* Creates Element Buttons */
    createElementButtons('water');
    createElementButtons('earth');
    createElementButtons('fire');
    createElementButtons('air');
};

/* Triggers When Element Button Is Clicked */
function startGame() {
    /* Deletes H1 */
    let startH1 = document.getElementById('chooseElement');
    startH1.parentNode.removeChild(startH1);

    /* Deletes Warning H1 */
    let warnH1 = document.getElementById('chooseElementWarn');
    warnH1.parentNode.removeChild(warnH1);

    /* Deletes Element Buttons */   
    deleteElementButtons('water');
    deleteElementButtons('earth');
    deleteElementButtons('fire');
    deleteElementButtons('air');
};




// while(true) {

//     if(path[0] === 'water') {
//     } else if(path[0] === 'earth') {

//     } else if(path[0] === 'fire') {

//     } else if(path[0] === 'air') 

//     break;
// }