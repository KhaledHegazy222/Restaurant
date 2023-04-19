import "./navbar.css";

export default function Navbar(navbarLinksList, currentPage, updatePageFunc) {
  const navElement = document.createElement("nav");
  const ulList = document.createElement("ul");
  navbarLinksList.forEach((navbarLink, index) => {
    const liElement = document.createElement("li");
    liElement.textContent = navbarLink;
    liElement.classList.add("navbarListElement");
    if (currentPage === index) liElement.classList.add("active");
    liElement.onclick = () => {
      updatePageFunc(index);
    };
    ulList.appendChild(liElement);
  });
  ulList.classList.add("navbarList");
  navElement.appendChild(ulList);

  navElement.classList.add("navbar");
  return navElement;
}
