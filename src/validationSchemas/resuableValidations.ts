import * as Yup from 'yup';
export const nameValidation = {
  firstName: Yup.string()
    .trim()
    .min(1, 'First name must be at least 1 character')
    .max(20, 'First name must be at most 20 characters')
    .matches(/^[a-zA-Z]+$/, 'First name can only contain letters')
    .required('First name is required'),
  lastName: Yup.string()
    .trim()
    .min(1, 'Last name must be at least 1 character')
    .max(20, 'Last name must be at most 20 characters')
    .matches(/^[a-zA-Z]+$/, 'Last name can only contain letters')
    .required('Last name is required'),
};

export const passwordValidation = {
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(
      /[\^$*.\[\]{}()?\-"!@#%&/,><\':;|_~`]/,
      'Password must contain at least one special character'
    )
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null as any], 'Passwords must match')
    .required('Password match is required'),
};

export const passwordResetValidation = {
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(
      /[\^$*.\[\]{}()?\-"!@#%&/,><\':;|_~`]/,
      'Password must contain at least one special character'
    )
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null as any], 'Passwords must match')
    .required('Password match is required'),

  currentPassword: Yup.string().required('Current password is required'),
};

export const emailValidation = {
  email: Yup.string()
    .trim()
    .lowercase()
    .email('Please enter a valid email address')
    .required('Email is required')
    .max(100, 'Email must be at most 100 characters'),
};

export const phoneValidation = {
  phone: Yup.string().trim().required('Phone number is required'),
};

export const termsValidation = {
  agreedToTerms: Yup.boolean()
    .oneOf([true], 'You must agree to the terms and conditions')
    .required('You must agree to the terms and conditions'),
};
