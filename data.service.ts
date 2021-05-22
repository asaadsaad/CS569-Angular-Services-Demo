import { Injectable } from '@angular/core';
import LogService from './log.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: string[] = [];
  constructor(private l: LogService) { }

  getData() {
    return this.data;
  }
  addData(s: string) {
    this.data = [...this.data, s];
    this.l.log(`pushing ${s}`)
  }
}
