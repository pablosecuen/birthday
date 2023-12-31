"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Toaster, toast } from "sonner";
import { isValidName, isValidEmail, isSafeMessage } from "../../../utils/formValidation";

emailjs.init("nDkFXlv2Kmr_6HqHw");

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "Nombre",
    lastName: "Quien sos esa noche?",
    phone: "Teléfono",
    email: "Correo electrónico",
    message: "Escribe tu mensaje aquí",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Realizamos las validaciones
    if (!isValidName(formData.name)) {
      toast.error("Por favor, ingrese un nombre válido (solo letras).");
      return;
    }

    if (!isValidName(formData.lastName)) {
      toast.error("Por favor, ingrese un apellido válido (solo letras).");
      return;
    }

    if (!isValidEmail(formData.email)) {
      toast.error("Por favor, ingrese un correo electrónico válido.");
      return;
    }

    if (!isSafeMessage(formData.message)) {
      toast.error("El mensaje no puede contener contenido HTML o caracteres de riesgo.");
      return;
    }

    // Configura los parámetros del correo electrónico
    const emailParams = {
      from_name: formData.name + " " + formData.lastName,
      phone: formData.phone,
      email: formData.email,
      message: formData.message,
    };

    // Envía el correo electrónico utilizando EmailJS
    await emailjs.send("service_7apabaf", "template_ofkao8n", emailParams, "BjaDOr-Fp1JZhklEF");
    const promise = emailjs.send(
      "service_7apabaf",
      "template_ofkao8n",
      emailParams,
      "BjaDOr-Fp1JZhklEF"
    );
    toast.promise(promise, {
      loading: "Enviando correo por favor aguarde...",
      success: "Correo electrónico enviado con éxito.",
      error: "Error al enviar el correo electrónico.",
    });
    setFormData({
      name: "Nombre",
      lastName: "Apellido",
      phone: "Teléfono",
      email: "Correo electrónico",
      message: "Escribe tu mensaje mas warro aquí",
    });
  };

  return (
    <form
      className="p-4 md:w-1/2 md:mx-auto  m-auto  border-2 rounded-2xl lg:py-10 py-10 mt-20"
      id="contacto"
      onSubmit={handleSubmit}
    >
      <Toaster position="top-center" richColors />
      <h3 className="text-center pb-10 text-white  text-xl font-extrabold font-azonix">
        Formulario de confirmación
      </h3>
      <div className="w-full flex gap-4">
        <div className="relative mb-4 w-1/2">
          <label
            hidden={true}
            htmlFor="name"
            className={`absolute left-3 top-4 text-xs font-bold text-gray-700 ${
              formData.name ? "opacity-0" : "opacity-100"
            } transition-opacity pointer-events-none`}
          >
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            onFocus={() => setFormData((prevData) => ({ ...prevData, name: "" }))}
            onBlur={() => {
              if (!formData.name) {
                setFormData((prevData) => ({ ...prevData, name: "Nombre" }));
              }
            }}
            className="w-full px-3 py-2 pl-3 mt-1 text-sm text-gray-900 placeholder-transparent border rounded-md focus:outline-none focus:ring focus:border-secondary"
            placeholder="Nombre"
          />
        </div>
        <div className="relative mb-4  w-1/2">
          <label
            hidden={true}
            htmlFor="lastName"
            className={`absolute left-3 top-4 text-xs font-bold text-gray-700 ${
              formData.name ? "opacity-0" : "opacity-100"
            } transition-opacity pointer-events-none`}
          >
            lastName
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            onFocus={() => setFormData((prevData) => ({ ...prevData, lastName: "" }))}
            onBlur={() => {
              if (!formData.lastName) {
                setFormData((prevData) => ({ ...prevData, lastName: "Quien sos esa noche" }));
              }
            }}
            className="w-full px-3 py-2 pl-3 mt-1 text-sm text-gray-900 placeholder-transparent border rounded-md focus:outline-none focus:ring focus:border-secondary"
            placeholder="Quien sos esa noche"
          />
        </div>
      </div>
      <div className="relative mb-4">
        <label
          hidden={true}
          htmlFor="email"
          className={`absolute left-3 top-4 text-xs font-bold text-gray-700 ${
            formData.email ? "opacity-0" : "opacity-100"
          } transition-opacity pointer-events-none`}
        >
          E-mail
        </label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          onFocus={() => setFormData((prevData) => ({ ...prevData, email: "" }))}
          onBlur={() => {
            if (!formData.email) {
              setFormData((prevData) => ({ ...prevData, email: "email" }));
            }
          }}
          className="w-full px-3 py-2 pl-3 mt-1 text-sm text-gray-900 placeholder-transparent border rounded-md focus:outline-none focus:ring focus:border-secondary"
          placeholder="Correo electrónico"
        />
      </div>
      <div className="relative mb-4">
        <label
          hidden={true}
          htmlFor="phone"
          className={`absolute left-3 top-4 text-xs font-bold text-gray-700 ${
            formData.name ? "opacity-0" : "opacity-100"
          } transition-opacity pointer-events-none`}
        >
          Teléfono
        </label>
        <input
          placeholder="Teléfono"
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          onFocus={() => setFormData((prevData) => ({ ...prevData, phone: "" }))}
          onBlur={() => {
            if (!formData.phone) {
              setFormData((prevData) => ({ ...prevData, phone: "Teléfono" }));
            }
          }}
          className="w-full px-3 py-2 pl-3 mt-1 text-sm text-gray-900 placeholder-transparent border rounded-md focus:outline-none focus:ring focus:border-secondary"
        />
      </div>

      <div className="relative mb-4">
        <label
          hidden={true}
          htmlFor="message"
          className={`absolute  left-3 top-4 text-sm font-bold text-gray-700 ${
            formData.message ? "opacity-0" : "opacity-100"
          } transition-opacity pointer-events-none`}
        >
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Escribe tu mensaje aquí"
          rows={4}
          value={formData.message}
          onChange={handleInputChange}
          onFocus={() => setFormData((prevData) => ({ ...prevData, message: "" }))}
          onBlur={() => {
            if (!formData.message) {
              setFormData((prevData) => ({ ...prevData, message: "Escribe tu mensaje aquí" }));
            }
          }}
          className="w-full px-3 py-2 pl-3 mt-1 text-sm text-gray-900 placeholder-transparent border rounded-md resize-none focus:outline-none focus:ring focus:border-secondary"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full font-azonix px-4 py-2 hover:border-1 text-lg font-bold text-white bg-secondary rounded-md hover:border-2 hover:border-white hover:transition hover:duration-500 focus:outline-none focus:ring focus:border-yellow-600"
      >
        {" "}
        Enviar
      </button>
      <p className="text-center text-gray-500  mt-4 italic">
        no hay vuelta atrás o serás convertido en piedra
      </p>
    </form>
  );
};

export default ContactForm;
