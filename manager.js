let PASSWORD = "password";
let PASSWORDLIST = [
  {
    name: "Facebook",
    username: "hoya.lee0@gmail.com",
    password: "password",
    createdAt: new Date("February 17, 2021 03:24:00"),
    lastModified: new Date("March 17, 2021 03:24:00"),
  },
  {
    name: "Instagram",
    username: "hxaylee",
    password: "password",
    createdAt: new Date("February 17, 2021 03:24:00"),
    lastModified: new Date("March 17, 2021 03:24:00"),
  },
];

document.addEventListener("DOMContentLoaded", () => {
  PASSWORDLIST.forEach((password, idx) => {
    const passwordListItem = createPasswordElement(password);
    passwordListItem.addEventListener('click', () => handlePasswordElementClick(password))
    const listContainer = document.querySelector(".pw-list");
    listContainer.appendChild(passwordListItem);
  });
});

const createPasswordElement = ({
  name,
  username,
  password,
  createdAt,
  lastModified,
}) => {
  const container = document.createElement("div");
  container.setAttribute("class", "pw-list-item");
  container.innerHTML = `<div class=pw-list-item-title>${name}</div>`;
  return container;
};

const handlePasswordElementClick = ({
  name,
  username,
  password,
  createdAt,
  lastModified,
}) => {
  const detailContainer = document.querySelector(".pw-detail");
  detailContainer.innerHTML = `
    <p class='pw-detail-title'>${name}</p>
    <div class='pw-detail-details'>
      <div class='pw-detail-detail pw-username'>${username}</div>
      <div class='pw-detail-detail pw-password'>
        ${'*'.repeat(password.length)}
        <div class='pw-detail-pw-btn'>Show</div> 
      </div>
    </div>
    <div class='pw-detail-times'>
      <p>Created at: ${((createdAt.getMonth() > 8) ? (createdAt.getMonth() + 1) : ('0' + (createdAt.getMonth() + 1))) + '/' + ((createdAt.getDate() > 9) ? createdAt.getDate() : ('0' + createdAt.getDate())) + '/' + createdAt.getFullYear()}</p>
      <p>Last modified: ${((lastModified.getMonth() > 8) ? (lastModified.getMonth() + 1) : ('0' + (lastModified.getMonth() + 1))) + '/' + ((lastModified.getDate() > 9) ? lastModified.getDate() : ('0' + lastModified.getDate())) + '/' + lastModified.getFullYear()}</p>
    </div>
  `;
  handlePasswordDisplyButtonClick(password)
  
};

const handlePasswordDisplyButtonClick = (password) => {
  const showBtn = document.querySelector('.pw-detail-pw-btn')
  showBtn.addEventListener('click', () => {
    showBtn.parentElement.innerText = password
  })
}