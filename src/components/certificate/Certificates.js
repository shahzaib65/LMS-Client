import React, { useState, useEffect } from 'react';
import ProgressBar from '../progressBar/ProgressBar';


const Certificates = () => {

    const products = [
        {
          id: 1,
          name: 'Earthen Bottle',
          href: '#',
          price: '$48',
          description: 'testing data are displaying on the website after that wee will fetch data from server',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
          imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        },
        {
          id: 2,
          name: 'Nomad Tumbler',
          href: '#',
          price: '$35',
          description: 'testing data are displaying on the website after that wee will fetch data from server',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
          imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        },
        {
          id: 3,
          name: 'Focus Paper Refill',
          href: '#',
          price: '$89',
          description: 'testing data are displaying on the website after that wee will fetch data from server',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
          imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
        },
        {
          id: 4,
          name: 'Machined Mechanical Pencil',
          href: '#',
          price: '$35',
          description: 'testing data are displaying on the website after that wee will fetch data from server',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
        },
        {
            id: 5,
            name: 'Machined Mechanical Pencil',
            href: '#',
            price: '$35',
            description: 'testing data are displaying on the website after that wee will fetch data from server',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
            imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
          },
          {
            id: 6,
            name: 'Machined Mechanical Pencil',
            href: '#',
            price: '$35',
            description: 'testing data are displaying on the website after that wee will fetch data from server',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
            imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
          },
          {
            id: 7,
            name: 'Machined Mechanical Pencil',
            href: '#',
            price: '$35',
            description: 'testing data are displaying on the website after that wee will fetch data from server',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
            imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
          },
          {
            id: 8,
            name: 'Machined Mechanical Pencil',
            href: '#',
            price: '$35',
            description: 'testing data are displaying on the website after that wee will fetch data from server',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
            imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
          }
    
      ]



    return (
        <div className=" ml-28">
          <div className="mx-auto items-center max-w-2xl px-10 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only text-white">Products</h2>
    
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 items-center">
              {products.map((product) => (
                <a key={product.id} href={product.href} className="group">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-white">{product.name}</h3>
                  <p className="mt-1 text-lg font-medium text-white">{product.price}</p>
                  <p className="mt-1 text-sm font-normal text-white">{product.description}</p>
                  <span className="text-xs font-semibold inline-block mt-2 py-1 px-2 uppercase rounded-full text-black bg-teal-200">
            Task in Progress
          </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )
}

export default Certificates



// const [progress, setProgress] = useState(0);

// useEffect(() => {
//   // Simulate progress over time (e.g., fetching data or performing a task)
//   const interval = setInterval(() => {
//     setProgress((prevProgress) => (prevProgress < 100 ? prevProgress + 10 : 100));
//   }, 1000);

//   return () => clearInterval(interval);
// }, []);

// return (
//   <div className="p-4">
//     <h1 className="text-2xl font-bold mb-4">React Progress Bar Example</h1>
//     <ProgressBar progress={progress} />
//   </div>
// );