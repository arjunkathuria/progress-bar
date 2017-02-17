import React from 'react';
import './pg.css';

const defaultProps = {
  completed: 0,
  color: '#79BCD5',
  steps: 10
};

const PropTypes = {
  completed: React.PropTypes.number,
  color: React.PropTypes.string,
  steps: React.PropTypes.number
};

class Bar extends React.Component {
  constructor(props) {
    super(props);
    this.drawSteps = this.drawSteps.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.updateBar = this.updateBar.bind(this);
  }
  componentDidMount() {
    this.updateBar();
  }
  componentWillReceiveProps() {
    this.updateBar();
  }
  updateBar() {
    let completed = this.props.completed;
    let steps = this.props.steps;
    let unit = 100 / steps;
    let numberOfBoxesToColor = Math.floor(completed / unit);
    let relevantChildren = [...this.refs.pgcontainer.children].slice(0, numberOfBoxesToColor);
    let rest = [...this.refs.pgcontainer.children].slice(numberOfBoxesToColor);
    relevantChildren.forEach((el)=> el.style.backgroundColor = this.props.color);
    rest.forEach(el => el.style.backgroundColor = '#D5D5D5');
  }
  drawSteps() {
    return (
      [...new Array(this.props.steps)].map( (el,i) => {
        return <div className="pgbox" key={i} data-key={i+1} />;
      })
    );
  }
  clickHandler(e) {
    const id = e.target.getAttribute('data-key');
    let relevantChildren = [...this.refs.pgcontainer.children].slice(0, id);
    let rest = [...this.refs.pgcontainer.children].slice(id);
    relevantChildren.forEach((el)=> el.style.backgroundColor = this.props.color);
    rest.forEach(el => el.style.backgroundColor = 'red');
  }

  render() {
    return (
      <div className="progress-container" onClick={this.clickHandler} ref="pgcontainer">
        {this.drawSteps()}
      </div>
    );
  }
}

Bar.defaultProps = defaultProps;
Bar.propTypes = PropTypes;

export default Bar;