import React, { Component } from 'react';
import '../CSS/TicketList.css';
import Ticket from '../Components/Ticket.js'

class TicketList extends Component {
  render() {
    return (
    	<div class="listview">
    		<span class="listheader">
    			Name
    		</span>
    		<span class="listheader">
    			Submitted By
    		</span>
    		<span class="listheader">
    			Date Submitted
    		</span>
    		<span class="listheader">
    			Last Updated
    		</span>
    		<span class="listheader">
    			Status
    		</span>
    	</div>
    );
  }
}

export default TicketList;