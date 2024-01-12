import historyData from '../data/historyData.js';

const historyList = document.querySelector('.history_list_group');
historyData.forEach((data) => {
  const historyEl = document.createElement('li');
  historyEl.classList.add('history_item');

  let contEl = '';
  data.history.forEach((cont)=>{
    contEl += /* html */ `
    <li class="history_sub_item" >
      <span>${cont.month}</span>
      <span>${cont.content}</span>
    </li>
    `
  });

  historyEl.innerHTML = /* html */ `
  <ul class="history_sub" data-aos="fade-up" data-aos-duration="2000">
    ${contEl}
  </ul>
  <span data-aos="fade-up" data-aos-duration="2000">${data.year}</span>
`

  historyList.appendChild(historyEl);
});

// 애니메이션 동작
AOS.init();