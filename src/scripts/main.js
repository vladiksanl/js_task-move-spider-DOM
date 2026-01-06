'use strict';

document.addEventListener('click', (e) => {
  if (e.target.matches('.wall')) {
    const spider = document.querySelector('.spider');
    const wall = document.querySelector('.wall');
    const halfOfSpiderHeight = spider.clientHeight / 2;
    const halfOfSpiderWidth = spider.clientWidth / 2;
    const wallHeight = wall.clientHeight - spider.clientHeight;
    const wallWidth = wall.clientWidth - spider.clientWidth;
    const targetX = e.offsetX - halfOfSpiderWidth;
    const targetY = e.offsetY - halfOfSpiderHeight;

    const clickY =
      targetY < 0 ? 0 : targetY > wallHeight ? wallHeight : targetY;

    const clickX = targetX < 0 ? 0 : targetX > wallWidth ? wallWidth : targetX;

    spider.style.left = clickX + 'px';
    spider.style.top = clickY + 'px';
  }
});
