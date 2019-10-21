import * as Yup from 'yup';


export const USER_ID_SCHEMA = Yup
  .string()
  .strict(true)
  .matches(/^[a-zA-Z0-9]{4,20}$/);

export const USER_PASSWORD_SCHEMA = Yup
  .string()
  .strict(true)
  .matches(/^[a-zA-Z0-9`~!@#$%^&*(),.?"'+\-\/=_:;{}|<>\\\[\]]{8,20}$/);

export const USER_NAME_SCHEMA = Yup
  .string()
  .strict(true)
  .min(2)
  .max(10);

export const USER_CONTACT_SCHEMA = Yup
  .string()
  .strict(true)
  .min(0)
  .max(100)
  .default(null);

export const USER_ADDRESS_SCHEMA = Yup
  .string()
  .strict(true)
  .min(0)
  .max(100)
  .default(null);
