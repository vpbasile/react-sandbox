export function queryAPI(url: string, method: string, body: any) {
  return fetch(url, {
	method: method,
	body: JSON.stringify(body),
	headers: {
	  'Content-Type': 'application/json'
	}
  }).then(response => response.json());
}