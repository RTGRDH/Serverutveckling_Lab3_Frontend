import React, {useEffect} from 'react';
import './Dashboard.css';
import { Table } from 'react-bootstrap';

class otherLogs extends React.Component{
    state = {
        logs: []
    }

    componentWillMount() {
        let requestOptions = {
            method: 'POST',
            redirect: 'follow'
        };
        let url = "http://localhost:6969/getOtherUsersLogs?currentUser=" + sessionStorage.getItem('currentUser');
        fetch(url, requestOptions)
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    logs: data
                })
                console.log(this.state.logs);
            })
            .catch(error => console.log('error', error));
    }

    render()
    {
        let logs = this.state.logs.map((log) => {
            return (
                <tr key={log.id}>
                    <td>
                        {log.title}
                    </td>
                    <td>
                        {log.content}
                    </td>
                    <td>
                        {log.user.username}
                    </td>
                </tr>
            )
        });
        return (
            <div className = "Personliga Loggar">
                <Table>
                    <thead>
                    <tr>
                        <th>Titel</th>
                        <th>Innehåll</th>
                        <th>Skapad Av</th>
                    </tr>
                    </thead>
                    <tbody>
                    {logs}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default otherLogs;