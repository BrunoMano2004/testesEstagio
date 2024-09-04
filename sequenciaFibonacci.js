numeroDesejado = 5
let i = 2;
const sequencia = [0, 1]

while(numeroDesejado > sequencia[sequencia.length - 1]){
    sequencia[i] = sequencia[i - 1] + sequencia[i - 2];
    i++;
}

if(sequencia.includes(numeroDesejado)){
    console.log('A sequencia possui o número desejado');
} else {
    console.log('A sequência não possui o número desejado');
}

console.log(sequencia);