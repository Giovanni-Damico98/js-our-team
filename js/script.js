console.log("JS OK");
const teamMembers = [
  {
    id: 1,
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "wayne-barnett-founder-ceo.jpg",
  },
  {
    id: 2,
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "angela-caroll-chief-editor.jpg",
  },
  {
    id: 3,
    name: "Walter Gordon",
    role: "Office Manager",
    image: "walter-gordon-office-manager.jpg",
  },
  {
    id: 4,
    name: "Angela Lopez",
    role: "Social Media Manager",
    image: "angela-lopez-social-media-manager.jpg",
  },
  {
    id: 5,
    name: "Scott Estrada",
    role: "Developer",
    image: "scott-estrada-developer.jpg",
  },
  {
    id: 6,
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image: "barbara-ramos-graphic-designer.jpg ",
  },
];
// Raccolta elementi
const teamContainer = document.querySelector(".team-container");
// Elaborazione
let cards = "";

for (const member of teamMembers) {
  cards += `<div class="team-card">
            <div class="card-img">
              <img src="img/${member.image}" alt=${member.name}>
            </div>
            <div class="card-text text-center">
              <h3>${member.name}</h3>
              <p>${member.role}</p>
            </div>
          </div>`;
}
teamContainer.innerHTML = cards;

// const list = document.querySelector("ul");

// let items = "";

// for (let member of teamMembers) {
//   console.log(`${member.name}, ${member.role}, ${member.image}`);
//   items += `<li>
//               <ul class="list-unstyled">
//                 <li>${member.name}</li>
//                 <li>${member.role}</li>
//                 <li><img src="img/${member.image}" alt=${member.name}></li>
//               </ul>
//             </li>`;
// }

// list.innerHTML = items;
