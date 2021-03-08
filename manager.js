let PASSWORD = "password";
let PASSWORDLIST = [
  { name: "Facebook", username: "hoya.lee0@gmail.com", password: "password" },
];

document.addEventListener("DOMContentLoaded", () => {
  PASSWORDLIST.forEach((password) => {
      const passwordListItem = createPasswordElement(password)
      const listContainer = document.querySelector('.pw-list')
      listContainer.appendChild(passwordListItem)
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
    return container
};
