import { Component, OnInit } from '@angular/core';
import { Ifiles, Iplayers } from './shared/model/data';
import { cricketers } from './shared/model/const/player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{


  searchbyValue !:string;
  title = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique perferendis placeat corporis velit nihil ipsam aut rem atque expedita laboriosam!';
  dataSummary = 'Angular Lorem ipsum dolor sit amet consectetur adipisicing elit.Angular Lorem ipsum dolor sit Angular Lorem ipsum dolor sit amet consectetur adipisicing elit.Angular Lorem ipsum dolor sit amet consectetur adipisicing elit.Angular Lorem ipsum dolor sit amet consectetur adipisicing elit.Angular Lorem ipsum dolor sit amet consectetur adipisicing elit.amet consectetur adipisicing elit. In, et sapiente dolor, commodi ipsam veritatis distinctio illo omnis labore nobis id? Officiis nulla vero eius, dolorem corrupti asperiores est iure?'
  
  d : Date = new Date(2023 ,1);

   course ={
    CouserName: 'Java',
    onOfStd : 123,
    rating :  3.14159265359,
    realeaseDate: new Date(2022, 2, 36),
    price:34.45500
   }
    stdArray : Array<Ifiles> =[
      {
        name :'java',
        size : 22343,
        type:'pdf'

      },
      {
        name:'c++',
        size:889990,
        type:'pdf'
      },
      {
        name:'react',
        size:4555666,
        type:'pdf'
      }
    ]
   playersArray: Array<Iplayers>= cricketers;

   ngOnInit(): void {

  }
}
