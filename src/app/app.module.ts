import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { ChatComponent } from './chat/chat.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { UserheaderComponent } from './userheader/userheader.component';
import { UserlistComponent } from './userlist/userlist.component';
import { SocketMessageListComponent } from './socket-message-list/socket-message-list.component';
import { SocketMessageComponent } from './socket-message/socket-message.component';
import { SocketMessageService } from './service/socket-message.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ChatComponent,
    LoginComponent,
    LogoutComponent,
    ChatboxComponent,
    UserheaderComponent,
    UserlistComponent,
    SocketMessageListComponent,
    SocketMessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [SocketMessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
