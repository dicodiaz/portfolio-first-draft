const project1 = {
  name: 'Multi Post Stories1',
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
  image: 'img/project-image.svg',
  technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
  live: 'http://dicodiaz.me/google-homepage/',
  source: 'https://github.com/dicodiaz/google-homepage',
};
const project2 = {
  name: 'Multi Post Stories2',
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
  image: 'img/project-image.svg',
  technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
  live: 'http://dicodiaz.me/google-homepage/',
  source: 'https://github.com/dicodiaz/google-homepage',
};
const project3 = {
  name: 'Multi Post Stories3',
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
  image: 'img/project-image.svg',
  technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
  live: 'http://dicodiaz.me/google-homepage/',
  source: 'https://github.com/dicodiaz/google-homepage',
};
const project4 = {
  name: 'Multi Post Stories4',
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
  image: 'img/project-image.svg',
  technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
  live: 'http://dicodiaz.me/google-homepage/',
  source: 'https://github.com/dicodiaz/google-homepage',
};
const project5 = {
  name: 'Multi Post Stories5',
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
  image: 'img/project-image.svg',
  technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
  live: 'http://dicodiaz.me/google-homepage/',
  source: 'https://github.com/dicodiaz/google-homepage',
};
const project6 = {
  name: 'Multi Post Stories6',
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
  image: 'img/project-image.svg',
  technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
  live: 'http://dicodiaz.me/google-homepage/',
  source: 'https://github.com/dicodiaz/google-homepage',
};
const project7 = {
  name: 'Multi Post Stories7',
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
  image: 'img/project-image.svg',
  technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
  live: 'http://dicodiaz.me/google-homepage/',
  source: 'https://github.com/dicodiaz/google-homepage',
};

const projects = [project1, project2, project3, project4, project5, project6, project7];
const popup = document.querySelector('.popup');
const projectButtons = document.querySelectorAll('#project-btn1,  .project-button');
const popupTitle = document.querySelector('.popup-title');
const popupImg = document.querySelector('.popup-img');
const popupDesc = document.querySelector('.popup-desc');
const popupTech = document.querySelector('.popup-tech');
const popupLive = document.querySelector('.btn-live');
const popupSource = document.querySelector('.btn-source');

projectButtons.forEach((item, i) => {
  item.addEventListener('click', () => {
    popup.classList.remove('mt--110');
    popupTitle.innerHTML = projects[i].name;
    projects[i].technologies.forEach((tech) => {
      const li = document.createElement('li');
      li.className = 'popup-tech-item';
      li.innerHTML = tech;
      popupTech.appendChild(li);
    });
    popupImg.src = projects[i].image;
    popupDesc.innerHTML = projects[i].description;
    popupLive.addEventListener('click', () => {
      window.location.href = projects[i].live;
    });
    popupSource.addEventListener('click', () => {
      window.location.href = projects[i].source;
    });
    document.body.style.overflow = 'hidden';
  });
});

const cancelProjectButton = document.getElementById('popup-cancel-button');

cancelProjectButton.addEventListener('click', () => {
  popup.classList.add('mt--110');
  document.querySelectorAll('.popup-tech-item').forEach((item) => {
    popupTech.removeChild(item);
  });
  document.body.style.overflow = 'auto';
});
