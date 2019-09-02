import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeCounter'
})
export class TimeCounterPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date(); //get current date and time
    let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateDifference = Math.abs(value - todayWithNoTime) //returns value in miliseconds
    const secondsInDay = 86400; //60 seconds * 60 minutes in an hour * 24 hours in a day
    var dateDifferenceSeconds = dateDifference*0.001; //converts miliseconds to seconds
    var timeCounter = dateDifferenceSeconds/secondsInDay;
    console.log(value)
    if (timeCounter >= 1 && value > todayWithNoTime){
      return timeCounter;
    }else{
      return 0;
    }
  }


}
