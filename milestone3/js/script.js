// **MILESTONE 3:**
// Stampare delle card formattate contenete immagini e testo (La grafica fornita è solo un esempio ma sentitevi liberi di “graficare” come preferite)

const row = document.querySelector('.row')
const rolePerson = document.getElementById('role')
const name = document.getElementById('name')

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
  <div class="col-4 d-flex justify-content-center text-center">
    <div class="card" style="width: 18rem;">
      <img src="${member.img}" alt="">
      <div class="card-body">
        <h4 id="name">${member.name}</h4>
        <h5 id="role">${member.role}</h5>
      </div>
    </div>
  </div>
  `
  row.innerHTML += card;
  console.log(member);
}