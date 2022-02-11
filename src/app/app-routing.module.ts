import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementComponent } from './element/element.component';
import { KalyanComponent } from './kalyan/kalyan.component';
import { TabakComponent } from './tabak/tabak.component';
import { EkcecComponent } from './ekcec/ekcec.component';
import { RegesterComponent } from './regester/regester.component';
import { NewsComponent } from './news/news.component';
import { LoginComponent } from './login/login.component';
import { ProfailComponent } from './profail/profail.component';





const routes: Routes = [
{path:'',component:ElementComponent},
{path:'kalyan',component:KalyanComponent},
{path:'tabak',component:TabakComponent},
{path:'ekcec',component:EkcecComponent},
{path:'regester',component:RegesterComponent},
{path:'news',component:NewsComponent},
{path:'login',component:LoginComponent},
{path:'profail',component:ProfailComponent}




];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
