import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {
  channel$ = new EventEmitter<string>()
}
