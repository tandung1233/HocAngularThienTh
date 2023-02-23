import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent {
  @Input() heroData: any;
  @Output() onRemove = new EventEmitter();

  omRemoveChild() {
    this.onRemove.emit(this.heroData);
  }
}
