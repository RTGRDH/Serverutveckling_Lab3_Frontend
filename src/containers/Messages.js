import React from 'react';
import './Dashboard.css';
import { Table } from 'react-bootstrap';

class Messages extends React.Component{
    state = {
        messages: []
    }

    componentWillMount() {
        let requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        let url = "http://localhost:6969/getMessages?currentUser=" + sessionStorage.getItem('currentUser');
        fetch(url, requestOptions)
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    messages: data
                })
                console.log(this.state.messages);
            })
            .catch(error => console.log('error', error));
    }

    render()
    {
        let messages = this.state.messages.map((msg) => {
            return (
                <tr key={msg.id}>
                    <td>
                        {msg.title}
                    </td>
                    <td>
                        {msg.content}
                    </td>
                    <td>
                        {msg.fromUser.username}
                    </td>
                </tr>
            )
        });
        return (
            <div className = "Meddelanden">
                <Table>
                    <thead>
                    <tr>
                        <th>Titel</th>
                        <th>Innehåll</th>
                        <th>Skickad av</th>
                    </tr>
                    </thead>
                    <tbody>
                    {messages}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default Messages;