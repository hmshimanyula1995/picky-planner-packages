export enum ApplicationStage {
  InfoCollected = 'INFO COLLECTED',
  AmenitiesAdded = 'AMENITIES ADDED',
  DocumentsUploaded = 'DOCUMENTS UPLOADED',
  GalleryUpdated = 'GALLERY UPDATED',
  PaymentReceived = 'PAYMENT SUBMITTED',
  PaymentSubmitted = 'IN REVIEW',
  Approved = 'APPROVED',
  Canceled = 'CANCELED',
  DocumentsRequested = 'DOCUMENTS REQUESTED',
  Rejected = 'REJECTED',
}

export interface VendorApplicationForm {
  profilePageImage: {
    url: string;
    uploadedAt: string;
    type: string;
    name: string;
  }[];

  mpesaConfirmation: string;

  amenities: {
    categories: {
      OutdoorParties: string[];
      TransportServices: string[];
    };
  };

  currentStage: string;

  video: {
    uploadedAt: string;
    name: string;
    type: string;
    url: string;
  }[];

  userId: string;

  businessPermitDetails: {
    uploadedAt: string;
    url: string;
    name: string;
    type: string;
  }[];

  personalIdDetails: {
    type: string;
    name: string;
    url: string;
    uploadedAt: string;
  }[];

  landingImage: {
    name: string;
    uploadedAt: string;
    url: string;
    type: string;
  }[];

  details: {
    maxGuests: number;
    vendorId: string;
    businessHours: {
      day: string;
      open: string;
      close: string;
      isClosed: boolean;
    }[];
    company: string;
    description: string;
    email: string;
    facebook: string;
    instagram: string;
    twitter: string;
    phone: string;
    website: string;
    registrationType: string;
    serviceTowns: string[] | 'Country Wide';
    tagline: string;
  };
  smallImages: {
    name: string;
    url: string;
    uploadedAt: string;
    type: string;
  }[];
  createdAt: Date;
}
