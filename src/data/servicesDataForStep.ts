import { services } from "./services";

export type ServiceOption = {
  name: string;
  price: string;
};

export type ServiceSimplified = {
  id: number;
  heading: string;
  subservices: ServiceOption[];
};

export const serviceDataSimplified: ServiceSimplified[] = services.map(service => ({
  id: service.id,
  heading: service.title,
  subservices: service.sections
    ? service.sections.flatMap(section => section.options)
    : [],
}));
