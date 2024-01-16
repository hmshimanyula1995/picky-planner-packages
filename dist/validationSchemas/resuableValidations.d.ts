import * as Yup from 'yup';
export declare const nameValidation: {
    firstName: Yup.StringSchema<string, Yup.AnyObject, undefined, "">;
    lastName: Yup.StringSchema<string, Yup.AnyObject, undefined, "">;
};
export declare const passwordValidation: {
    password: Yup.StringSchema<string, Yup.AnyObject, undefined, "">;
    confirmPassword: Yup.StringSchema<any, Yup.AnyObject, undefined, "">;
};
export declare const passwordResetValidation: {
    password: Yup.StringSchema<string, Yup.AnyObject, undefined, "">;
    confirmPassword: Yup.StringSchema<any, Yup.AnyObject, undefined, "">;
    currentPassword: Yup.StringSchema<string, Yup.AnyObject, undefined, "">;
};
export declare const emailValidation: {
    email: Yup.StringSchema<string, Yup.AnyObject, undefined, "">;
};
export declare const phoneValidation: {
    phone: Yup.StringSchema<string, Yup.AnyObject, undefined, "">;
};
export declare const termsValidation: {
    agreedToTerms: Yup.BooleanSchema<NonNullable<boolean | undefined>, Yup.AnyObject, undefined, "">;
};
