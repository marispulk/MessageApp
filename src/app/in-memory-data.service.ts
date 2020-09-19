import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { ChatMessage } from "./chatmessage";
import { Chat } from "./chat";
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDataService {

  createDb() {
    const chats = [
      {id: 1, name: 'Cloudrunner', picture: 'https://png.pngtree.com/png-vector/20191108/ourlarge/pngtree-fast-leg-run-runner-running-blue-icon-on-abstract-cloud-back-png-image_1966561.jpg'},
      {id: 2, name: 'Stormers', picture: 'https://png.pngtree.com/png-vector/20190618/ourlarge/pngtree-lightning-icon-png-image_1506453.jpg'},
      {id: 3, name: 'SunTimes', picture: 'https://img.lovepik.com/original_origin_pic/18/04/08/4000c4cfe5096aebc5283e6d50a805ae.png_wh860.png'}

    ];
    const chatmessages = [
      {id: 1, chatid: 1, username: 'Admin', content: 'Tere!', date: '25.08.2020 12:20:00'},
      {id: 2, chatid: 1, username: 'Admin', content: 'Tere Teilegi! ', date: '25.08.2020 12:21:00'},
      {id: 3, chatid: 2, username: 'Guest', content: 'Mis kell on tänane koosolek?', date: '25.08.2020 12:22:00'},
      {id: 4, chatid: 2, username: 'Admin', content: 'Maris ütles, et 10.00', date: '25.08.2020 12:23:00'},
      {id: 5, chatid: 3, username: 'Guest', content: 'Selge, aitäh', date: '25.08.2020 12:24:00'},
      {id: 6, chatid: 3, username: 'Admin', content: 'Pole tänu väärt!', date: '25.08.2020 12:25:00'}
      ];

      return {chatmessages, chats};
  }
  // Overrides the genID method to ensure that a chatmessage always has a id.
  // If the chatmessages array is empty the method below returns the initial number (1).
  // If the heroes array is not empty, the method below returns the highest hero id + 1
  genChatId(chats: Chat[]): number {
    return chats.length > 0 ? Math.max(...chats.map(chat => chat.id)) +1 : 1;
  }
  genId(chatmessages: ChatMessage[]): number {
    return chatmessages.length > 0 ? Math.max(...chatmessages.map(chatmessage => chatmessage.id))
    + 1 : 1;
  }
}
