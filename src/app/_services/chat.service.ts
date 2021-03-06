import { Injectable, EventEmitter } from '@angular/core';
import { Chat } from "../_models/chat";
import { Observable, of } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { firestore } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  $saved = new EventEmitter();
  chats: Observable<Chat[]>;

  private chatUrl = 'api/chats'; //URL to web api
  private chatsCollection: AngularFirestoreCollection<Chat>;


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'applications/json' })
  };

  getChats(): Observable<Chat[]> {
    return this.database.collection<Chat>('chats', ref => ref.where('uid', 'array-contains', this.auth.currentUser())).valueChanges();
  }

  addChats(chat: Chat) {

    const uid = this.auth.currentUser();
    const cid = this.database.createId();
    const chatName = chat.chatName;
    const chatPicture = chat.chatPicture;

    const data: Chat = {
     cid,
     chatName,
     chatPicture,
     uid: [uid]

    }
    this.chatsCollection.doc(cid).set(data);
  }

  getChatSettings(cid: string): Observable<Chat> {
    // Go to <firebase>/chats/Sr7Rnhroquog1bJJCWtJ
    return this.database.doc<Chat>(`chats/${cid}`).valueChanges();
  }

  saveChatSettings(chat: Chat) {
    const chatRef: AngularFirestoreDocument<Chat> = this.database.doc(`chats/${chat.cid}`);

    const data = {
      cid: chat.cid,
      chatPicture: chat.chatPicture,
      chatName: chat.chatName
    }

    return chatRef.set(data, { merge: true });
  }

    async deleteChat(cid: string) {
    const chatRef: AngularFirestoreDocument<Chat> = this.database.doc(`chats/${cid}`);

    const deleteTask= await chatRef.delete();

    return deleteTask;
  }

  async addChatUser(cid: string, uid: string) {
    const chatRef: AngularFirestoreDocument = this.database.doc(`chats/${cid}`);

    const addUserTask = await chatRef.update({
      uid: firestore.FieldValue.arrayUnion(uid)
    });

    return addUserTask;
  }

  chatSearch(name: string): Observable<Chat[]> {
    //If no search term, return empty chat array
    if (!name.trim()) {
      return of ([]);
    }
    //Firebase only allows full keyword search. Must add user filtering (only show search results that include user)
    return this.database.collection<Chat>('chats', ref => ref.where('chatName', '==', name)).valueChanges();
  }

  notifyChange() {
    const change = 'Settings changed';
    this.$saved.emit(change);
  }

  constructor(
    private database: AngularFirestore,
    private auth: AuthService
  ) {
    this.chatsCollection = database.collection<Chat>('chats');
    this.chats = this.chatsCollection.valueChanges();
  }
}
