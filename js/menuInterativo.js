function myFunction() {
    var x = document.getElementById("mycabecalho");
    if (x.className === "cabecalho") {
      x.className += " responsive";
    } else {
      x.className = "cabecalho";
    }
  }