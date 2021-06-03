import React from 'react';
import { connect } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store/index';

class Counter extends React.Component {
  incrementHandler = () => {
    this.props.increment();
  };

  increaseHandler = () => {
    this.props.increase(5);
  }
  
  decrementHandler = () => {
    this.props.decrement();
  }

  toggleCounterHandler = () => {
    this.props.toggle();
  };

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        {this.props.showCounter && <div className={classes.value}>{this.props.counter}</div>}
        <div>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
          <button onClick={this.increaseHandler.bind(this)}>Increase by 5</button>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter.counter,
    showCounter: state.counter.showCounter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // increment: () => dispatch({ type: 'increment' }),
    // increase: (amount) => dispatch({ type: 'increase', amount: amount }),
    // decrement: () => dispatch({ type: 'decrement' }),
    // toggle: () => dispatch({ type: 'toggle' }),
    increment: () => dispatch(counterActions.increment()),
    increase: (amount) => dispatch(counterActions.increase(amount)),
    decrement: () => dispatch(counterActions.decrement()),
    toggle: () => dispatch(counterActions.toggleCounter()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
