export default class TodoSotre {

  constructor() {
    this._reactions = [];
    this._todos = [];
  }

  get todos() {
    return this._todos;
  }

  registerReaction = (target, reaction) => {
    this._reactions.push({target, reaction});
  }

  put = (todo) => {
    this._todos.push(`${todo}-${new Date().getTime()}`);
    this._runReactions();
  }

  clear = () => {
    if (this._todos.length > 0) {
      this._todos.splice(0, this._todos.length);
      this._runReactions();
    }
  }

  _runReactions() {
    if (this._reactions.length > 0) {
      this._reactions.forEach(({target, reaction}) => reaction.call(target));
    }
  }
}