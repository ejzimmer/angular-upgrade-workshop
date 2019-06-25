import { NgModule } from '@angular/core';
import { RouterModule, UrlHandlingStrategy, Routes } from '@angular/router';
import { HelpComponent } from './help/help.component';

class Ng1Ng2UrlHandlingStrategy implements UrlHandlingStrategy {
	shouldProcessUrl(url) { return url.toString() === '/help'; }
	extract(url) { return url; }
	merge(url) { return url; }
}

const routes: Routes = [
	{
		path: 'help',
		component: HelpComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: [{ provide: UrlHandlingStrategy, useClass: Ng1Ng2UrlHandlingStrategy }]
})
export class AppRoutingModule { }		
