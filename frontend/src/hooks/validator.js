import * as Yup from 'yup';

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email обязателен для ввода')
    .email('Email введен некорректно'),
  password: Yup.string()
    .required('Пароль обязателен для ввода')
    .matches(/(?=.*[A-Z])/, 'Пароль должен содержать хотя бы одну заглавную букву')
    .matches(/(?=.*[0-9])/, 'Пароль должен содержать хотя бы одну цифру')
    .min(6, 'Пароль должен состоять минимум из 6 символов')
    .max(40, 'Максимальная длина пароля 40 символов'),
});

export const registerValidationSchema = Yup.object().shape({
  name: Yup.string().required('Имя обязательно для ввода').matches(/^[A-Za-z ]*$/, 'Имя должно содержать только буквы'),
  email: Yup.string()
  .required('Email обязателен для ввода')
  .email('Email введен некорректно'),
  password: Yup.string()
    .required('Пароль обязателен для ввода')
    .matches(/(?=.*[A-Z])/, 'Пароль должен содержать хотя бы одну заглавную букву')
    .matches(/(?=.*[0-9])/, 'Пароль должен содержать хотя бы одну цифру')
    .min(6, 'Пароль должен состоять минимум из 6 символов')
    .max(40, 'Максимальная длина пароля 40 символов'),
  confirmPassword: Yup.string()
    .required('Пароль обязателен для ввода')
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .matches(/(?=.*[A-Z])/, 'Пароль должен содержать хотя бы одну заглавную букву')
    .matches(/(?=.*[0-9])/, 'Пароль должен содержать хотя бы одну цифру')
    .min(6, 'Пароль должен состоять минимум из 6 символов')
    .max(40, 'Максимальная длина пароля 40 символов'),
})