import React from 'react'
import Images from "../img/Images";
import { TableHTMLAttributes } from 'react';
import styles from "../styles/modules/table.module.scss"


const Table = () => {
    const rows = [
        {
            id: 1,
            img: Images.man,
            ticket: {
                ticketdetails: "Contact Email not Linked",
                update: "Updated 1day ago"
            },
            custom: {
                customer: "Tome Cruise",
                lastupdate: "On 24.05.2019"
            },
            date: {
                date: "May 26,2019",
                time: "6.30"
            },
            Priority: "high",
        },
        {
            id: 2,
            img: Images.man,
            ticket: {
                ticketdetails: "Contact Email not Linked",
                update: "Updated 1day ago"
            },
            custom: {
                customer: "Tome Cruise",
                lastupdate: "On 24.05.2019"
            },
            date: {
                date: "May 26,2019",
                time: "6.30"
            },
            Priority: "high",
        },
        {
            id: 3,
            img: Images.man,
            ticket: {
                ticketdetails: "Contact Email not Linked",
                update: "Updated 1day ago"
            },
            custom: {
                customer: "Tome Cruise",
                lastupdate: "On 24.05.2019"
            },
            date: {
                date: "May 26,2019",
                time: "6.30"
            },
            Priority: "high",
        },
        {
            id: 4,
            img: Images.man,
            ticket: {
                ticketdetails: "Contact Email not Linked",
                update: "Updated 1day ago"
            },
            custom: {
                customer: "Tome Cruise",
                lastupdate: "On 24.05.2019"
            },
            date: {
                date: "May 26,2019",
                time: "6.30"
            },
            Priority: "high",
        },
        {
            id: 5,
            img: Images.man,
            ticket: {
                ticketdetails: "Contact Email not Linked",
                update: "Updated 1day ago"
            },
            custom: {
                customer: "Tome Cruise",
                lastupdate: "On 24.05.2019"
            },
            date: {
                date: "May 26,2019",
                time: "6.30"
            },
            Priority: "high",
        },
        {
            id: 6,
            img: Images.man,
            ticket: {
                ticketdetails: "Contact Email not Linked",
                update: "Updated 1day ago"
            },
            custom: {
                customer: "Tome Cruise",
                lastupdate: "On 24.05.2019"
            },
            date: {
                date: "May 26,2019",
                time: "6.30"
            },
            Priority: "high"
        },
        {
            id: 7,
            img: Images.man,
            ticket: {
            ticketdetails:"Contact Email not Linked",
            update:"Updated 1day ago"
        },
            custom: {
                 customer:"Tome Cruise",
            lastupdate:"On 24.05.2019"
            },
            date: {
            date:"May 26,2019",
            time:"6.30"
        },
            Priority:"high",
        },
        {
            id: 8,
            img: Images.man,
            ticket: {
            ticketdetails:"Contact Email not Linked",
            update:"Updated 1day ago"
        },
            custom: {
                 customer:"Tome Cruise",
            lastupdate:"On 24.05.2019"
            },
            date: {
            date:"May 26,2019",
            time:"6.30"
        },
            Priority:"high",
        },
    ]
    return (
        <table className={styles.table}>
<th>
    <tr>
        <td className="TableCell">Ticket details</td>
        <td className="TableCell">Customer name</td>
        <td className="TableCell">Date</td>
        <td className="TableCell">Priority</td>
    </tr>
</th>
        </table>
    )
}

export default Table