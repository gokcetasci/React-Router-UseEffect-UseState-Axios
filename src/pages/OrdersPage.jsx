import axios from 'axios';
import React, { useEffect, useState } from 'react'
import moment from 'moment';

function OrdersPage() {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        loadOrders();
    }, [])

    const loadOrders = () => {
        axios.get('https://northwind.vercel.app/api/orders')
            .then(res => {
                setOrders(res.data)
            })
    }

    const deleteOrder = (id) => {

        var result = window.confirm("Want to delete?");
        if (result) {

            axios.delete('https://northwind.vercel.app/api/orders/' + id)
                .then(res => {
                    loadOrders();
                })
        }
    }

    return (<>

        <h1 style={{display:'flex', justifyContent:'center'}}>Orders Length: {orders.length}</h1>
        <table className='w3-table w3-striped w3-border w3-bordered'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Customer Id</th>
                    <th>Employee Id</th>
                    <th>Order Date </th>
                    <th>Ship Name</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    orders && orders.map(item => {
                        return <tr>
                            <td>{item.id}</td>
                            <td>{item.customerId}</td>
                            <td>{item.employeeId}</td>
                            <td>{moment(item.orderDate).subtract(10, 'days').calendar()}</td>
                            <td>{item.shipName}</td>
                            <td><button onClick={() => deleteOrder(item.id)}>Delete</button></td>
                        </tr>
                    })
                }
            </tbody>
        </table>

    </>
    )
}

export default OrdersPage