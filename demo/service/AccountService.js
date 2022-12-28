export class AccountService {
  constructor() {
    this.contextPath = process.env.NEXT_PUBLIC_API_URL;
  }

  getAccounts() {
    let headers = {
      'Cache-Control': 'no-cache',
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "text/plain"
    };
    return fetch(this.contextPath + '/accounts', { headers: headers })
      .then((res) => res.json())
  }
}
