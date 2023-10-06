let decisao = true
var nome =''
var batalhas = 0
let xp = 0
let elo =''
let opcao =''
//executar enquanto o usuario n sair
while (decisao === true){
    nome = prompt('Caro guerreiro, qual o seu nome? ')
    console.log('Guerreiro '+nome+', você me parece cansado...')
    batalhas = prompt('Diga-me, quantas batalhas você venceu para chegar até aqui? ')
    
    //após receber o xp, passar por um classificador que multiplica as batalhas por um xp padronizado

    xp = batalhas*100
  
    if(xp < 1000){
        elo = 'Ferro'
    }    
    else if(xp >=1001 && xp <=2000){
        elo ='Bronze'
    }
    else if(xp >=2001 && xp <=5000){
        elo ='Prata'
    }
    else if(xp >=6001 && xp <=7000){
        elo ='Ouro'
    }
    else if(xp >=7001 && xp <=8000){
        elo ='Platina'
    }
    else if(xp >=8001 && xp <=9000){
        elo ='Ascendente'
    }
    else if(xp >=9001 && xp <= 10000){
        elo ='Imortal'
    }else{
        elo = 'Radiante'
    }

    console.log('O herói de nome '+nome+' está no nível '+elo)
    opcao = prompt('Deseja continuar?\n 0.NÃO\n 1. SIM\n')
    
    if(opcao !=1){
        decisao =false
        print('Até a próxima!')
    }
}
