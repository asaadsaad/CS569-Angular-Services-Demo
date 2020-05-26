import { Component, OnInit, ViewChild } from '@angular/core';
import { ChannelService } from '../channel.service';
import { DataService } from '../data.service';

@Component({
  selector: 'one',
  template: `
    <h3>One</h3>
    <input #i>
    <button (click)="push(i.value)">Add</button>
    <button (click)="refresh()">Refresh</button>
    <button (click)="channelSend(i.value)">Send through Channel</button>

    <ul>
      <li *ngFor="let item of oneData">{{item}}</li>
    </ul>
  `,
  styles: [
  ],

})
export class OneComponent implements OnInit {
  oneData: Array<string> = [];

  @ViewChild('i') input;
  constructor(private s: DataService,
    private c: ChannelService) { }

  ngOnInit(): void {
    this.oneData = this.s.getData();
  }

  push(v: string) {
    this.s.addData(v)
    this.oneData = this.s.getData();
    this.input.nativeElement.value = ''
  }
  refresh(): void {
    this.oneData = this.s.getData();
  }
  channelSend(v: string) {
    this.c.channel$.next(v)
    this.input.nativeElement.value = ''
  }
}
