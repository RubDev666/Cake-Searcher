import { GalleryProps } from "@/types/props";

export default function Gallery({ selectedCategory, cakes, setImg }: GalleryProps) {
    return (
        <section id="results-container" className="mt-7 px-4">
            <h1 className="text-color-1 text-center text-2xl">{`Pasteles de ${selectedCategory}`}</h1>

            <div id="gallery" data-set="py-2 px-7" className="columns-2 sm:columns-4 lg:columns-4 xl:columns-8 grd py-4 px-0">
                {cakes.map((cake) => (
                    <img key={cake.id} src={cake.urlImg} alt={cake.category} className="mb-4 cursor-pointer" onClick={() => setImg(cake)} />
                ))}
            </div>
        </section>
    )
}   
