function createStore() {
  let vuoto = [];
  
  return function g (aggiungi){

    vuoto.push(aggiungi);
    return vuoto;


  }
return g;
  
}

const redPants = { id: 1, name: 'Red Pants' };
const whiteHat = { id: 2, name: 'White Hat' };
const blackSneakers = { id: 3, name: 'Black Sneakers' };

console.log('--- Dress Store ---');
const dressStore = createStore();
console.log(dressStore(redPants));
console.log(dressStore(whiteHat))

console.log('--- Shoes Store ---');
const shoesStore = createStore();
console.log(shoesStore(blackSneakers));