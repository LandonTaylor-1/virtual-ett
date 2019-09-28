import React from 'react';
import './clientViewRight.scss';
import 'whatwg-fetch';
import io from 'socket.io-client';
// const socket = io.connect('https://veet.herokuapp.com');
const socket = io('http://localhost:3003');

class ClientViewRight extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            response: {},
            display: []
        }
    }
    componentDidMount(){
        socket.emit('pesRight', JSON.stringify({
            location: this.props.locationRight,
            color: this.props.colorRight
        }));
        socket.on('pesRight', (data) => {this.setState({response: JSON.parse(data)})})
    }
    pesRight = () => {
        let content =
            <div
                key={this.state.display.length + 1}
                style={{backgroundColor: this.props.colorRight}}>
                    {this.state.display.length + 1}.) - {this.props.locationRight} - {this.props.colorRight || "White"} - Anxiety:
                    <select onChange={(e)=>{
                        fetch('/pesright', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                location: this.props.locationRight,
                                color: this.props.colorRight || 'White',
                                level: e.target.value,
                                name: this.props.client
                            })
                        })
                        .then(res=>res.json())
                        .catch(console.log)
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
        socket.emit('pesRight', JSON.stringify({
            location: this.props.locationRight,
            color: this.props.colorRight
        }));
        socket.on('pesRight', (data) => {this.setState({response: JSON.parse(data)})})
    }
    render(){
        let rightEyeView = this.props.pesViewRight.map((view, i)=>{
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
                <button onClick={this.pesRight} style={this.props.display !== 1 ? {visibility: 'hidden'} : {visibility: 'visible'}}>Send Right PES</button>
                {this.state.display}
            </div>
            <div id="container-righter">
                <div id="container-right">
                    {rightEyeView}
                </div>
            </div>
        </div>
        )
    }
}

export default ClientViewRight;