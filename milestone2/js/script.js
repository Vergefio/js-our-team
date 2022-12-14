// **MILESTONE 2:**
// Stampare le stesse informazioni su DOM sotto forma di stringhe

const row = document.querySelector('.row')

const team = [
  {
    name: 'Wayne Barnet',
    role: 'Founder & CEO',
    img: "img/wayne-barnett-founder-ceo.jpg"
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    img: "img/angela-caroll-chief-editor.jpg"
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    img: "img/walter-gordon-office-manager.jpg"
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    img: "img/angela-lopez-social-media-manager.jpg"
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    img: "img/scott-estrada-developer.jpg"

  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    img: "img/barbara-ramos-graphic-designer.jpg"
  },
];

for (let member of team) {
  let card = `
  <div class="col-4">
  <img src="${member.img}" alt="">
  </div>
  `
  row.innerHTML += card;
  console.log(member);
}