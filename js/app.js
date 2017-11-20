window.addEventListener('load', function () {
    /**creando nuestras variables de html */
    var container = document.getElementById("container");//div2
    var box = document.getElementById("box");//span
    var post = document.getElementById("firts");//padre

    /**creando funciones */
    // function add() {
    box.addEventListener("click", function (event) {
        var inp = document.createElement('input');
        var btn = document.createElement('button');
        var spn = document.createElement('span');

        /*creando contenido*/
        btn.textContent = "Añadir una Lista";
        spn.textContent = "X";

        /**creando la dinamica de las cajas crear y remover  */
        container.appendChild(inp);
        container.appendChild(btn);
        container.appendChild(spn);
        container.removeChild(box);
        /**creando evento al botton/ */




        btn.addEventListener('click', function () {
            var lista = document.createElement('p');
            lista.textContent = inp.value;
            inp.value = '';
            container.appendChild(lista);
            container.removeChild(inp);
            container.removeChild(btn);
            container.removeChild(spn);
            /*creando a un hermano de la caja*/
            var hermano = document.createElement('div');
            hermano.appendChild(inp);
            hermano.appendChild(btn);
            hermano.appendChild(spn);
            /**creando a un padre */
            post.appendChild(hermano);
        /*crear  class el hermano*/ 



        })

    })

    //  }/**debes crear classes a las variables */
    //inp.classList.add('tre')








})