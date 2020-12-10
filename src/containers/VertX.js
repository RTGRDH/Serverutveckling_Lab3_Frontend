import React from 'react';
import Plot from 'react-plotly.js';
class VertX extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            xVals:[],
            yVals:[]
        }
    }
    async componentDidMount() {
        let requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        let url1 = "http://localhost:6972/getVals";
        /*let response = await fetch(url1, requestOptions);
        let data = await response.json();
        this.setState({
            xVal: data.X
        })
        console.log(data.X);*/
        await fetch(url1, requestOptions)
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    xVals: data.X,
                    yVals: data.Y
                })
                console.log(data.X);
                console.log(data.Y);
            })
            .catch(error => console.log('error', error));
    }
    render(){
        console.log(this.state.xVals)
        return(
            <div className={"line"}>
                <Plot
                    data={[
                        {
                            x: this.state.xVals,
                            y: this.state.yVals,
                            type: 'scatter',
                            mode: 'lines',
                            marker: {color: 'red'},
                        },
                        //{type: 'line', x: this.state.xVals, y: this.state.yVals},
                    ]}
                    layout={ {width: 500, height: 500, title: 'A Line Chart'} }
                />
                <Plot
                    data={[
                        {
                            type: 'bar',
                            y:[this.state.yVals[0],this.state.yVals[5],this.state.yVals[67]],
                            marker: {color: 'blue'},
                        }
                    ]}
                    layout={ {width: 500, height: 500, title: 'A bar Chart'} }
                />
            </div>

        );
    }
}

export default VertX;