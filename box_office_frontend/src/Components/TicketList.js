import React, { Component } from 'react';
import '../CSS/TicketList.css';
import Ticket from '../Components/Ticket.js'

class TicketList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            tickets: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:8000/tickets")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded:true,
                        tickets: result
                    });
                    // console.log(this.state.isLoaded);
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }




    render() {
        const {error, isLoaded, tickets } = this.state;
        if(error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div>
                	<div className="listview">
                		<span className="listheader">
                			Title
                		</span>
                		<span className="listheader">
                			Submitted By
                		</span>
                		<span className="listheader">
                			Date Submitted
                		</span>
                		<span className="listheader">
                			Last Updated
                		</span>
                		<span className="listheader">
                			Status
                		</span>
                	</div>
                    <div>
                        {tickets.map(ticket => (
                            <div key={ticket.id}>
                                <Ticket title={ticket.title} submittedBy={ticket.submittedBy} dateSubmitted={ticket.dateSubmitted} lastUpdated={ticket.lastUpdated} status={ticket.status}>
                                    
                                </Ticket>
                            </div> 
                        ))}
                    </div>
                </div>
            );
        }
    }
}

export default TicketList;