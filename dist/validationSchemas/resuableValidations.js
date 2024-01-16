"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.termsValidation = exports.phoneValidation = exports.emailValidation = exports.passwordResetValidation = exports.passwordValidation = exports.nameValidation = void 0;
var Yup = __importStar(require("yup"));
exports.nameValidation = {
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
exports.passwordValidation = {
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/[0-9]/, 'Password must contain at least one number')
        .matches(/[\^$*.\[\]{}()?\-"!@#%&/,><\':;|_~`]/, 'Password must contain at least one special character')
        .required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Password match is required'),
};
exports.passwordResetValidation = {
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/[0-9]/, 'Password must contain at least one number')
        .matches(/[\^$*.\[\]{}()?\-"!@#%&/,><\':;|_~`]/, 'Password must contain at least one special character')
        .required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Password match is required'),
    currentPassword: Yup.string().required('Current password is required'),
};
exports.emailValidation = {
    email: Yup.string()
        .trim()
        .lowercase()
        .email('Please enter a valid email address')
        .required('Email is required')
        .max(100, 'Email must be at most 100 characters'),
};
exports.phoneValidation = {
    phone: Yup.string().trim().required('Phone number is required'),
};
exports.termsValidation = {
    agreedToTerms: Yup.boolean()
        .oneOf([true], 'You must agree to the terms and conditions')
        .required('You must agree to the terms and conditions'),
};
