
import { Component, OnInit, OnChanges, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'fav-heart',
  templateUrl: './fav-heart.component.html',
  styleUrls: ['./fav-heart.component.css']
})

export class FavHeartComponent implements OnInit{

  @Input() fav: boolean;

  @Output() clickHeart: EventEmitter<boolean> = new EventEmitter<boolean>();


  ngOnInit(): void {
    //console.log(this.fav);
  }

  onClick(): void {
    this.clickHeart.emit(this.fav);
    this.fav = !this.fav;

  }



}
