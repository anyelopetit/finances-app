import getConfig from 'next/config';

export class AccountService {
  constructor() {
    this.contextPath = process.env.NEXT_PUBLIC_API_URL;
  }

  getAccounts() {
    console.log(this.contextPath);
    let headers = {
      'Cache-Control': 'no-cache',
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "text/plain"
    };
    return fetch(this.contextPath + '/accounts', { headers: headers })
      .then((res) => res.json())
      .then((d) => d.data);
  }
}
