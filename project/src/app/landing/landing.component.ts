import { Component, OnInit } from '@angular/core';
import { PancakeSwapService } from '../shared/pancakeswap.service';

@Component({
	selector: 'app-landing',
	templateUrl: 'landing.component.html',
	styleUrls: ['landing.component.scss']
})

export class LandingComponent implements OnInit {

	constructor(public pancakeServie: PancakeSwapService) {}

	ngOnInit(): void {
		this.pancakeServie.getData();
	}
}
