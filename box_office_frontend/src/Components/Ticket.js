import React, { Component } from 'react';
import '../CSS/Ticket.css';

class Ticket extends Component {

	handleClick(e) {
		console.log('title was clicked', this.props.id);
	}


	render() {
	    return (
	    	<div className="ticketdiv">
		    	<span className="ticket" onClick={(e) => this.handleClick()}>{this.props.title}</span>
		      	<span className="ticket">{this.props.submittedBy}</span>
		        <span className="ticket">{this.props.dateSubmitted}</span>
		        <span className="ticket">{this.props.lastUpdated}</span>
		        <span className="ticket">{this.props.status}</span>
	      	</div>
	    );
  	}
}

export default Ticket;

