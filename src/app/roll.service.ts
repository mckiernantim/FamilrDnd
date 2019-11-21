import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RollService {
  
  constructor(){}
  
  roll4(){
    return  1 * (Math.floor(Math.random() * 4) + 1)
  }
  roll6(){
    return  1 * (Math.floor(Math.random() * 6) + 1)
  }
  roll8(){
    return  1 * (Math.floor(Math.random() * 8) + 1)
  }
  roll10(){
     return 1 * (Math.floor(Math.random() * 10) + 1)
  }
  roll12(){
    return 1 * (Math.floor(Math.random() * 10) + 1)
 }
 roll20(){
  return 1 * (Math.floor(Math.random() * 20) + 1)
}
roll100(){
  return 1 * (Math.floor(Math.random() * 100) + 1)
}
roll(sides, number){
  let result= 0;
  for(let i = 0; i<number;i++){
   let  roll =(1 * (Math.floor(Math.random() * sides) +1));
   console.log(roll  + " <------roll")
   result = result + roll 
   console.log(result +  "<------ result")
  } return result

}

}

