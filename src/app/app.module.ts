import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
// Import HttpClient modules to simulate a data server
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./in-memory-data.service";
import { ChatsComponent } from './chats/chats.component';
import { ChatSettingsComponent } from './chats/chat-settings/chat-settings.component';
import { ChatSearchComponent } from './chats/chat-search/chat-search.component';
import { UsersComponent } from './users/users.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { authInterceptorProviders } from "./_helpers/auth.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    ChatsComponent,
    ChatSettingsComponent,
    ChatSearchComponent,
    UsersComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive request.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }
      )
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

