const popup = document.querySelector('.popup');
const projectButtons = document.querySelectorAll('.project-button');

const project1 = {
  name: 'Multi Post Stories',
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  image: 'img/project-image.svg',
  technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
  live: 'http://dicodiaz.me/google-homepage/',
  source: 'https://github.com/dicodiaz/google-homepage',
};
const project2 = {
  name: 'Multi Post Stories',
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  image: 'img/project-image.svg',
  technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
  live: 'http://dicodiaz.me/google-homepage/',
  source: 'https://github.com/dicodiaz/google-homepage',
};
const project3 = {
  name: 'sakdjfhajksdf',
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  image: 'img/project-image.svg',
  technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
  live: 'http://dicodiaz.me/google-homepage/',
  source: 'https://github.com/dicodiaz/google-homepage',
};
const project4 = {
  name: 'Multi Post Stories',
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  image: 'img/project-image.svg',
  technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
  live: 'http://dicodiaz.me/google-homepage/',
  source: 'https://github.com/dicodiaz/google-homepage',
};
const project5 = {
  name: 'Multi Post Stories',
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  image: 'img/project-image.svg',
  technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
  live: 'http://dicodiaz.me/google-homepage/',
  source: 'https://github.com/dicodiaz/google-homepage',
};
const project6 = {
  name: 'Multi Post Stories',
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  image: 'img/project-image.svg',
  technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
  live: 'http://dicodiaz.me/google-homepage/',
  source: 'https://github.com/dicodiaz/google-homepage',
};

const projects = [project1, project2, project3, project4, project5, project6];

const popupTitle = document.querySelector('.popup-title');
const popupImg = document.querySelector('.popup-img');
const popupDesc = document.querySelector('.popup-desc');
const popupTech = document.querySelector('.popup-tech');
const popupLive = document.querySelector('.btn-live');
const popupSource = document.querySelector('.btn-source');

projectButtons.forEach((item, i) => {
  item.addEventListener('click', () => {
    popup.classList.remove('d-none');
    popupTitle.innerHTML = projects[i - 1].name;
    projects[i - 1].technologies.forEach((tech) => {
      const li = document.createElement('li');
      li.className = 'popup-tech-item';
      li.innerHTML = tech;
      popupTech.appendChild(li);
    });
    popupImg.src = projects[i - 1].image;
    popupDesc.innerHTML = projects[i - 1].description;
    popupLive.addEventListener('click', () => {
      window.location.href = projects[i - 1].live;
    });
    popupSource.addEventListener('click', () => {
      window.location.href = projects[i - 1].source;
    });  
  });
});

const cancelProjectButton = document.getElementById('popup-cancel-button');

cancelProjectButton.addEventListener('click', () => {
  popup.classList.add('d-none');
  document.querySelectorAll('.popup-tech-item').forEach((item) => {
    popupTech.removeChild(item);
  });
});




