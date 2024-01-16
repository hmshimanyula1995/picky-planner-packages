import { UserRoles } from '../roles/roles.i';

export interface VendorAccountInfo {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  createdAt?: string;
  displayName: string;
  occupation: string;
  termsAccepted: boolean;
  uid: string;
  isAdmin: boolean;
  vendorId: string;
  roles: UserRoles;
}

export interface Vendor {
  email: string;
  firstName: string;
  lastName: string;
  id: string;
  isAdmin: boolean;
  userDetails: VendorAccountInfo;
}
