import React from 'react'

class View extends React.Component {
    state ={
        controller: "",
        client: ""
    }
    render(){
        return(
            <div>
                <div>
                    Sign in as a Controller<br></br>
                    Controller: <input onChange={(e)=>{this.setState({controller: e.target.value})}} /><br></br>
                    Client: <input onChange={(e)=>{this.setState({client: e.target.value.toLowerCase()})}} />
                </div>
                <button onClick={()=>{
                    if (this.state.controller === this.props.admin) {
                        if(this.props.setClient){
                            this.props.setClient(this.state.client);
                        }
                        this.props.changeView(1)
                    } else this.props.changeView(0)
                }}>Submit</button>
                <br></br>
                or
                <br></br>
                <button onClick={()=>{
                    this.props.changeView(2)
                }}>Click Here For Your Virtual ETT Experience</button>
            </div>
        )
    }
}

export default View;