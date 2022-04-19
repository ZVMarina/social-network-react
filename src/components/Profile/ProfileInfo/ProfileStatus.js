import React from "react";
import Preloader from "../../Preloader";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
        isLoading: false,
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
        });

        this.setState({
            isLoading: true,
        })

        this.props.updateStatus(this.state.status)
            .then(() => {
                this.setState({
                    isLoading: false,
                })
            })
    }

    updateStatusHandler = (evt) => {
        this.setState({
            status: evt.currentTarget.value,
        })
    }

    render() {
        return (
            <div className="profile__status-container">
                {!this.state.editMode &&
                    <p className="profile__status" onClick={this.activeteEditMode}>{this.props.status || 'Status should be here'}</p>
                }
                {this.state.editMode &&
                    <input className="profile__status-input"
                        onBlur={this.deactiveteEditMode.bind(this)}
                        value={this.state.status}
                        onChange={this.updateStatusHandler}
                        autoFocus={true}>
                    </input>
                }
                {this.state.isLoading && <Preloader />}
            </div>
        )
    }
}

export default ProfileStatus;