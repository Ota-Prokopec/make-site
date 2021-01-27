

let code = [];
let codefunction;
let word ;
function addelement({ el, color, element, string, height, width, background,
 left, top}) {




  var node = document.createElement(element);
  var textnode = document.createTextNode(string);
  node.appendChild(textnode);
  node.style.height = height + "px";
  node.style.width = width + "px";
  node.style.background = background;



  node.style.position = "absolute";
  node.style.color = color;
  node.style.left = left-284 + "px";
  node.style.top = top-14 + "px";
  document.getElementById("wrap").appendChild(node);
  zkontrolovat("element", element);

  if (doplnek == "") {
    word = "<" + element + " " + "style='" + "color:" + color +";" + "height:"
 + height + "px" + ";" + "width:" + width + "px" + ";" + "background:" + background
  +";" + "position: absolute;" + "left:" + left + "px;" + "top:" + top + "px;" + "'>" + string
   + "</" + element + " " + ">";
  }
  else {
    word = "<" + element + " " + doplnek +" " + "style='" + "color:" + color +";" + "height:"
  + height + "px" + ";" + "width:" + width + "px" + ";" + "background:" + background
  +";" + "position: absolute;" + "left:" + left + "px;" + "top:" + top + "px;" + "'>" + string
   + "</" + element + " " + ">";
  }








        codefunction = word + codefunction;

                       document.getElementById("wiewcode").innerText = codefunction;











}
