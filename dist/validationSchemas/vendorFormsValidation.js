"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.DetailsInfoValidationSchema = void 0;
var Yup = __importStar(require("yup"));
var resuableValidations_1 = require("./resuableValidations");
exports.DetailsInfoValidationSchema = Yup.object().shape(__assign(__assign(__assign({}, resuableValidations_1.phoneValidation), resuableValidations_1.emailValidation), { website: Yup.string()
        .matches(/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/, 'Please enter a valid website address')
        .required('Please enter website'), company: Yup.string()
        .required('Company is required')
        .min(3, 'Company name must be at least 3 characters long')
        .max(30, 'Company name must be no more than 30 characters long')
        .matches(/^[a-zA-Z ]+$/, 'Company name can only contain letters and spaces'), facebook: Yup.string().url('Please enter a valid Facebook URL'), twitter: Yup.string().url('Please enter a valid Twitter URL'), instagram: Yup.string().url('Please enter a valid Instagram URL'), serviceTowns: Yup.array().of(Yup.string().required('City is required')), minGuests: Yup.number()
        .typeError('Please enter a valid number')
        .integer('Please enter a valid number')
        .min(0, 'Must be at least 0'), maxGuests: Yup.number()
        .typeError('Please enter a valid number')
        .integer('Please enter a valid number')
        .min(1, 'Must be at least 1')
        .moreThan(Yup.ref('minGuests'), 'Must be more than minimum guests'), tagline: Yup.string()
        .required('Tagline is required')
        .min(15, "Tagline must be at least 15 characters long e.g. 'Kenya's best wedding planner'")
        .max(200, 'Tagline must be no more than 200 characters long')
        .matches(/^[a-zA-Z0-9'.,!?;:()\- ]+$/, 'Tagline contains invalid characters.'), description: Yup.string()
        .required('Description is required')
        .min(50, 'Description must be at least 50 characters long')
        .max(2000, 'Description must be no more than 2000 characters long'), businessTown: Yup.string().required('Town of business premise is required'), registrationType: Yup.string().required('Please select your registration type') }));
