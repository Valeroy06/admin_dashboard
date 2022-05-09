import React from 'react'
import Images from "../img/Images";
import { TableHTMLAttributes } from 'react';
import styles from "../styles/modules/table.module.scss"


const List = () => {
    const rows = [
        {
            id: 1,
            img: Images.man,
            ticketdetails: "Contact Email not Linked",
            update: "Updated 1day ago",
            customer: "Tome Cruise",
            lastupdate: "On 24.05.2019",
            date: "May 26,2019",
            time: "6.30",
            Priority: "high",
        },
        {
            id: 2,
            img: Images.man,
            ticketdetails: "Contact Email not Linked",
            update: "Updated 1day ago",
            customer: "Tome Cruise",
            lastupdate: "On 24.05.2019",
            date: "May 26,2019",
            time: "6.30",
            Priority: "low",
        },
        {
            id: 3,
            img: Images.man,
            ticketdetails: "Contact Email not Linked",
            update: "Updated 1day ago",
            customer: "Tome Cruise",
            lastupdate: "On 24.05.2019",
            date: "May 26,2019",
            time: "6.30",
            Priority: "high",
        },
        {
            id: 4,
            img: Images.man,
            ticketdetails: "Contact Email not Linked",
            update: "Updated 1day ago",
            customer: "Tome Cruise",
            lastupdate: "On 24.05.2019",
            date: "May 26,2019",
            time: "6.30",
            Priority: "normal",
        },
        {
            id: 5,
            img: Images.man,
            ticketdetails: "Contact Email not Linked",
            update: "Updated 1day ago",
            customer: "Tome Cruise",
            lastupdate: "On 24.05.2019",
            date: "May 26,2019",
            time: "6.30",
            Priority: "high",
        },
        {
            id: 6,
            img: Images.man,
            ticketdetails: "Contact Email not Linked",
            update: "Updated 1day ago",
            customer: "Tome Cruise",
            lastupdate: "On 24.05.2019",
            date: "May 26,2019",
            time: "6.30",
            Priority: "normal"
        },
        {
            id: 7,
            img: Images.man,
            ticketdetails: "Contact Email not Linked",
            update: "Updated 1day ago",
            customer: "Tome Cruise",
            lastupdate: "On 24.05.2019",
            date: "May 26,2019",
            time: "6.30",
            Priority: "low",
        },
        {
            id: 8,
            img: Images.man,
            ticketdetails: "Contact Email not Linked",
            update: "Updated 1day ago",
            customer: "Tome Cruise",
            lastupdate: "On 24.05.2019",
            date: "May 26,2019",
            time: "6.30",
            Priority: "normal",
        },
    ]
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th className="TableCell">Ticket details</th>
                    <th className="TableCell">Customer name</th>
                    <th className="TableCell">Date</th>
                    <th className="TableCell">Priority</th>
                </tr>
            </thead>
            <tbody>
                {rows.map((row) => (
                    <tr key={row.id}>
                        <td className='tix'>
                            <img src={row.img} className='im'alt="man" />
                            {row.ticketdetails}<br/>
                            {row.update}
                        </td>
                        <td className='customer'>
                            {row.customer}<br />
                            {row.lastupdate}
                        </td>
                        
                        <td className='date'>
                            {row.date}<br />
                            {row.time}
                        </td>
                        <td>{row.Priority}</td>
                        <td> <img src={Images.options} className="options" alt="options" /></td>
                    </tr>


                ))}
            </tbody>
        </table>
    )
}

export default List