class Corredor {
    camino = 0

    correr(pasos){
      this.camino += pasos
      return this.camino
    }

    suerte(){
      return Math.floor(Math.random()*100)+1
    }

    reiniciarCamino(){
      this.camino = 0
    }
}

class Tortuga extends Corredor{

    avanzar(){
        let suerte = this.suerte()
        let pasos = 0
        console.log("Tortuga")
        if(suerte <= 50){
            console.log("Paso rapido")
            pasos = 3
        }else if(suerte <= 70 && this.camino >= 6){
            console.log("Resbalon")
            pasos = -6
        }else{
            console.log("Paso lento")
            pasos = 1
        }
        console.log(`Avanzó ${pasos} pasos`)
        return this.correr(pasos)
    }
}
  
class Liebre extends Corredor{

    avanzar(){
        let suerte = this.suerte()
        let pasos = 0
        console.log("Liebre")
        if(suerte <= 20){
            console.log("Se durmio")
            pasos = 0
        }else if(suerte <= 40){
            console.log("Salto grande")
            pasos = 9
        }else if(suerte <= 50 && this.camino >= 12){
            console.log("Resbalon grande")
            pasos = -12
        }else if(suerte <= 85){
            console.log("Salto pequeño")
            pasos = 1
        }else if(suerte > 85&& this.camino >= 2){
            console.log("Resbalon pequeño")
            pasos = -2
        }
        console.log(`Avanzo ${pasos} pasos`)
        return this.correr(pasos)
    }
}
  
class Carrera {
    ganador = null
    tortuga = new Tortuga()
    liebre = new Liebre()
    tamanoDeCarrera = 0

    constructor(tamanoDeCarrera=90){
      this.tamanoDeCarrera = tamanoDeCarrera
    }

    comenzar(){
        let tCamino, lCamino
        let i = 1
        while(!this.ganador){
            tCamino = this.tortuga.avanzar()
            console.log(`Recorrido tortuga: ${tCamino}`)
  
            lCamino = this.liebre.avanzar()
            console.log(`Recorrido liebre: ${lCamino}`)
  
            if(tCamino >= this.tamanoDeCarrera && lCamino >= this.tamanoDeCarrera){
                this.ganador = "Empate"
            }else if(tCamino >= this.tamanoDeCarrera){
                this.ganador = "Gano Tortuga"
            }else if(lCamino >= this.tamanoDeCarrera){
                this.ganador = "Gano Liebre"
            }
            if(this.ganador){
                console.log(this.ganador)
            }else{
                console.log(`Ronda ${i}`)
            }
            i++
        }
    }
}
  
new Carrera().comenzar()