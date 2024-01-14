import companyProjectData from '../data/companyProjectData.js';
import projectData from '../data/projectData.js';

/* Project */
const projectListEl = document.querySelector('.company_project');
companyProjectData.forEach(data => {
  const projectEl = document.createElement('li');
  projectEl.classList.add('pj_item');

  projectEl.innerHTML = /* html */ `
  <div class="text_box_group">
    <div class="text_group">
      <b>${data.pjTeams}</b>
      <span>${data.team}</span>
    </div>
    <div class="text_group">
      <b>${data.pjName}</b>
      <span>${data.name}</span>
    </div>
    <div class="text_group">
      <b>${data.pjDate}</b>
      <span>${data.date}</span>
    </div>
    <div class="text_group">
      <b>${data.pjContent}</b>
      <span>${data.content}</span>
    </div>
    <div class="text_group">
      <b>${data.pjSkill}</b>
      <span>${data.skill}</span>
    </div>
    <div class="text_group">
      <b>${data.pjContribute}</b>
      <span>${data.contribute}</span>
    </div>
    <div class="text_group">
      <b>${data.pjUrl}</b>
      ${data.url}
    </div>
  </div>
  `

  projectEl.setAttribute("data-aos", "fade-up");
  projectEl.setAttribute("data-aos-anchor-placement", "top-bottom");
  projectEl.setAttribute("data-aos-duration", "2000");
  projectListEl.appendChild(projectEl);
});


// 갯수 표시
const companyCountTextEl = document.querySelector('.project_wr .container > .content_header');
const companyCountEl = document.createElement('p');
companyCountEl.classList.add('count_text');
companyCountEl.innerHTML = /* html */ `
  <b>${companyProjectData.length}</b> 개
`
companyCountTextEl.appendChild(companyCountEl);


const FreeprojectListEl = document.querySelector('.free_project');
projectData.forEach(data => {
  const freeEl = document.createElement('ul');
  freeEl.classList.add('project');

  // acamemy + free
  let contEl = '';
  data.project.forEach(cont =>{
    contEl += /* html */ `
    <li class="pj_item" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000">
      <a href="${cont.url}">
        <div class="img_group">
          <img src="${cont.pjImage}" alt="${cont.name}" />
        </div>
        <div class="text_group">
          <span>${cont.name}</span>
        </div>
      </a>
    </li>
    `
  });

  freeEl.innerHTML = /* html */ `
    <h3>${data.name}</h3>
    ${contEl}
  `

FreeprojectListEl.appendChild(freeEl);
});

// 애니메이션 동작
AOS.init();