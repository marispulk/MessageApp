import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable, of } from "rxjs";
import { ChatMessage } from "./chatmessage";

@Injectable({
  providedIn: 'root'
})
export class ChatmessageService {

  private chatmessageUrl = 'api/chatmessages'; //URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'applications/json' })
  };

  getChatMessages(): Observable<ChatMessage[]> {
    return this.http.get<ChatMessage[]>(this.chatmessageUrl);
  }

  addChatMessage(chatmessage: ChatMessage): Observable<ChatMessage> {
    return this.http.post<ChatMessage>(this.chatmessageUrl, chatmessage, this.httpOptions);
  
  }

  constructor(
    private http: HttpClient
  ) { }
}
