import { Pipe, PipeTransform } from '@angular/core';
import { Iplayers } from './shared/model/data';
import { relativeTimeRounding } from 'moment';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Iplayers[],seachText:string): Iplayers[] {
   if(!value){
    return []
   }
   if(!seachText){
    return value;
   }
   let filterArray = value.filter(playObj=>{
    return playObj.country.toLocaleLowerCase().startsWith(seachText)
   })
   return filterArray;
  }

}
