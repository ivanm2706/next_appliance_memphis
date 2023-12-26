'use client'

import React, { useState } from 'react';
import { sendEmail } from '../../helpers/sendEmail';
import { DataEmailJsType } from '../../types/DataEmailJsType';

export function FooterForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handlerInputPhone = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(value);
  };

  const handlerInputName = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setName(value);
  };

  const resetForm = () => {
    setName('');
    setPhone('');
  };

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data: DataEmailJsType = {
      name,
      phone: +phone.replace(/\D/g, ''),
    };

    sendEmail(data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err))
      .finally(() => resetForm());
  };

  return (
    <form className="form form--fastContact" onSubmit={handlerSubmit}>
      <h3 className="form__title">Fast Contact</h3>

      <input
        required
        value={name}
        onChange={handlerInputName}
        type="text"
        name="name"
        placeholder="Name*"
      />
      <input
        required
        value={phone}
        onChange={handlerInputPhone}
        type="number"
        name="tel"
        placeholder="Phome number*"
      />

      <button
        type="submit"
        className="button button--book button--long"
      >
        send
      </button>
    </form>
  );
}
