//COLLAPSE TABS TODO:fix up double click bug, 
let coll = document.getElementsByClassName("collapsible");
for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

//TABS

let tabButtons = document.querySelectorAll(".headMenu button");
let panels = document.querySelectorAll(".tabs")

function showPanel(panelIndex)
{
    panels.forEach(function(node)
    {
        node.style.display="none";
    });
    panels[panelIndex].style.display="block";

}

showPanel(0);