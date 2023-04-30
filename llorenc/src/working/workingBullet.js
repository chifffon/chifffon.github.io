import React from "react";

export default class WorkingBullet extends React.Component {
  state = { expanded: false };
  toggleText = () => {
    this.setState({ expanded: !this.state.expanded });
  };
  render() {
    const { title, text } = this.props;
    return (
      <div className="bullet-box">
        <div>
          <a onClick={this.toggleText}>
            {title}
          </a>
        </div>
        {this.state.expanded && <p className="bullet-paragraph">{text}</p>}
      </div>
    );
  }
}
