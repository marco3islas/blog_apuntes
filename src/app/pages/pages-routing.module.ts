import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AboutComponent} from "./about/about.component";
import {ArticuloComponent} from "./articulo/articulo.component";
import {BlogComponent} from "./blog/blog.component";
import {ContactoComponent} from "./contacto/contacto.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
	{
		path: 'home',
		component: HomeComponent,
		pathMatch: 'full'

	},
	{
		path: 'about',
		component: AboutComponent
	},
	{
		path: 'blog',
		component: BlogComponent
	},
	{
		path: 'articulo/:id',
		component: ArticuloComponent

	},
	{
		path: 'contacto',
		component: ContactoComponent

	},
	{
		path: '**',
		redirectTo: 'home'
	}
]





@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports:[
		RouterModule
	]
})

export class PagesRoutingModule {}
