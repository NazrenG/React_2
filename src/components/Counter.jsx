import { Component } from "react";

class Counter extends Component {
  state = {
    goodCount: 0,
    naturalCount: 0,
    badCount: 0,
    totalFeedBack: 0,
    positiveFeedBack: 0,
  };

  setGoodCount = () => {
    this.setState((prevState) => {
      const newGoodCount = prevState.goodCount + 1;
      const newTotalFeedBack =
        newGoodCount + prevState.naturalCount + prevState.badCount;
      const newPositiveFeedBack = (newGoodCount * 100) / newTotalFeedBack;
      return {
        goodCount: newGoodCount,
        totalFeedBack: newTotalFeedBack,
        positiveFeedBack: newPositiveFeedBack,
      };
    });
  };

  setNaturalCount = () => {
    this.setState((prevState) => {
      const newNaturalCount = prevState.naturalCount + 1;
      const newTotalFeedBack =
        prevState.goodCount + newNaturalCount + prevState.badCount;
      const newPositiveFeedBack =
        (prevState.goodCount * 100) / newTotalFeedBack;
      return {
        naturalCount: newNaturalCount,
        totalFeedBack: newTotalFeedBack,
        positiveFeedBack: newPositiveFeedBack,
      };
    });
  };

  setBadCount = () => {
    this.setState((prevState) => {
      const newBadCount = prevState.badCount + 1;
      const newTotalFeedBack =
        prevState.goodCount + prevState.naturalCount + newBadCount;
      const newPositiveFeedBack =
        (prevState.goodCount * 100) / newTotalFeedBack;
      return {
        badCount: newBadCount,
        totalFeedBack: newTotalFeedBack,
        positiveFeedBack: newPositiveFeedBack,
      };
    });
  };

  render() {
    const {
      goodCount,
      naturalCount,
      badCount,
      totalFeedBack,
      positiveFeedBack,
    } = this.state;

    return (
      <div>
        <h1>Counter</h1>
        <div>
          <button onClick={this.setGoodCount}>Good</button>
          <button onClick={this.setNaturalCount}>Natural</button>
          <button onClick={this.setBadCount}>Bad</button>
        </div>
        <p>Good: {goodCount}</p>
        <p>Natural: {naturalCount}</p>
        <p>Bad: {badCount}</p>
        <p>Total: {totalFeedBack}</p>
        <p>Positive feedback: {positiveFeedBack.toFixed(2)}%</p>
      </div>
    );
  }
}

export default Counter;
