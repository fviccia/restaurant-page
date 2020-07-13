import { homePage } from "./homePage";
import { menu } from "./menu";
import { contact } from "./contact";

homePage();

document.getElementById("tab1").onclick = function () {
  document.getElementById("content").innerHTML = "";
  homePage();
};
document.getElementById("tab2").onclick = function () {
  document.getElementById("content").innerHTML = "";
  menu();
};
document.getElementById("tab3").onclick = function () {
  document.getElementById("content").innerHTML = "";
  contact();
};
