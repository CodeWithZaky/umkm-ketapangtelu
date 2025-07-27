"use client";

import Image from "next/image";
import { useState } from "react";

function DetailProductImage({ product }: any) {
  const [selectedImage, setSelectedImage] = useState(
    product.images[0] || "/placeholder.svg"
  );

  return (
    <div className="space-y-4">
      <div className="relative rounded-lg h-96 overflow-hidden">
        <Image
          src={selectedImage || "/placeholder.svg"}
          alt={product.title}
          fill
          className="object-cover"
        />
      </div>

      {product.images.length > 1 && (
        <div className="gap-2 grid grid-cols-4">
          {product.images.map((image: any, index: number) => (
            <div
              key={index}
              onClick={() => setSelectedImage(image)}
              className={`relative rounded-lg h-24 overflow-hidden cursor-pointer
                ${selectedImage === image ? "border-2 border-slate-500" : ""}
              `}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`${product.title} ${index + 1}`}
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
              {selectedImage === image && (
                <>
                  <div className="absolute inset-0 bg-black opacity-30 backdrop-blur-lg"></div>{" "}
                  {/* Overlay lebih gelap */}
                  <div className="absolute inset-0 flex justify-center items-center">
                    <span className="font-bold text-white text-lg">
                      {`--Dilihat--`}
                    </span>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DetailProductImage;
