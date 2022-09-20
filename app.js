function adicionarFilme() {
    var filmeFavorito = document.getElementById("filme").value;
    var nomeFilmeFavorito = document.getElementById("nomefilme").value;
    if (
      nomeFilmeFavorito == "" ||
      nomeFilmeFavorito.endsWith(".jpg") ||
      nomeFilmeFavorito.endsWith(".png") ||
      filmeFavorito == ""
    ) {
      alert("Verifique se todos os campos estão preenchidos corretamente");
    } else if (filmeFavorito.endsWith(".jpg") || filmeFavorito.endsWith(".png")) {
      listarFilmesNaTela(filmeFavorito, nomeFilmeFavorito);
    } else {
      console.error("Endereço de filme inválido") &&
        alert(
          "Endereço de filme inválido, verifique se o endereço termina em '.jpg' ou '.png'"
        );
    }
    document.getElementById("filme").value = "";
    document.getElementById("nomefilme").value = "";
  }
  
  function listarFilmesNaTela(filme, nome) {
    var elementoFilmeFavorito = "<img src=" + filme + ">";
    var elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML =
      elementoListaFilmes.innerHTML + elementoFilmeFavorito;
    var elementoNomeFilmeFav = "<h3>" + nome;
    var elementoListaNomes = document.getElementById("nomefilmes");
    elementoListaNomes.innerHTML =
      elementoListaNomes.innerHTML + elementoNomeFilmeFav;
  }
  