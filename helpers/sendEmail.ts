import emailjs from '@emailjs/browser';
import { DataEmailJsType } from '../types/DataEmailJsType';
import { PublicKey, ServiceID, TemplateID } from '../utils/emailJs';

export const sendEmail = async (data: DataEmailJsType) => {
  try {
    if (
        ServiceID === undefined
        || TemplateID === undefined
        || PublicKey === undefined
      ) {
      throw new Error('Error data for sending email');
    }

    const request = await emailjs.send(
      ServiceID, //Service ID
      TemplateID, //Template ID
      data,
      PublicKey, //Public Key
    );

    return request;
  } catch {
    throw new Error('Error sending email');
  }
};
