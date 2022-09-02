import React from "react";
import { connect } from "react-redux";
import { doNewItem, getLinks } from '../../redux/mainReducer';
import { Navigate } from "react-router-dom";
import MainPage from "./MainPage";

class MainPageContainer extends React.Component {

    componentDidMount() {
        this.props.getLinks()
    }

    render() {
        return (
            <>
                {!this.props.isAuth ? <Navigate to='/' /> : <MainPage isAuth={this.props.isAuth}
                    login={this.props.login} doNewItem={this.props.doNewItem}/>
                }
                <table>
                    <tr><th>Short link</th><th>Target link</th><th>Counter</th></tr>
                    {this.props.links.map(item => <tr key={item.id}><th>{item.short}</th><th>{item.target}</th><th>{item.counter}</th></tr>)}
                </table>
                

            </>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        links: state.main.links,
    }
};

export default connect(mapStateToProps, { doNewItem, getLinks })(MainPageContainer);