//Fetch => Es la forma en la que hacemos una consulta a una API.
const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    //Recibimos una promesa
    //Una promesa es una acción que se espera hasta que la solicitud se complete
    fetch(url).then((res) => {
        if(res.status != "200") {
            pokeImage("https://i.ibb.co/zN3t07v/pokemon-sad.gif");
            alert("Lo sentimos, no se encontró tu pokemon. Intenta nuevamente");
        } else {
            return res.json();
        }
    }).then((data) => {
        // console.log(data);
        let pokeImg = data.sprites.front_default;
        let nombrePokemon = data.forms[0].name;
        let tipoPokemon = data.types[0].type.name;

        let hp = data.stats[0].base_stat;
        let attack = data.stats[1].base_stat;
        let deffence = data.stats[2].base_stat;
        let specialAttack = data.stats[3].base_stat;
        let specialDeffence = data.stats[4].base_stat;
        let speed = data.stats[5].base_stat;

        let move1 = data.moves[0].move.name;
        let move2 = data.moves[1].move.name;
        let move3 = data.moves[2].move.name;
        let move4 = data.moves[3].move.name;
        let move5 = data.moves[4].move.name;
        let move6 = data.moves[5].move.name;
        let move7 = data.moves[6].move.name;
        let move8 = data.moves[7].move.name;
        let move9 = data.moves[8].move.name;
        let move10 = data.moves[9].move.name;
        let move11 = data.moves[10].move.name;
        let move12 = data.moves[11].move.name;

        pokeImage(pokeImg);
        pokeNombre(nombrePokemon);
        pokeTipo(tipoPokemon);
        pokeEstadisticas(hp, attack, deffence, specialAttack, specialDeffence, speed);
        pokeMovimientos(move1, move2, move3, move4, move5, move6, move7, move8, move9, move10, move11, move12);
    })
}

function pokeImage(url) {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}

function pokeNombre(nombre) {
    const pokeNombre = document.getElementById("pokeNombre");
    nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1);
    pokeNombre.innerHTML = nombre;
}

function pokeTipo(tipo) {
    const pokeTipo = document.getElementById("pokeTipo");
    tipo = tipo.charAt(0).toUpperCase() + tipo.slice(1);
    pokeTipo.innerHTML = tipo;
}

function pokeEstadisticas(hp, attack, deffence, specialAttack, specialDeffence,speed) {
    
    const pokeHP = document.getElementById("pokeHP");
    const pokeAttack = document.getElementById("pokeAttack");
    const pokeDeffence = document.getElementById("pokeDeffence");
    const pokeSpecialAttack = document.getElementById("pokeSpecialAttack");
    const pokeSpecialDeffence = document.getElementById("pokeSpecialDeffence");
    const pokeSpeed = document.getElementById("pokeSpeed");

    const txtHP = document.getElementById("txtHP");
    const txtAttack = document.getElementById("txtAttack");
    const txtDeffence = document.getElementById("txtDeffence");
    const txtSpecialAttack = document.getElementById("txtSpecialAttack");
    const txtSpecialDeffence = document.getElementById("txtSpecialDeffence");
    const txtSpeed = document.getElementById("txtSpeed");


    pokeHP.value = hp;
    pokeAttack.value = attack;
    pokeDeffence.value = deffence;
    pokeSpecialAttack.value = specialAttack;
    pokeSpecialDeffence.value = specialDeffence;
    pokeSpeed.value = speed;
    

    txtHP.innerHTML = hp;
    txtAttack.innerHTML = attack;
    txtDeffence.innerHTML = deffence;
    txtSpecialAttack.innerHTML = specialAttack;
    txtSpecialDeffence.innerHTML = specialDeffence;
    txtSpeed.innerHTML = speed;
}

function pokeMovimientos(move1, move2, move3, move4, move5, move6, move7, move8, move9, move10, move11, move12) {
    const liMove1 = document.getElementById("liMove1");
    const liMove2 = document.getElementById("liMove2");
    const liMove3 = document.getElementById("liMove3");
    const liMove4 = document.getElementById("liMove4");
    const liMove5 = document.getElementById("liMove5");
    const liMove6 = document.getElementById("liMove6");
    const liMove7 = document.getElementById("liMove7");
    const liMove8 = document.getElementById("liMove8");
    const liMove9 = document.getElementById("liMove9");
    const liMove10 = document.getElementById("liMove10");
    const liMove11 = document.getElementById("liMove11");
    const liMove12 = document.getElementById("liMove12");

    liMove1.innerHTML = move1;
    liMove2.innerHTML = move2;
    liMove3.innerHTML = move3;
    liMove4.innerHTML = move4;
    liMove5.innerHTML = move5;
    liMove6.innerHTML = move6;
    liMove7.innerHTML = move7;
    liMove8.innerHTML = move8;
    liMove9.innerHTML = move9;
    liMove10.innerHTML = move10;
    liMove11.innerHTML = move11;
    liMove12.innerHTML = move12;
}