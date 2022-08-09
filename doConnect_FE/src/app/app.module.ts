import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AnswerComponent } from './answer/answer.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DescriptionComponent } from './description/description.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { QuestiondashboardComponent } from './questiondashboard/questiondashboard.component';
import { AskquestionComponent } from './askquestion/askquestion.component';
import { ChatComponent } from './chat/chat.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { NewquestionComponent } from './newquestion/newquestion.component';
import { QuestionsComponent } from './questions/questions.component';



//Required Apis
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    AnswerComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    DescriptionComponent,
    HomeComponent,
    RegisterComponent,
    UserdashboardComponent,
    QuestiondashboardComponent,
    AskquestionComponent,
    ChatComponent,
    AdmindashboardComponent,
    NewquestionComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MaterialFileInputModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatSnackBarModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
