import http from 'k6/http';
import { sleep } from 'k6';
import { check, fail } from "k6";

export default function () {

	const url = 'https://api-dominios-dev.pixeon.cloud/api/Dominio?id=korus_automation_docker';

	const res = http.get(url);

	console.log('Response (Endpoint Teste) time was ' + String(res.timings.duration) + 'ms' + ' status response: ' + String(res.status))

	let maxDuration = 1000; 

	if(!check(res, {
		'(Teste) status is success': (r) => r.status === 200,
		'(Teste) max duration': (r) => r.timings.duration < maxDuration, 
	})){
		fail(`because max duration should be ${maxDuration} - duration actual is ${res.timings.duration} `);
	}

	sleep(1);
}


