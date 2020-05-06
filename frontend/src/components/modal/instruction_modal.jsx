import React from 'react';

import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';


import Logo from '../../public/COVID415.png';
import TaskList from '../../public/tasklist.png'

class InstructionModal extends React.Component {
    render() {
        return (
            <div className="modal-welcome-container">
                <div className="modal-welcome-heading">
                    <img src={ Logo } className='welcome-logo' alt="welcome-logo" />
                    <div className ='modal-welcome-header-text'>¡Bienvenido, vecino! Lea a continuación para saber cómo funciona COVID-Paris.</div>
                </div>
                <div className="modal-welcome-body">
                        <div className="welcome-section-1">
                            <div className="modal-body-header">Cómo ser voluntario:</div>
                            <div className="modal-body-text">Inscríbete y mira las solicitudes de los vecinos cercanos.</div>
                            <br />
                            <div className="modal-body-text">Una vez que haya aceptado una solicitud, compartiremos la información de contacto de su vecino para que pueda ponerse en contacto.</div>
                            <button className="continue-button" onClick={this.props.closeModal}>Continuar </button>
                        </div>
                        <div className="welcome-section-2 nomobile">
                            <img src={TaskList} className="modal-splash" alt="task-map" />
                            <div className="prototype-note">Nota: COVID-PARIS está actualmente es un prototipo.</div>
                        </div>
                </div>
            </div>
        )
    }
};


const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(null, mDTP)(InstructionModal);