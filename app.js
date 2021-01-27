
function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();
	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}

const avatar = document.querySelector('#avatar');
const coin = document.querySelector('#coin');


//what needs to be running while we open the browser - initialize
const init = () => {
    
    moveCoin();
    window.addEventListener('keyup', function(e){
        if(e.key === 'ArrowDown' || e.key === 'Down') {
            moveVertical(avatar, 50);
        } else if(e.key === 'ArrowUp' || e.key === 'Up') {
            moveVertical(avatar, -50);
        } else if(e.key === 'ArrowLeft' || e.key === 'Left') {
            moveHorizontal(avatar, -50);
        } else if(e.key === 'ArrowRight' || e.key === 'Right') {
            moveHorizontal(avatar, 50);
        }
        if (isTouching(avatar, coin)) moveCoin(); 
    });
}

const moveVertical = (element, amount) => {
    const currTop = exactPosition(element.style.top);  
    element.style.top = `${currTop + amount}px`; 
}

const moveHorizontal = (element, amount) => {
    const currLeft = exactPosition(element.style.left);  
    element.style.left = `${currLeft + amount}px`; 
}

const exactPosition = (position) => {
    if (!position) return 100;
    return parseInt(position.slice(0, -2)) // if we have a position in px 35455px => -2 will remove "px" so it returns just number
}

const moveCoin = () => {
    const x = Math.floor(Math.random() * window.innerWidth)
    const y = Math.floor(Math.random() * window.innerHeight)

    coin.style.top = `${y}px`;
    coin.style.left = `${x}px`;
}

init();