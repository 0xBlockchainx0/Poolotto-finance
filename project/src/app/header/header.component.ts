import { Component, NgZone } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: 'header.component.html',
	styleUrls: ['header.component.scss']
})

export class HeaderComponent {
	disable: boolean = false;

	constructor(private ngZone: NgZone,) { }

	launchMateMask(): void {

		this.disable = true;
		if (typeof window.ethereum !== 'undefined' && window.ethereum!.isMetaMask) {
			this.some(window.ethereum)
		}
		else {
			window.open('https://metamask.io/', '_blank', 'rel=noreferrer');
		}
		this.disable = false;
	}


	async some (ethereum: any): Promise<void>  {
		try {
			// Will open the MetaMask UI
			// You should disable this button while the request is pending!
			await ethereum.request({ method: 'eth_requestAccounts' });
		  } catch (error) {
			console.error(error);
		  }
	}
}
