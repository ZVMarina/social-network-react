import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    // можно через стрелочные функции
    activeteEditMode = () => {
        this.setState({
            editMode: true,
        })
    }

    //можно через bind
    deactiveteEditMode() {
        this.setState({
            editMode: false,
        })
    }

    render() {
        return (
            <div className="profile__status-container">
                {!this.state.editMode &&
                    <p className="profile__status" onDoubleClick={this.activeteEditMode}>{this.props.status}</p>
                }
                {this.state.editMode &&
                    <input className="profile__status-input" onBlur={this.deactiveteEditMode.bind(this)} value={this.props.status} autoFocus={true}></input>
                }
            </div>
        )
    }
}

export default ProfileStatus;