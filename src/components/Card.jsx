import { yogabag, yogapant, yogamat, yogatowel, yogastrap } from "../assets";

const products = [
  {
    id: 1,
    name: "Yoga Mat",
    href: "https://amzn.to/3TExDd1",
    price: "$48",
    imageSrc: yogamat,
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Yoga Pants",
    href: "https://amzn.to/3H2H1j6",
    price: "$35",
    imageSrc: yogapant,
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Yoga Bag",
    href: "https://amzn.to/3GYgLqk",
    price: "$89",
    imageSrc: yogabag,
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Yoga Strap",
    href: "https://amzn.to/4axf6Wj",
    price: "$35",
    imageSrc: yogastrap,
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 5,
    name: "Yoga Towel",
    href: "https://amzn.to/48wWe7T",
    price: "$35",
    imageSrc: yogatowel,
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
];

export default function Card() {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <p className=" font-serif text-center font-extralight text-lg border-t-[0.3px] p-4 border-opacity-50 border-b-[0.1px] border-[#e8b48c] mb-6  text-[#e8b48c]">
          Here is What we offer.
        </p>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full border-[0.3px] border-[#e8b48c] border-opacity-50 overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-base font-poppins text-[#e8b48c]">
                  {product.name}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
