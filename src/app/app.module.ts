import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { IntroComponent } from './intro/intro.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FeatureComponent } from './feature/feature.component';
import { PostsComponent } from './posts/posts.component';
import { PaginationComponent } from './pagination/pagination.component';
import { FooterComponent } from './footer/footer.component';
import { CopyrightComponent } from './copyright/copyright.component';

@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    IntroComponent,
    HeaderComponent,
    NavbarComponent,
    FeatureComponent,
    PostsComponent,
    PaginationComponent,
    FooterComponent,
    CopyrightComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
