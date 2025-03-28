const team = [
  {
    name: 'Hlengiwe Dlamini',
    photo: 'team-photo.jpg',
    role: 'Executive Assistant',
    bio: 'Leads with passion and clarity. Loves organizing chaos.'
  },
  {
    name: 'Caren Mazibuko',
    photo: 'https://via.placeholder.com/150',
    role: 'Digital Marketer',
    bio: 'Bringing designs to life with Vue & love.'
  },
  {
    name: 'Lindokuhle',
    photo: 'https://via.placeholder.com/150',
    role: 'Executive Assistant',
    bio: 'Bringing designs to life with Vue & love.'
  },
  {
    name: 'Nolwazi Dladla',
    photo: 'https://via.placeholder.com/150',
    role: 'Frontend Dev',
    bio: 'Bringing designs to life with Vue & love.'
  },
  {
    name: 'Paballo Mohapi',
    photo: 'https://via.placeholder.com/150',
    role: 'Executive Assistant',
    bio: 'Bringing designs to life with Vue & love.'
  },
  {
    name: 'Mthobisi Ntanzi',
    photo: 'https://via.placeholder.com/150',
    role: 'Web Developer',
    bio: 'Trust me, I know "Google-Fu"!'
  }
];

const teamContainer = document.getElementById('team-container');

team.forEach(member => {
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('col-md-4', 'mb-4');

  const flipCard = document.createElement('div');
  flipCard.classList.add('flip-card');

  // The inner container for flipping
  const flipCardInner = document.createElement('div');
  flipCardInner.classList.add('flip-card-inner');

  // Front side of the card
  const flipCardFront = document.createElement('div');
  flipCardFront.classList.add('flip-card-front');
  flipCardFront.innerHTML = `
    <img src="${member.photo}" alt="${member.name}" class="card-img-top mb-3">
  `;

  // Back side of the card
  const flipCardBack = document.createElement('div');
  flipCardBack.classList.add('flip-card-back', 'd-flex', 'flex-column', 'justify-content-center', 'align-items-center', 'text-center', 'gap-2');
  flipCardBack.innerHTML = `
    <h1>${member.name}</h1>
    <p class='fst-italic'>${member.role}</p>
    <p>${member.bio}</p>
  `;

  // Assemble the card
  flipCardInner.appendChild(flipCardFront);
  flipCardInner.appendChild(flipCardBack);
  flipCard.appendChild(flipCardInner);

  cardContainer.appendChild(flipCard);
  teamContainer.appendChild(cardContainer);
});
