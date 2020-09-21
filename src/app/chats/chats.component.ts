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

  addChats(chatName: string, chatPicture: string): void {
    chatName = chatName.trim();
    chatPicture = chatPicture.trim();

    if(!chatName && !chatPicture) { return; }
    this.chatService.addChats( { chatName, chatPicture } as Chat );
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
