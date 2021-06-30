import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PancakeSwapService {

	constructor(private http: HttpClient) { }
	getData(): any {
		// return this.http.get('https://api.pancakeswap.info/api/v2/tokens/0x4786eeef4c750158a73218459bfc07a75c89edc0')
		// 	.subscribe((data: any) => { });
	}
}
