import { ReactNode } from "react";

export interface Path {
  name: string;
  link: string;
  icon: ReactNode;
}

export interface Contact {
  name: string;
  id?: string;
  phone: string;
  email: string;
  website: string;
}
