interface BreadcrumbProps {
  serviceTitle: string;
  bgImageUrl: string;
}

export default function Breadcrumb({ serviceTitle, bgImageUrl }: BreadcrumbProps) {
  return (
    <section
      className="relative w-full bg-cover bg-center h-[300px] md:h-[450px]"
      style={{ backgroundImage: `url(${bgImageUrl})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative flex items-center justify-center h-full px-4">
        <h1 className="text-pink-200 font-serif text-2xl font-bold md:text-8xl  text-center tracking-wide">
          {serviceTitle}
        </h1>
      </div>
    </section>
  );
}
