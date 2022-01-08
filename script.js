const getAllImg = document.querySelectorAll('grid-containe, grid, img');
const largeBox = document.getElementById('large-box');
const crossBtn = document.getElementById('crossBtn');
const largeImg = document.getElementById('large-img');

getAllImg.forEach((el) => {
    el.setAttribute('onclick', 'setImg(this.src)');
})


function setImg(pic) {
    largeBox.style.display = 'flex';
    largeImg.src = pic;
}

crossBtn.addEventListener('click', () => {
    largeBox.style.display = 'none';
});