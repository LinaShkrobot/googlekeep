export class Api {
  constructor() {
    this.BaseUrl = 'http://localhost:5000/';
  }

  request(options) {
    return fetch(`${this.BaseUrl}${options.path}`, {
      method: options.method,
      body: options.body,
      headers: options.headers,
    }).then((r) => r[options.returnType]());
  }

  getNotes() {
    return this.request({
      path: 'notes',
      returnType: 'json',
    });
  }

  createNote(note) {
    return this.request({
      path: 'notes',
      body: JSON.stringify(note),
      method: 'POST',
      returnType: 'json',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

// /notes/id  "PUT", body, headers

// /notes/id  "DELETE"
