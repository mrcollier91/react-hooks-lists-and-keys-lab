import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linksList = links.map((linksObj, index) => {
    console.log(linksObj)
    return <a href={'#' + linksObj} key= {index}>{linksObj}</a>
  })

  return <nav>{linksList}</nav>;
}

export default NavBar;
