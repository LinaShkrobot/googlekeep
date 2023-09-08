class Observer {
    constructor() {
      this.callbacks = {};
    }
  
    on(type, cb) {
      if (!this.callbacks[type]) {
        this.callbacks[type] = [];
      }
      this.callbacks[type].push(cb);
    }
  
    fire(type, data) {
      const callbacks = this.callbacks[type];
      if (callbacks) {
        callbacks.forEach((cb) => cb(data));
      }
    }
  }
  
  export const observer = new Observer();