import React from "react";
import Breadcrumb from "@/global/Breadcrumb";
import Gallery from "@/pages/Gallery";

export default function AboutPage() {
  return (
    < >
      <Breadcrumb serviceTitle="Gallery"
        bgImageUrl="/images/services_bredcrumb.jpg" />
      <Gallery />
    </>
  );
}

