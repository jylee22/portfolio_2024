import location from '../data/location.js';

/* header */

// menu
const navEl = document.querySelector('.nav ul');
const footerNavEl = document.querySelector('footer ul');
location.forEach(el => {
  // header menu
  const liEl = document.createElement('li');
  liEl.classList.add('nav_item');
  liEl.innerHTML = /* html */ `
    <a href="${el.url}" class="nav_link">${el.name}</a>
    `
  // navEl.appendChild(liEl);

  // foot menu
  const footLiEl = document.createElement('li');
  footLiEl.classList.add('foot_item');

  footLiEl.innerHTML = /* html */ `
    <a href="${el.url}" class="nav_link">${el.name}</a>
  `
  footerNavEl.appendChild(footLiEl);
});

// header menu
const menuEl = document.querySelector('.nav');
const menuBtnEl = document.querySelector('.nav .btn_menu');
const bodyEl = document.querySelector('body');
menuBtnEl.addEventListener('click',()=>{
  if(menuEl.classList.contains('on')){
    menuEl.classList.remove('on');
    bodyEl.style.overflowY = 'auto';
  } else{
    menuEl.classList.add('on');
    bodyEl.style.overflowY = 'hidden';
  }
});


menuEl.addEventListener('scroll', ()=>{
  bodyEl.style.overflow = 'hidden';
});


// 토글버튼
const toggleEl = document.querySelectorAll('.toggle_list_group .toggle_item');
toggleEl.forEach((toggle)=>{
  toggle.addEventListener('click', ()=>{
    if(toggle.classList.contains('active')){
      toggle.classList.remove('active');
    } else{
      toggle.classList.add('active');
    }
  });
});

/* footer */
const footerInfEl = document.querySelector('footer .container address');
const addressEl = document.createElement('div');
addressEl.classList.add('footer_inf');

addressEl.innerHTML = /* html */ `
  <div class="inf">
    <span>이지윤(Ji Yun Lee)</span>
    <span>1996년 04월 08일</span>
    <span>부산광역시 해운대구</span>
  </div>
  <div class="inf">
    <span>웹 디자이너 & 웹 퍼블리셔</span>
    <span>총 경력 4년 4개월</span>
  </div>
  <div class="inf">
    <span>jylee22.96@gmail.com</span>
    <span>jylee22_48@naver.com</span>
    <p>으로 이메일 주시면 2~3일내로 답장 보내도록 하겠습니다.</p>
  </div>
`
footerInfEl.appendChild(addressEl);

/* footer > top btn */
const footerEl = document.querySelector('footer');
const topBtnEl = document.createElement('div');
topBtnEl.classList.add('btn_top');

topBtnEl.innerHTML = /* html */`
  <button class="btn btn_primary" id="topButton">TOP</button>
`
footerEl.append(topBtnEl);

window.addEventListener('scroll', ()=>{
  scrollToTopBtn();
  topBtnEl.addEventListener('click', ()=>{ 
    scrollToTop();
  });
});

function scrollToTopBtn(){
  if (window.scrollY > 300) {
    topBtnEl.classList.add('show');
  } else {
    topBtnEl.classList.remove('show');
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

/* footer > 년도 표시 */
const thisYearEl = document.querySelector('span.year');
thisYearEl.textContent = new Date().getFullYear();
