import { observable, action } from 'mobx';

export default class MessageStore {
  @observable messages = [];

  @action
  add(message) {
    this.messages.push(message);
  }

  @action
  clear() {
    this.messages = [];
  }

  get messages() {
    return this.messages;
  }
}
