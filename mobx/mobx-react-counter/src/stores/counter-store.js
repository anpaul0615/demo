import { decorate, observable, action } from 'mobx';

class CounterStore {
  number = 0;

  increase = () => {
    this.number++;
  }

  decrease = () => {
    this.number--;
  }
};

decorate(CounterStore, {
  number: observable,
  increase: action,
  decrease: action
});

export default CounterStore;
