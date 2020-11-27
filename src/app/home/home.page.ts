import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  public precoAlcool: string = " ";
  public precoGasolina: string= " ";

  public resultado: string = "Resultado";
 

  calcular(){
    if(this.precoAlcool && this.precoGasolina){
        var pAlcool = parseFloat(this.precoAlcool);
        var pGasolina = parseFloat(this.precoGasolina);


        var res = pAlcool / pGasolina
        if(res >= 0.7){
          this.resultado = "Melhor utilizar a Gasolina!";
        
        }else{
          this.resultado = "Melhor utilizar Álcool";
        }



    }else{
      this.resultado = "Preencha corretamente os campos!";


    }
  }

  constructor() {}

}
