const makeBigger = () => {
   alert('make bigger!');
   p = document.querySelector('p');
   h1 = document.querySelector('h1');
   
   p_curr_size = parseFloat(window.getComputedStyle(p, null).getPropertyValue('font-size'));
   h1_curr_size = parseFloat(window.getComputedStyle(h1, null).getPropertyValue('font-size'));
   
   p.style.fontSize = (p_curr_size + 5) + 'px';
   h1.style.fontSize = (h1_curr_size + 5) + 'px';
};

const makeSmaller = () => {
   alert('make smaller!');
   p = document.querySelector('p');
   h1 = document.querySelector('h1');
   
   p_curr_size = parseFloat(window.getComputedStyle(p, null).getPropertyValue('font-size'));
   h1_curr_size = parseFloat(window.getComputedStyle(h1, null).getPropertyValue('font-size'));
   
   p.style.fontSize = (p_curr_size - 5) + 'px';
   h1.style.fontSize = (h1_curr_size - 5) + 'px';
};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

