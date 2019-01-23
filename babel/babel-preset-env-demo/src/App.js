export default class App {
  constructor() {
    this.name = 'test-app';
    this.components = [
      'comA', 'comB', 'comC',
    ];
  }
  getProperties() {
    return Promise.resolve({ ...this });
  }
}