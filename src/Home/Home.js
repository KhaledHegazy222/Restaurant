import "./home.css";

export default function Home() {
  const mainElement = document.createElement("main");
  const sectionHeader = document.createElement("h1");
  const sectionParagraph = document.createElement("p");
  const sectionButton = document.createElement("button");

  sectionHeader.textContent = "My Restaurant";
  sectionParagraph.textContent =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni omnis enim accusantium numquam mollitia. Eaque saepe possimus cumque commodi expedita quidem consequuntur rem! Enim incidunt alias voluptates eum molestiae. Tempore.";
  sectionButton.textContent = "Show Menu";


  sectionHeader.classList.add("mainHeader");
  sectionParagraph.classList.add("mainParagraph");
  sectionButton.classList.add("mainButton");
  mainElement.classList.add("mainBody");

  mainElement.append(sectionHeader, sectionParagraph, sectionButton);
  return mainElement;
}
