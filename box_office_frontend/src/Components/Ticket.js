import React, { Component } from 'react';
import '../CSS/Ticket.css';

class Ticket extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: 0,
			title: "",
			submittedBy: "",
			dateSubmitted: "",
			lastUpdated: "",
			status: ""
		}
	}


  render() {
    return (
      <div className="ticketdiv">
      	<span className="ticket">{this.props.title}</span>
      	<span className="ticket">{this.props.submittedBy}</span>
        <span className="ticket">{this.props.dateSubmitted}</span>
        <span className="ticket">{this.props.lastUpdated}</span>
        <span className="ticket">{this.props.status}</span>
      </div>
    );
  }
}

export default Ticket;

