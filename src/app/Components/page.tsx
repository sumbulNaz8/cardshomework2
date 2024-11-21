

import Image from "next/image";

const Cards = () => {
     
  return (
    
    <div className="flex flex-wrap justify-center gap-6 px-4 py-6">
    
      {/* Card 1 */}
      <div className="w-full md:w-[45%] lg:w-[22%] bg-pink-400 rounded overflow-hidden shadow-lg px-8 py-6">
        <Image
          src="/images/pic1.png"
          layout="intrinsic"
          objectFit="contain"
          width={200}
          height={200}
          alt="image"
        />
        <p className="text-2xl text-center font-bold mb-3">Rs 5000</p>
        <p className="text-center">
          Perfume, a silent emotion that reflects personality. Its fragrance is
          not just felt but lingers in memories. A good perfume completes the
          picture—one that wins hearts without uttering a word.
        </p>
        <div className="flex justify-center mt-4">
          <button className="bg-blue-500 text-white font-bold py-2 px-9 rounded">
            Buy Now
          </button>
        </div>
      </div>

      {/* Repeat the same structure for the other cards */}
      <div className="w-full md:w-[45%] lg:w-[22%] bg-pink-400 rounded overflow-hidden shadow-lg px-8 py-6">
        <Image
          src="/images/pic1.png"
          layout="intrinsic"
          objectFit="contain"
          width={200}
          height={200}
          alt="image"
        />
        <p className="text-2xl text-center font-bold mb-3">Rs 5000</p>
        <p className="text-center">
          Perfume, a silent emotion that reflects personality. Its fragrance is
          not just felt but lingers in memories. A good perfume completes the
          picture—one that wins hearts without uttering a word.
        </p>
        <div className="flex justify-center mt-4">
          <button className="bg-blue-500 text-white font-bold py-2 px-9 rounded">
            Buy Now
          </button>
        </div>
      </div>

      {/* Card 3 */}
      <div className="w-full md:w-[45%] lg:w-[22%] bg-pink-400 rounded overflow-hidden shadow-lg px-8 py-6">
        <Image
          src="/images/pic1.png"
          layout="intrinsic"
          objectFit="contain"
          width={200}
          height={200}
          alt="image"
        />
        <p className="text-2xl text-center font-bold mb-3">Rs 5000</p>
        <p className="text-center">
          Perfume, a silent emotion that reflects personality. Its fragrance is
          not just felt but lingers in memories. A good perfume completes the
          picture—one that wins hearts without uttering a word.
        </p>
        <div className="flex justify-center mt-4">
          <button className="bg-blue-500 text-white font-bold py-2 px-9 rounded">
            Buy Now
          </button>
        </div>
      </div>

      {/* Card 4 */}
      <div className="w-full md:w-[45%] lg:w-[22%] bg-pink-400 rounded overflow-hidden shadow-lg px-8 py-6">
        <Image
          src="/images/pic1.png"
          layout="intrinsic"
          objectFit="contain"
          width={200}
          height={200}
          alt="image"
        />
        <p className="text-2xl text-center font-bold mb-3">Rs 5000</p>
        <p className="text-center">
          Perfume, a silent emotion that reflects personality. Its fragrance is
          not just felt but lingers in memories. A good perfume completes the
          picture—one that wins hearts without uttering a word.
        </p>
        <div className="flex justify-center mt-4">
          <button className="bg-blue-500 text-white font-bold py-2 px-9 rounded">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;