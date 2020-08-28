import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { ChatMessage } from "./chatmessage";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDataService {

  createDb() { 
    const chatmessages = [
      {id: 1, username: 'Admin', content: 'Tere!', date: '25.08.2020 12:20:00'},
      {id: 2, username: 'Admin', content: 'Tere Teilegi! ', date: '25.08.2020 12:21:00'},
      {id: 3, username: 'Guest', content: 'Mis kell on tänane koosolek?', date: '25.08.2020 12:22:00'},
      {id: 4, username: 'Admin', content: 'Maris ütles, et 10.00', date: '25.08.2020 12:23:00'},
      {id: 5, username: 'Guest', content: 'Selge, aitäh', date: '25.08.2020 12:24:00'},
      {id: 6, username: 'Admin', content: 'Pole tänu väärt!', date: '25.08.2020 12:25:00'}
      ];
      return {chatmessages};
  }
  // Overrides the genID method to ensure that a chatmessage always has a id.
  // If the chatmessages array is empty the method below returns the initial number (1).
  // If the heroes array is not empty, the method below returns the highest hero id + 1
  genId(chatmessages: ChatMessage[]): number {
    return chatmessages.length > 0 ? Math.max(...chatmessages.map(chatmessage => chatmessage.id))
    + 1 : 1;
  }
}
