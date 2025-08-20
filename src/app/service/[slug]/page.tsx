import React from "react";
import { services } from "@/data/services";
import ServiceDetail from "@/pages/ServiceDetail";
import Breadcrumb from "../../../global/Breadcrumb";
import BackButton from "@/components/BackButton";

interface Params {
  slug: string;
}

export default function ServicePage({ params }: { params: Params }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return <div className="p-8">Service not found.</div>;

  return (
    <>
    <div className="min-h-screen bg-pink-200 overflow-x-hidden">
        <Breadcrumb bgImageUrl={service.icon} serviceTitle={service.title} />s
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-6">
        <ServiceDetail service={service} />
        <BackButton />
      </div>
    </div>
    </>
  );
}
