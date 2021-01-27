let inputtyp = "";
let doplnek = "";
document.getElementById("element").addEventListener("contextmenu", function (event) {
  element = document.getElementById("element").value;
  zkontrolovat("element", element);
})
function zkontrolovat(value, element) {
if (value == "element") {
  if (element == "input") {
    document.getElementById("inputrozhrani").style.diplay = "block";

      inputtyp = document.getElementById("inputrozhranitype").value;
         console.log("ahoj");
      doplnek = "type='" + inputtyp + "'"
  }
  else {
    document.getElementById("inputrozgrani").style.display = "none";
  }
}
}
