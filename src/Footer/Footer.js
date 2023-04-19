import './footer.css'

export default function Footer() {
  const footerElement = document.createElement("footer");
  const footerParagraph = document.createElement("p");
  footerParagraph.textContent = "Created with ♥ by Khaled Hegazy";
  footerParagraph.classList.add("footerParagraph")
  footerElement.appendChild(footerParagraph);
  footerElement.classList.add("footerBody")
  return footerElement;
}
