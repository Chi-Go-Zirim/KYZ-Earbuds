export interface FeatureItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string; // Lucide icon name
}

export interface UseCaseItem {
  id: string;
  emoji: string;
  name: string;
  description: string;
  iconName: string;
}

export interface SpecItem {
  value: string;
  label: string;
  detail: string;
}

export interface WaitlistForm {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  interest: string;
  colour: string;
}
