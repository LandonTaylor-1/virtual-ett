import React from 'react';

class Session extends React.Component {
    state = {
        pastClient: "",
        sessionLeft: [],
        sessionRight: []
    }
    componentDidMount(){
        
    }

    render(){
        let viewSessionLeft = this.state.sessionLeft.map((client, i)=>{
            return <div
                key={i}
                style={{backgroundColor: client.color}}
                >
                    {i+1}.) - {client.location} - {client.color || "White"} - Anxiety: {client.level}
                </div>})
        let viewSessionRight = this.state.sessionRight.map((client, i)=>{
            return <div
                key={i}
                style={{backgroundColor: client.color}}
                >
                    {i+1}.) - {client.location} - {client.color || "White"} - Anxiety: {client.level}
                </div>})
        return(
            <div>
                <input onChange={(e)=>{this.setState({pastClient: e.target.value.toLowerCase()})}} />
                <button onClick={()=>{
                    fetch(`/pesleft/${this.state.pastClient}`)
                    .then(res=>res.json())
                    .then(session=>{this.setState({sessionLeft: session})});
                    fetch(`/pesright/${this.state.pastClient}`)
                    .then(res=>res.json())
                    .then(session=>{this.setState({sessionRight: session})})}}>
                View Session</button>
                {viewSessionLeft}{viewSessionRight}
            </div>
        )
    }
}

export default Session;