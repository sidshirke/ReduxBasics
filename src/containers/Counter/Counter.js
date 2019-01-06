import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import * as actionTypes from "../../store/actions/actionTypes";
import * as counterActions from "../../store/actions/counterActions";
import * as resultActions from "../../store/actions/resultActions";
class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.propCounter} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.onSubstractCounter}
        />
        <hr />
        <button
          onClick={() => this.props.onStoreResults(this.props.propCounter)}
        >
          Store Results
        </button>
        <ul>
          {this.props.propResults.map(result => (
            <li
              key={result.id}
              onClick={() => this.props.onDeleteResults(result.id)}
            >
              {result.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    propCounter: state.ctr.counter,
    propResults: state.res.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch(counterActions.increment()),
    onDecrementCounter: () => dispatch(counterActions.decrement()),
    onAddCounter: () => dispatch(counterActions.add(5)),
    onSubstractCounter: () => dispatch(counterActions.subtract(5)),
    onStoreResults: ctr => dispatch(resultActions.storeResult(ctr)),
    onDeleteResults: resultId => dispatch(resultActions.deleteResult(resultId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
