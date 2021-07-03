import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PancakeSwapService {
	coinData: any;
	apiUrl: string = 'https://api.coingecko.com/api/v3/coins/';

	constructor(private http: HttpClient) { }

	getData(): any {
		return this.http
			.get(`${this.apiUrl}chainlink?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`)
			.subscribe((data: any) => this.coinData = data);
	}

	get price(): number {
		return this.coinData.market_data.current_price.usd;
	}

	get marketCap(): number {
		return this.coinData.market_data.market_cap.usd;
	}

	get totalVolume(): number {
		return this.coinData.market_data.total_volume.usd;
	}

}
