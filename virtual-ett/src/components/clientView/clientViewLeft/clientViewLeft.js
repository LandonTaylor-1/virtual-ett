import React from 'react';
import './clientViewLeft.scss';
import 'whatwg-fetch';
import io from 'socket.io-client';
// const socket = io.connect('https://veet.herokuapp.com');
const socket = io.connect('http://localhost:3001');

class ClientViewLeft extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            response: {},
            display: []
        }
    }
    componentDidMount(){
        socket.emit('pesLeft', JSON.stringify({
            location: this.props.locationLeft,
            color: this.props.colorLeft
        }));
        socket.on('pesLeft', (data) => {this.setState({response: JSON.parse(data)})})
    }
    pesLeft = () => {
        let content =
            <div
                key={this.state.display.length + 1}
                style={{backgroundColor: this.props.colorLeft}}>
                    {this.state.display.length + 1}.) - {this.props.locationLeft} - {this.props.colorLeft || "White"} - Anxiety:
                    <select onChange={(e)=>{
                        fetch('/pesleft', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                location: this.props.locationLeft,
                                color: this.props.colorLeft || 'White',
                                level: e.target.value,
                                name: this.props.client
                            })
                        })
                        .then(res=>res.json())
                        .catch(console.log)
                        console.log(JSON.stringify({
                            location: this.props.locationLeft,
                            color: this.props.colorLeft || 'White',
                            level: e.target.value,
                            name: this.props.client}))
                        }
                    }>
                        <option>Level</option>
                        <option value='10'>10</option>
                        <option value='9'>9</option>
                        <option value='8'>8</option>
                        <option value='7'>7</option>
                        <option value='6'>6</option>
                        <option value='5'>5</option>
                        <option value='4'>4</option>
                        <option value='3'>3</option>
                        <option value='2'>2</option>
                        <option value='1'>1</option>
                        <option value='0'>0</option>
                    </select>
            </div>
        const newContent = [content, ...this.state.display];
        this.setState({
            display: newContent
        })
        socket.emit('pesLeft', JSON.stringify({
            location: this.props.locationLeft,
            color: this.props.colorLeft
        }));
        socket.on('pesLeft', (data) => {this.setState({response: JSON.parse(data)})})
    }
    render(){
        let leftEyeView = this.props.pesViewLeft.map((view, i)=>{
            return <div
                key={i}
                view={view}
                id={view.id}
                className={view.className}
                style={view.id === this.state.response.location ? {backgroundColor: this.state.response.color} : {backgroundColor: 'black'}}
            ></div>
        })
        return(
        <div>
            <div>
                <button onClick={this.pesLeft} style={this.props.display !== 1 ? {visibility: 'hidden'} : {visibility: 'visible'}}>Send Left PES</button>
                {this.state.display}
            </div>
            <div id="container-lefter">
                <div id="container-left">
                    {leftEyeView}
                </div>
            </div>
        </div>
        )
    }
}

export default ClientViewLeft;