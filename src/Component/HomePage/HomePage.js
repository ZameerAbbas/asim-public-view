/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useContext} from 'react';
import { Star } from 'lucide-react';
import './landingpage.css';

import image from "../images/Himalayas.png"
import hero from "../images/hero.webp"
import { Createcart } from "../../Context/Context";


export default function HomePage() {

  const { records, cartItems, addToCart, removeFromCart,recordtwo ,specialOffer,trending} =
    useContext(Createcart);

    const handleRemoveFromCart = (product) => {
      removeFromCart(product);
    };


    console.log("records",records)
    console.log("recordtwo",recordtwo)
    console.log("specialOffer",specialOffer)
    console.log("trending",trending)
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      

      {/* Hero Section */}
      <section className="relative h-[560px]">
        <img
          src={hero}
          // src="/placeholder.svg?height=500&width=1920"
          alt="Colorful gemstones"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-medium mb-4">Exclusive Gem Sale</h1>
          <p className="text-lg mb-8">Discover dazzling gems at unbeatable prices</p>
          <button className="bg-violet-600 px-6 py-2 rounded-md">Shop Now</button>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-2xl font-medium text-center mb-12">Product Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {records.map((category) => (
            <div className='flex  flex-row'>
            <a
            key={category?.data?.gemName}
            href="/Gems"
            className="relative aspect-square overflow-hidden rounded-lg"
            >
              <img
                src={category?.data?.gemImageURL}
                alt={category?.data?.gemImageURL}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4">
              </div>
            </a>
                <span className="text-sm font-medium text-black">{category?.data?.gemName}</span>
              </div>
              ))}
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-2xl font-medium text-center mb-12">Special Offers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {specialOffer.map((offer) => (
            <div key={offer.data.title} className="group">
              <img
                src={offer.data.offerImageURL}
                alt={offer.data.offerName}
                className="w-full aspect-square object-cover rounded-lg mb-4"
              />
              <h3 className="text-sm font-medium">{offer.data.offerName}</h3>
              <p className="text-sm text-gray-600">{offer.data.offerPrice}</p>
              <button className="text-sm text-violet-600 mt-2">Shop Now</button>
            </div>
          ))}
        </div>
        <p className="text-center mt-8 text-sm text-gray-600">
          Hurry, limited time offers!
        </p>
      </section>

      {/* Trending Products */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-2xl font-medium text-center mb-12">Trending Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {trending.map((product) => (
            <div key={product.data.trendingName} className="group  cursor-pointer" >
              <img
                src={product.data.trendingImageURL}
                alt={product.data.
                  trendingName
                  }
                className="w-full aspect-square object-cover rounded-lg mb-4 bg-[#070506]"
              />
              <h3 className="text-sm font-medium">{product.data.trendingName}</h3>
              <p className="text-sm font-medium">Price ${product.data.trendingPrice}</p>
              <p className="text-sm text-gray-600">Weight {product.data.trendingWeight}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <blockquote className="text-lg mb-6">
            "These sapphire earrings are absolutely stunning! The craftsmanship is superb, and they add a touch of elegance to any outfit. Highly recommend Gemstone Haven!"
          </blockquote>
          <cite className="not-italic">
            <div className="font-medium">Sophia M.</div>
            <div className="text-sm text-gray-600">Jewelry Enthusiast</div>
          </cite>
        </div>
      </section>

      {/* Favorite Products */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-2xl font-medium text-center mb-12">Favorite Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {favoriteProducts.map((product) => (
            <div key={product.name} className="flex gap-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div>
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                <p className="text-sm">Price ${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-8">
            <div className="text-2xl font-medium">Logo</div>
          </div>
          <div className="max-w-sm mx-auto mb-12">
            <h3 className="text-center mb-4">Subscribe to our newsletter</h3>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border rounded-md"
              />
              <button className="bg-violet-600 text-white px-6 py-2 rounded-md">
                Subscribe
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-medium mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-600">Overview</a></li>
                <li><a href="#" className="text-sm text-gray-600">Features</a></li>
                <li><a href="#" className="text-sm text-gray-600">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-600">Blog</a></li>
                <li><a href="#" className="text-sm text-gray-600">User guides</a></li>
                <li><a href="#" className="text-sm text-gray-600">Webinars</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-600">About us</a></li>
                <li><a href="#" className="text-sm text-gray-600">Contact us</a></li>
                <li><a href="#" className="text-sm text-gray-600">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Plans & Pricing</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-600">Personal</a></li>
                <li><a href="#" className="text-sm text-gray-600">Startup</a></li>
                <li><a href="#" className="text-sm text-gray-600">Organization</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-sm text-gray-600">
            © 2024 Brand, Inc. • Privacy • Terms • Sitemap
          </div>
        </div>
      </footer>
    </div>
  );
}


const favoriteProducts = [
  {
    name: "Leather Wallet",
    price: "49.99",
    description: "Elegant leather wallet with multiple slots and card space",
    image: "/placeholder.svg?height=200&width=200&text=Wallet",
  },
  {
    name: "Smart Watch",
    price: "299.99",
    description: "Modern smartwatch with fitness tracking and notifications",
    image: "/placeholder.svg?height=200&width=200&text=Watch",
  },
  {
    name: "Earbuds",
    price: "159.99",
    description: "Premium earbuds with noise-canceling features",
    image: "/placeholder.svg?height=200&width=200&text=Earbuds",
  },
  {
    name: "White Sneakers",
    price: "79.99",
    description: "Classic white sneakers for everyday comfort",
    image: "/placeholder.svg?height=200&width=200&text=Sneakers",
  },
];

