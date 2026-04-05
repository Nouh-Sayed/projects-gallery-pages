import { useState, useMemo } from "react";

export default function BentoGallery() {
  const getSmartRandomSpan = () => {
    const rand = Math.random();

    if (rand < 0.7) return "col-span-1 row-span-1";
    if (rand < 0.88) return "col-span-2 row-span-1";
    if (rand < 0.97) return "col-span-1 row-span-2";
    return "col-span-2 row-span-2";
  };

  const items = [
        {    id: 1,
            title: "1",
            desc: "Tatvan", 
            image: "/images/tatvan-belediyesi-fotograf-galerisi-1.webp"
         },
    { id: 2, title: "2", desc: "Tatvan", image: "/images/tatvan-belediyesi-fotograf-galerisi-2.webp" },
    { id: 3, title: "3", desc: "Tatvan", image: "/images/tatvan-belediyesi-fotograf-galerisi-3.webp" },
    { id: 4, title: "4", desc: "Tatvan", image: "/images/tatvan-belediyesi-fotograf-galerisi-4.webp" },
    { id: 5, title: "5", desc: "Tatvan", image: "/images/tatvan-belediyesi-fotograf-galerisi-5.webp" },
    { id: 6, title: "6", desc: "Tatvan", image: "/images/tatvan-belediyesi-fotograf-galerisi-6.webp" },
    { id: 7, title: "7", desc: "Tatvan", image: "/images/tatvan-belediyesi-fotograf-galerisi-7.webp" },
    { id: 8, title: "8", desc: "Tatvan", image: "/images/tatvan-belediyesi-fotograf-galerisi-8.webp" },
    { id: 9, title: "9", desc: "Tatvan", image: "/images/tatvan-belediyesi-fotograf-galerisi-9.webp" },
    { id: 10, title: "10", desc: "Tatvan", image: "/images/tatvan-belediyesi-fotograf-galerisi-10.webp" },
    { id: 11, title: "11", desc: "Tatvan", image: "/images/tatvan-belediyesi-fotograf-galerisi-11.webp" },
    { id: 12, title: "12", desc: "Tatvan", image: "/images/tatvan-belediyesi-fotograf-galerisi-12.webp" },
  ];

  const itemsWithRandom = useMemo(() => {
    return items.map((item) => ({
      ...item,
      span: getSmartRandomSpan(),
    }));
  }, []);

  const [currentIndex, setCurrentIndex] = useState(null);

  const openSlider = (index) => setCurrentIndex(index);
  const closeSlider = () => setCurrentIndex(null);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % itemsWithRandom.length);

  const prevSlide = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? itemsWithRandom.length - 1 : prev - 1
    );

  return (
    <div className="min-h-screen bg-slate-900 p-6 md:p-10">
      <div className="mx-auto max-w-7xl">

        {/* GRID */}
        <div className="grid grid-flow-dense auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {itemsWithRandom.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openSlider(index)}
              className={`group relative cursor-pointer overflow-hidden rounded-xl ${item.span}`}
            >
              <img
                src={item.image}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h2 className="text-lg font-bold">{item.title}</h2>
                <p className="text-sm text-white/90">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* SLIDER */}
        {currentIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            onClick={closeSlider}
          >
            <button className="absolute top-4 right-4 text-white text-3xl">✕</button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
              className="absolute left-4 text-white text-4xl"
            >
              ‹
            </button>

            <div
              className="max-w-5xl w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={itemsWithRandom[currentIndex].image}
                className="max-h-[80vh] rounded-xl"
              />

              <div className="text-white mt-4 text-center">
                <h2 className="text-xl font-bold">
                  {itemsWithRandom[currentIndex].title}
                </h2>
                <p>{itemsWithRandom[currentIndex].desc}</p>
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
              className="absolute right-4 text-white text-4xl"
            >
              ›
            </button>
          </div>
        )}
      </div>
    </div>
  );
}



