import { Component, OnInit, ViewChild, DoCheck } from '@angular/core';
import { ChannelService } from '../channel.service';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'two',
  template: `
  <h3>Two</h3>
  <input #i>
  <button (click)="push(i.value)">Add</button>
  <button (click)="refresh()">Refresh</button>
  <ul>
    <li *ngFor="let item of twoData">{{item}}</li>
  </ul>
  <p>channel data: {{infoFromChannel}}</p>

  `,
  styles: [
  ]
})
export class TwoComponent implements OnInit, DoCheck {

  twoData: Array<string> = [];
  infoFromChannel = '';
  sub: Subscription;

  @ViewChild('i') input;
  constructor(private s: DataService,
    private c: ChannelService) { }

  ngOnInit(): void {
    this.twoData = this.s.getData();
    this.sub = this.c.channel$.subscribe(d => this.infoFromChannel = d)
  }

  push(v: string) {
    this.s.addData(v)
    this.twoData = this.s.getData();
    this.input.nativeElement.value = ''
  }



  refresh(): void {
    this.twoData = this.s.getData();
  }
  ngDoCheck() {
    // this.twoData = this.s.getData();
  }
  ngOnDestroy() {
    this.sub.unsubscribe()
  }
}
