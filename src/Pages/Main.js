import React, { Component } from 'react';
import axios from 'axios';
import UserView from "../Components/UserView"

class Main extends Component {
    //const [UserInfo, setUserInfo] = useState([]);
    state = {
        UserInfo: {}
    };

    componentDidMount(){
        axios.get("https://api.github.com/users/andretanaka")
            .then(response => {
                const UserInfo = response.data;
                this.setState({UserInfo});
            })
    }



    render() {
        console.log("teste");
        console.log(this.state.UserInfo);
        return this.state.UserInfo ? (
            <div>
                <UserView user={this.state.UserInfo}/>
            </div>

        ) : <div>Usuario nao encontrado</div>
    }
//{this.state.UserInfo}
    //useEffect(() => {
    //    axios.get("https://api.github.com/users/andretanaka")
    //        .then(response => {
    //            setUserInfo(response.data);
    //            console.log((UserInfo));
    //        })
    //});

    //return(
    //)
}

export default Main