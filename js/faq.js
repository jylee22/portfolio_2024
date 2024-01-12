import faqData from '../data/faqData.js';

/* FAQ */
const faqListEl = document.querySelector('.faq .toggle_list_group');
faqData.forEach((faq) => {
  const faqEl = document.createElement('li');
  faqEl.classList.add('toggle_item');

  faqEl.innerHTML = /* html */ `
    <div class="content_header">
      <b>${faq.q}</b>
      <span>${faq.question}</span>
      <span class="dropdown"></span>
    </div>
    <div class="content_body">
      <b>${faq.a}</b>
      <span>${faq.answer}</span>
    </div>
  `
  faqListEl.append(faqEl);
});

// 갯수 표시
const countTextEl = document.querySelector('.faq_wr .container > .content_header');
const countEl = document.createElement('p');
countEl.classList.add('count_text');
countEl.innerHTML = /* html */ `
  <b>${faqData.length}</b> 개
`
countTextEl.appendChild(countEl);


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
