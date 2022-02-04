/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const makeDefault = () => {
   body = document.querySelector('body');
   body.className='';
};
const makeDesert = () => {
   body = document.querySelector('body');
   body.className='desert';
};
const makeOcean = () => {
   body = document.querySelector('body');
   body.className='ocean';
};
const makeHighContrast = () => {
   body = document.querySelector('body');
   body.className='high-contrast';
};

document.querySelector("#default").addEventListener('click', makeDefault);
document.querySelector("#desert").addEventListener('click', makeDesert);
document.querySelector("#ocean").addEventListener('click', makeOcean);
document.querySelector("#high-contrast").addEventListener('click', makeHighContrast);

/*

<button id="default" title="Change to 'Default' theme">Default</button>
<button id="desert" title="Change to 'Desert' theme">Desert</button>
<button id="ocean" title="Change to 'Ocean' theme">Ocean</button>
<button id="high-contrast" title="Change to 'High Contrast' theme">High Contrast</button>
*/