import React from 'react';
import Progress from './components/prog';

export default class Page extends React.Component {
  constructor(props) {
    super(props);

    this.scrollHandler = this.scrollHandler.bind(this);
    this.state = {percent: 0};
  }

  componentDidMount() {
      window.addEventListener('scroll', this.scrollHandler);
  }
  componentWillUnmount() {
      window.removeEventListener('scroll', this.scrollHandler);
  }
  scrollHandler(e){
    let el = document.querySelector('.page');
    let max = el.scrollHeight - innerHeight;
    let calcPercent = (pageYOffset / max ) * 100;
    this.setState({percent: calcPercent});
  }
  render() {
    return (
      <div className="page">
        <Progress steps={5} completed={this.state.percent} color="#F24E4E"/>
        <Progress completed={this.state.percent} color="#EFAB56"/>
        <Progress steps={20} completed={this.state.percent}/>
        <Progress steps={33} completed={this.state.percent} color="#1B98E0"/>
        <Progress steps={100} completed={this.state.percent} color="#46427F"/>
      </div>
    );
  }
}