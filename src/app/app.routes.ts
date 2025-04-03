import { Routes } from '@angular/router';
import { AboutComponent } from './layout/pages/about/about.component';
import { HomeComponent } from './layout/pages/home/home.component';
import { NewsComponent } from './layout/pages/news/news.component';
import { ContactComponent } from './layout/pages/contact/contact.component';
import { NotfoundComponent } from './layout/pages/notfound/notfound.component';
import { PortofolioComponent } from './layout/pages/portofolio/portofolio.component';

export const routes: Routes = [
    { path: '', redirectTo:'home',pathMatch:'full' },
    { path: 'home', component: HomeComponent,title:'Home' },
    { path: 'about', component: AboutComponent,title:'About' },
    { path: 'portfolio', component:PortofolioComponent,title:'Portofolio'},
    { path: 'news', component: NewsComponent,title:'News' },
    { path: 'contact-us', component: ContactComponent,title:'ContactUs'},
    { path: '**', component: NotfoundComponent ,title:'#Errrrrrrrrrrrrrrr////'}, // 404 Page
];
