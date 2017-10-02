/**
 * created/ 01 OCT 2017
 * author/ eeshiken
 */

import React, { Component } from 'react';

class Datetime extends Component {
    constructor(props) {
        super(props);
        this.state = {datetime: `000 00-000-0000 | 00:00`};
    }

    getTime() {
        const zero = n => n < 10 ? "0" +  n : n;

        setInterval(() => {   
            let d, year, month, day, hour, minute, dofweek, dt;
            
            d = new Date();
            year = zero(d.getFullYear());
            month = d.getMonth();
            day = zero(d.getDate());
            hour = zero(d.getHours());
            minute = zero(d.getMinutes());
            //second = zero(d.getSeconds());
            dofweek = d.getDay();
    
            switch (dofweek) {
                case 0:dofweek="SUN";break;
                case 1:dofweek="MON";break;
                case 2:dofweek="TUE";break;
                case 3:dofweek="WED";break;
                case 4:dofweek="THU";break;
                case 5:dofweek="FRI";break;
                case 6:dofweek="SAT";break;
                default:dofweek="NAN";break;
            }
            switch (month) {
                case 0:month = "JAN";break;
                case 1:month = "FEB";break;
                case 2:month = "MAR";break;
                case 3:month = "APR";break;
                case 4:month = "MAY";break;
                case 5:month = "JUN";break;
                case 6:month = "JUL";break;
                case 7:month = "AUG";break;
                case 8:month = "SEP";break;
                case 9:month = "OCT";break;
                case 10:month = "NOV";break;
                case 11:month = "DEC";break;
                default:month="NAN";break;
            }
    
            dt = `${dofweek} ${day}-${month}-${year} | ${hour}:${minute}`;

            this.setState({
                datetime: dt
            });
        }, 1000);
    }

    componentDidMount() {
        this.interval = setInterval(() => this.getTime(), 1000);
    }

    render() {
        return <div id="datetime">{this.state.datetime}</div>
    }
}

function Time(props) {
    return (
        <dateheader>
            <Datetime />
        </dateheader>
    )
}

export default Time