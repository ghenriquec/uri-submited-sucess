var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
// ['14 3', 'nome 3343' , 'nom2 3234']  
//

const primeira_linha = lines.shift().split(' ') // Remove a primeira linha para poder pegar as informaçoes necessarias
const qtd_jogadores = parseInt(primeira_linha[0])
const qtd_times     = parseInt(primeira_linha[1])


novos_jogadores = lines.map( ell => {
    sep = ell.split(' ')
    return [ sep[0], parseInt(sep[1]) ]
})

novos_jogadores.sort( (a,b)=> a[1] - b[1] )

const times = []
for (let index = 0; index < qtd_times; index++) {
    times.push([])
}

var conta = 0;

for (let index = 0; index < qtd_jogadores; index++) {
    times[conta].push(novos_jogadores.pop())
    conta++;
    if (conta == qtd_times){
        conta = 0;        
    }
}

for (let index = 0; index < qtd_times; index++) {
    console.log(`Time ${index+1}`);
    times[index].sort()
    times[index].forEach(element => {
        console.log(element[0]);
    });
    console.log(' ');
}