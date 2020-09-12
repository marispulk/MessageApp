import { Component, OnInit } from '@angular/core';
import { Chat } from "../chat";
import { ChatService } from "../chat.service";


@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {

  selectedChat: Chat;
  chats: Chat[];

  getChats(): void {
    this.chatService.getChats()
    .subscribe(chats => this.chats = chats)
  }

  addChats(name: string, picture: string): void {
    name = name.trim();
    picture = picture.trim();

    if(!name && !picture) { return; }
    this.chatService.addChats( { name, picture } as Chat )
    .subscribe(chats => {
      this.chats.push(chats);
    });
  }

  onSelect(chat: Chat): void {
    this.selectedChat = chat;
  }

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.getChats();
    this.chatService.$saved
      .subscribe( (change) => {
        this.getChats();
      })
  }

}