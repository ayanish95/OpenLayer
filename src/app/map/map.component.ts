import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit } from '@angular/core';
import { Map } from 'ol';

@Component({
  selector: 'app-map',
  template: '',
  styles: [':host { width: 100%; height: 100%; display: block; }'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapComponent implements OnInit {
  @Input() map!: Map;
  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.map.setTarget(this.elementRef.nativeElement);
  }

}
