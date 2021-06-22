const profilePic = document.getElementById('profilePic');
const profileGif = document.getElementById('profileGif');

const topNavLeft = document.querySelector('.topnav-left');
const topNavRight = document.querySelector('.topnav-right');
const picture = document.querySelector('.picture');
const static = document.querySelector('.static');
const active = document.querySelector('.active');
const descriptionText = document.querySelector('.descriptionText');
const content = document.querySelector('.content');
const content2 = document.querySelector('.content2');

new fullpage('#fullpage', {
  anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
  menu: '#menu',

  //options here
  autoScrolling: true,
  scrollHorizontally: false,
  navigation: true,

  //Scrolling
  scrollingSpeed: 500,
  dragAndMove: false,
  normalScrollElements: '#header, #footer',

  //Design
  controlArrows: true,
  verticalCentered: true,

  //Accessibility
  keyboardScrolling: true,
  animateAnchor: true,
  recordHistory: true,

  afterResponsive: function (isResponsive) {
    dragAndMove: fingersonly;
    scrollBar: true;
  },
});

//methods
fullpage_api.setAllowScrolling(true);

document.addEventListener('mousedown', function () {
  profilePic.style.opacity = 0;
});
document.addEventListener('mouseup', function () {
  profilePic.style.opacity = 100;
});

gsap.fromTo(static, 1, { opacity: 0.1 }, { opacity: 0.95, delay: 1 });
gsap.fromTo(
  descriptionText,
  1,
  { rotation: 0, x: 0, y: 0 },
  { rotation: 30, x: 100, y: 50, duration: 0.5, ease: 'bounce' }
);
gsap.to(descriptionText, 1.5, {
  rotation: 30,
  x: 100,
  y: 50,
  duration: 0.5,
  ease: 'bounce',
});
gsap.to(descriptionText, 2, {
  rotation: 0,
  duration: 1.5,
  delay: 0.6,
  ease: 'bounce',
});
//gsap.to(descriptionText, {rotation: 0, x: 100, y:20, duration: 2.5, ease: CustomEase.create("custom", "M0,0 C0.266,0.412 0.199,1.31 0.258,1.144 0.644,0.038 0.78,1 1,1 ")});
//gsap.fromTo(descriptionText, 1.2, {opacity: 0}, {opacity: 1, duration: 3});
//gsap.to(descriptionText, 2.5, {rotation: 27, rotation: 0, duration: 1, ease: "elastic"});
/*
const leftElement4 = document.getElementById('leftElement4');
const middleElement4 = document.getElementById('middleElement4');
const rightElement4 = document.getElementById('rightElement4');

const logicColumns = function () {
  if (leftElement4.onclick) {
    leftElement4.style.width = '100vh';
    middleElement4.style.width = '30vh';
    rightElement4.style.width = '30vh';
  } else if (middleElement4.onclick) {
    leftElement4.style.width = '30vh';
    middleElement4.style.width = '100vh';
    rightElement4.style.width = '30vh';
  } else if (rightElement4.onclick) {
    leftElement4.style.width = '30vh';
    middleElement4.style.width = '30vh';
    rightElement4.style.width = '100vh';
  }
};*/
