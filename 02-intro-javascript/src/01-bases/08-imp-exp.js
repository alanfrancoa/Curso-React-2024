import heroes, {owners} from "./data/heroes"; //desestructuramos owners xq no es default
//Import y export
/*const getHeroeByID = (id) => {
    return heroes.find((heroe) => {
        if (heroe.id == id){
            return true;
        } else {
            return false;
        }
    });
} */

    console.log(owners)
//Obtener heroe por id
const getHeroeByID = (id) => heroes.find((heroe) => heroe.id === id);
console.log(getHeroeByID(2));

//obtener lista de heroes por dueño
const getHeroeByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

console.log(getHeroeByOwner('DC'))