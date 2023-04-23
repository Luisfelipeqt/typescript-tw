let nome: string;
let sobrenome: string;
let idade: number;

nome = "Stella Sophia Campelo";
sobrenome = "Rodrigues"
idade = 28;

function somar(a: number, b:number){
    return a + b;
}
console.log(somar(5, 10));


console.log(`nome: ${nome} ${sobrenome}, idade: ${idade}`);

let a: (number | string)[] = [];
a.push(1);
a.push(2);
a.push(3);
a.push(4);
a.push(5);
a.push(6);
a.push("Stella Sophia Campelo Rodrigues")
a.push("Laura Vitória Campelo Rodrigues")
a.push("Luis Felipe Rodrigues Rodrigues")

console.log(a);
a.pop();
console.log(a);
a.pop();
console.log(a);
a.pop();
console.log(a);
a.pop();
console.log(a);
a.pop();
console.log(a);

type Animal = {
    nome: string;
    idade?: number;
}

let cachorro: Animal;

cachorro = {
    nome: "RuffleS",
    idade: 28
}
console.log(cachorro)