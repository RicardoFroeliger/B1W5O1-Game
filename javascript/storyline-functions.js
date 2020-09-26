let speed = 0.5; // 1 = default,  0.5 = quick read,  0.01 = skip story text

/* Triggers When Start Button Is Clicked */
function choosePath() {
    /* Clears Color Interval & Deletes Start Button */
    clearInterval(colorSwitch);
    deleteElement('startButton');
    
    /* Edits H1 */
    let startH1 = document.getElementById('strokeText'); 
    startH1.id = 'chooseElement';
    startH1.innerHTML = 'Choose an element to start your adventure with';

    /* Creates Warning H1 */
    createElement('h1', 'chooseElementWarn', 'center');
    document.getElementById('chooseElementWarn')
        .appendChild(document.createTextNode('NOTE: Each element results in a different story / ending.'));

    /* Creates Element Buttons */
    createElementButtons('water');
    createElementButtons('earth');
    createElementButtons('fire');
    createElementButtons('air');
};



/* Triggers When Element Button Is Clicked */
function startGame(type) {
    /* Deletes H1, Warning H1 & Typetext */
    deleteElement('chooseElement');
    deleteElement('chooseElementWarn');
    deleteElement(`${type}Text`);

    /* Deletes Element Buttons */   
    deleteElementButtons('water');
    deleteElementButtons('earth');
    deleteElementButtons('fire');
    deleteElementButtons('air');

    /* Starts Storyline */
    setTimeout(() => {
        startStoryline(type);
    }, speed * 1000);
};



/* Triggers when Element Button Is Clicked */
function startStoryline(type) {
    /* Blackscreens */
    document.getElementById('background').style.background = 'black';
    setTimeout(() => {

        /* Creates Intro H1 */
        createElement('h1', 'intro', 'center, intro');
        let intro = document.getElementById('intro');
        intro.style.color = 'white'; intro.style.top = '40%';
        let introA = 'a';
        if(type === 'air' || type === 'earth') introA = 'an';
        intro.appendChild(document.createTextNode(`You wake up as ${introA} ${type} bender..`)); 
        
        setTimeout(() => {

            /* Creates Intro Description (H3) */
            createElement('h3', 'introDesc', 'center');
            let introDesc = document.getElementById('introDesc');
            introDesc.style.color = 'white'; introDesc.style.top = '55%';

            /* Writing Functions */
            let createText = (content) => { introDesc.appendChild(document.createTextNode(content)); };
            let createLine = () => { introDesc.appendChild(document.createElement('br')); };

            /* Plays Intro Description */
            let intro = document.getElementById('intro');
            if(path[0] === 'water') {
                intro.innerHTML = 'Water is the element of change.';
                createText('The people of the Water Tribe are capable of adapting to many things. '+
                'They have a deep sense of community and love that holds them together through anything.');

            } else if(path[0] === 'earth') {
                intro.innerHTML = 'Earth is the element of substance.';
                createText('The people of the Earth Kingdom are diverse and strong.'); createLine();
                createText('They are persistent and enduring.');

            } else if(path[0] === 'fire') {
                intro.innerHTML = 'Fire is the element of power.';
                createText('The people of the Fire Nation have the desire and will.'); createLine();
                createText('The energy and drive to achieve what they want.');

            } else if(path[0] === 'air') {
                intro.innerHTML = 'Air is the element of freedom.';
                createText('The Air Nomads detached themselves from'); createLine();
                createText('worldly concerns, and found peace and freedom.')
            };

            /* Starts Path */
            setTimeout(() => {
                deleteElement('intro');
                deleteElement('introDesc');
                setTimeout(() => {
                    buttonClicked('', true);
                }, speed * 3000);
            }, speed * 10000);
        }, speed * 5000);
    }, speed * 2000);
};



/* Triggers When A Choice Button Is Chicked */
function buttonClicked(pathPush, skipPush) {
    if(!skipPush) path.push(pathPush);
    if(path[0] === 'water') waterPath();
    // else if(path[0] === 'earth') earthPath();
    // else if(path[0] === 'fire') firePath();
    // else if(path[0] === 'air') airPath();
    console.log(path);
};



/* Triggers When Called Inside Path Function */
function gameover(id) {
    if(id) deleteElement(id);
    createElement('h1', 'strokeText', 'center');
    let gameover = document.getElementById('strokeText');
    gameover.style.color = 'white';
    gameover.style.top = '50%';
    gameover.appendChild(document.createTextNode('GAME OVER')); 
    setBackground('url(images/zuko.png)');
};



/* Triggers When Called Inside Path Function */
function gamewon(id) {
    if(id) deleteElement(id);
    createElement('h1', 'strokeText', 'center');
    let gamewon = document.getElementById('strokeText');
    gamewon.appendChild(document.createTextNode('Congratulations you won the water path!')); 
    setBackground('url(images/avatarState.png)')
};