import React from "react";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    const templateParams = {
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message
  };

    e.target.reset();

    emailjs.send('contact_service_prasouk','contact_form_prasouk', templateParams, 'ITZ9P1DRI_r-UFkZf')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
        console.log('FAILED...', err);
      });
    
    console.log("Message submited: " + JSON.stringify(data));
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
          <button type="submit" className="color">
            <span className="wrapper">
              <span className="first">Envoyer</span>
              <span className="second">Envoyer</span>
            </span>
          </button>
        </div>
        {/* End tokyo_tm_button */}
      </form>
      {/* End contact */}
    </>
  );
};

export default Contact;
