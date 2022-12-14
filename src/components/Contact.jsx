import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#282C34',
    border: 'none',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px'
  },
  overlay: {
    zIndex: 1000,
    backgroundColor: 'rgba(30, 30, 30, 0.7)'
  }
};


const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("Le message a bien été envoyé ! 👍");
  Modal.setAppElement(document.getElementById('root'));

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const onSubmit = async (data, e) => {
    const templateParams = {
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message
    };

    try {
      const response = await emailjs.send('contact_service_prasouk', 'contact_form_prasouk', templateParams, 'ITZ9P1DRI_r-UFkZf')
  
      if (response.status.ok) { // opposite behavior with !response.ok
        setModalMessage("Le message n'a pas pu être envoyé ! 😣")

        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        )
      } else {
        e.target.reset();
        // console.log("Message submited: " + JSON.stringify(data));
      }
    }
    catch (error) {
      // console.log(error, "email could not be sent")
    }
    finally {
      openModal()
    }
  };

  return (
    <>
      <form className="contact_form" onSubmit={handleSubmit(onSubmit)}>
        <div className="first_row">
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="Nom *"
          />
          {errors.name && errors.name.type === "required" && (
            <span className="invalid-feedback">Votre nom est requis</span>
          )}
        </div>
        {/* End .first_row */}

        <div className="second">
          <div className="left">
            <input
              {...register(
                "email",
                {
                  required: "Votre email est requis",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Le mail n'est pas valide",
                  },
                },
                { required: true }
              )}
              type="email"
              placeholder="Email *"
            />
            {errors.email && (
              <span className="invalid-feedback">{errors.email.message}</span>
            )}
          </div>
          <div className="right">
            <input
              {...register("subject", { required: true })}
              placeholder="Sujet *"
            />
            {errors.subject && (
              <span className="invalid-feedback">Le sujet est requis</span>
            )}
          </div>
        </div>
        {/* End .second */}

        <div className="third">
          <textarea
            {...register("message", { required: true })}
            placeholder="Message *"
          ></textarea>
          {errors.message && (
            <span className="invalid-feedback">Un message est requis</span>
          )}
        </div>
        {/* End .third */}

        <div className="beny_tm_button">
          <button type="submit" className="color beny_tm_button_form">
            <span className="wrapper">
              <span className="first">Envoyer</span>
              <span className="second">Envoyer</span>
            </span>
          </button>
        </div>
        {/* End tokyo_tm_button */}
      </form>
      {/* End contact */}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        shouldReturnFocusAfterClose={false}
        style={customStyles}
        contentLabel="Form Confirmation Modal"
      >
        <p>{modalMessage}</p>
        <button className="modal-button" onClick={closeModal}>Fermer</button>
      </Modal>
    </>
  );
};

export default Contact;
