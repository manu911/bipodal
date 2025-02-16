import React, { ReactNode, SyntheticEvent } from 'react';
import ApiCalendar from 'react-google-calendar-api';

const config = {
    "clientId": process.env.CLIENTID_CALENDAR?.toString()?? "",
    "apiKey": process.env.APIKEY_CALENDAR?.toString() ?? "" ,
    "scope": "https://www.googleapis.com/auth/calendar",
    "discoveryDocs": [
        "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"
    ]
}

const apiCalendar = new ApiCalendar(config)

export default class DoubleButton extends React.Component {
    constructor(props: object) {
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    public handleItemClick(event: SyntheticEvent<object>, name: string): void {
        if (name === 'sign-in') {
            console.log(apiCalendar.handleAuthClick())
        } else if (name === 'sign-out') {
            console.log(apiCalendar.handleSignoutClick());
        }
    }
    public handleCreate(): void {
        
        const time:number=25;
        const summary: string = "my summary";
        const description: string = "There is no description";
        const calendarId : string  = "";
        const timeZone : string = "Europe/Zurich" 
        apiCalendar.createEventFromNow({time, summary, description}, calendarId , timeZone);
        
    }

           
        
    
    render(): ReactNode {
        return (
            <>
                <button
                    onClick={(e) => this.handleItemClick(e, 'sign-in')}
                >
                    sign-in
                </button>
                <button
                    onClick={(e) => this.handleItemClick(e, 'sign-out')}
                >
                    sign-out
                </button>
                <button
                    onClick={() => this.handleCreate()}
                >
                    create
                </button>
            </>
        );
    }
}

