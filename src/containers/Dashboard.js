import React, {useEffect} from 'react';
import './Dashboard.css'

class Dashboard extends React.Component{
    constructor(props)
    {
        super(props)
        this.state = {
            logs : []
        }
    }

    componentDidMount() {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        fetch("http://localhost:6969/getMessages?currentUser=ernst", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    render()
    {
        const columns =[
            {
                Header: "Subject",
                accessor: "title"
            },
            {
                Header: "Content",
                accessor: "content"
            }
        ]
        return (
            <h1>Skit</h1>
        );
    }
}

export default Dashboard;