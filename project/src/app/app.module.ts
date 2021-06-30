import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { PancakeSwapService } from './shared/pancakeswap.service';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		LandingComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
	],
	providers: [PancakeSwapService],
	bootstrap: [AppComponent]
})
export class AppModule { }
