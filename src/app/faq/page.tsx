import React from "react";
import Breadcrumb from "@/global/Breadcrumb";
import Faq from "@/pages/FAQ";

export default function AboutPage() {
  return (
    < >
      <Breadcrumb serviceTitle="FAQ"
        bgImageUrl="/images/services_bredcrumb.jpg" />
      <Faq />
    </>
  );
}

