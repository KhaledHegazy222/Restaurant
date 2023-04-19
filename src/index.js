import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import "./App.css";

function Restaurant() {
  const pageContent = document.getElementById("content");
  let currentPage = 0;
  function updatePage(newPage) {
    currentPage = newPage;
    render();
  }

  function render() {
    pageContent.innerHTML = "";
    const PageNavBar = Navbar(
      ["Home", "About", "Contact"],
      currentPage,
      updatePage
    );
    let PageMain;
    switch (currentPage) {
      case 0:
        PageMain = Home();
        break;
      case 1:
        PageMain = About();
        break;
      case 2:
        PageMain = Contact();
        break;

      default:
        break;
    }

    const PageFooter = Footer();

    pageContent.append(PageNavBar, PageMain, PageFooter);
  }

  render();
}

Restaurant();
