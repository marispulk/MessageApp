import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";
import { Chat } from "../../chat";
import { ChatService } from "../../chat.service";

@Component({
  selector: 'app-chat-settings',
  templateUrl: './chat-settings.component.html',
  styleUrls: ['./chat-settings.component.css']
})
export class ChatSettingsComponent implements OnInit {

  chat: Chat[];

  getChatProperties(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.chatService.getChatProperties()
        .subscribe(chatproperties => this.chat = chatproperties.filter(chatfilter => chatfilter.id === id))
  }
  saveChatSettings(picture: string, name: string): void{
    // Trim input
    picture = picture.trim();
    name = name.trim();

    // Get Id from URL
    const id =+this.route.snapshot.paramMap.get('id');

    if(!picture || !name){
      return;
    };

    this.chatService.saveChatSettings( {id, name, picture} as Chat )
      .subscribe();

    this.chatService.notifyChange();

  }

  deleteChat(chat: Chat): void {
    // Put all objects to the same array again, only filter out the chat that we want to delete
    // Delete chat from local array
    this.chat = this.chat.filter(chat => chat !== chat)

    //Delete from database using chatService
    this.chatService.deleteChat(chat).subscribe();

    //Notify Chats component of a change in database, so getChats() would get triggered again.
    this.chatService.notifyChange();

    //Redirect user to home url, after the chat has been deleted
    this.router.navigate(['/']);
  }

  goBack(): void {
    this.location.back();
  }
  constructor(
    private chatService: ChatService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        const id = +params['id'];
        this.getChatProperties();
      }
    )
  }
}
