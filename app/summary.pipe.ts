import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'summary'
})
export class SummaryPipe implements PipeTransform{
    // transform(value: string, limit ?:number) :string {
    //     console.log(value)
        
        // return `${value.slice(0,50)}...`;
            // return value.slice(0,50) + '...';
            // return value.slice(0,limit) + '...'
            // for default vlaue set.
            // let newlimit = limit ? limit : 70
            // return value.slice(0,newlimit) +'....'
    // }
    // default value using es6
    // jr html madhe value define nahi keli tr method madhe define keleli ghenar
    transform(value: string, limit :number =50) :string {
        return value.slice(0,limit)
    }

}