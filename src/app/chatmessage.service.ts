import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable, of } from "rxjs";
import { ChatMessage } from "./chatmessage";

@Injectable({
  providedIn: 'root'
})
export class ChatmessageService {

  private chatmessageUrl = 'api/chatmessages'; //URL to web api

  getChatMessages(): Observable<ChatMessage[]> {
    return this.http.get<ChatMessage[]>(this.chatmessageUrl);
  }

  constructor(
    private http: HttpClient
  ) { }
}
