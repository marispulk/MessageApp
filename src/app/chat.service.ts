import { Injectable } from '@angular/core';
import { Chat } from "./chat";
import { CHATS } from "./mock-chats";
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private chatUrl = 'api/chats'; //URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'applications/json' })
  };


  getChats(): Observable<Chat[]> {
    return this.http.get<Chat[]>(this.chatUrl);
  }

  addChats(chat: Chat): Observable<Chat> {
    return this.http.post<Chat>(this.chatUrl, chat, this.httpOptions);
  }

  constructor(
    private http: HttpClient  
  ) { }
}
