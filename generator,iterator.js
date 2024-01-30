//iterator
function iterator_function(array){
    let index=0;
     let iterator_obj ={
               sum:0,
               next : function(){
               this.sum+=array[index];
               if(index++<array.length){
                  return {
                    value: this.sum,
                    done:'false'
                    
                  }
               }
               else{
                return{
                    value:'array length exceed',
                    done: 'true'
                }
               }
           }
     }
      return iterator_obj;
}

let array=[1,2,3,4,5];
        let iterator_obj=iterator_function(array);
        console.log(iterator_obj.next());
        console.log(iterator_obj.next());
        console.log(iterator_obj.next());
        console.log(iterator_obj.next());
        console.log(iterator_obj.next());
        console.log(iterator_obj.next());

//symbol

console.log(Symbol("object")=== Symbol("object"));

let symbol1 = Symbol();
let symbol2 = Symbol();

console.log(`typeof symbol: ${typeof symbol1}`);

let symbolObject = {};
symbolObject[symbol1]="symbol1";
symbolObject[symbol2]="symbol2";

console.log(Object.getOwnPropertyNames(symbolObject));
console.log(Object.getOwnPropertySymbols(symbolObject));

//global symbol

console.log(Symbol.for("globalsymbol")===Symbol.for("globalsymbol"));
let  globalSymbol1= Symbol.for("globalsymbol");
let  globalSymbol2 = Symbol.for("globalsymbol2");

console.log(`typeof symbol: ${typeof globalSymbol1}`);


let globalSymbolObject ={};
globalSymbolObject[globalSymbol1]="global";
globalSymbolObject[globalSymbol2]="glo";

console.log(Object.getOwnPropertyNames(globalSymbolObject));
console.log(Object.getOwnPropertySymbols(globalSymbolObject));

//generator

function * generatorFunction(){
    yield 1;
    yield 2;
    yield 3;
}

let generatorObject= generatorFunction();


console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());


// function * generatorFunction(n){
//    let pre,cur,step=1;
//    pre=cur=1;
//    for(let i=0;i<n;i++){
//    [pre,cur]=[cur,pre+cur];
//           yield cur;
//    }
// }

// generatorObject = generatorFunction(5);
// console.log(generatorObject.next());
// console.log(generatorObject.next());
// console.log(generatorObject.next());
// console.log(generatorObject.next());
// console.log(generatorObject.next());
// console.log(generatorObject.next());



