import { Component, OnInit, OnDestroy } from '@angular/core';
import { of, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  // Setup for image swapper
  id: any = 0;
  imageNum: number = 0;
  emitter: Observable<any> = of (
    (this.id = setInterval (
      (value: string = this.getImage()) =>
        this.incrementImage(), 7000
    )));
  sub1: Subscription = this.emitter.subscribe();

  constructor() {}

  ngOnInit(): void {
    this.emitter.subscribe(() => {});
  }

  ngOnDestroy(): void {
    //unsubscribe to emmiter and clear interval
    this.sub1.unsubscribe();
    if (this.id) {
      clearInterval(this.id);
    }
  }

  incrementImage() {
    this.imageNum = this.imageNum + 1;
    if (this.imageNum > 5) {
      this.imageNum = 0;
    }
  }

  getImage() {
    let imageName = ' ';
    switch (this.imageNum) {
      case 0:
        imageName = '../../assets/images/filmnoir.jfif';
        break;
      case 1:
        imageName = '../../assets/images/anamerinparis.jfif';
        break;
      case 2:
        imageName = '../../assets/images/dali.jfif';
        break;
      case 3:
        imageName = '../../assets/images/ai3.jfif';
        break;
      case 4:
        imageName = '../../assets/images/coltslogo2.png';
        break;
      case 5:
        imageName = '../../assets/images/orioles2.jfif';
        break;
    }
    return imageName;
  }
}
