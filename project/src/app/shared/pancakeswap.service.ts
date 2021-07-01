import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PancakeSwapService {

	constructor(private http: HttpClient) { }
	getData(): any {
		// return this.http.get('https://api.pancakeswap.info/api/v2/tokens/0x631c2f0edabac799f07550aee4ff0bf7fd35212b')
		// 	.subscribe((data: any) => { });
	}
}
