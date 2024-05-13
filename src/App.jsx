import './App.css';
import ProductSection from './homeProducts';
import AboutUsSection from './aboutus';
import ContactUsSection from './contactus';
import Footer from './footer';
function App() {
  return (
    <div>
      {/* <div className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Welcome to Suits
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-300">
                Discover the latest trends in men's suits and accessories. Shop our curated collection of premium quality suits for every occasion.
              </p>
              <div className="mt-8 sm:flex">
                <a href="#" className="bg-gray-300 border border-transparent rounded-md py-3 px-8 font-medium text-gray-900 uppercase tracking-wider hover:bg-gray-400">Shop Now</a>
                <a href="#" className="mt-3 sm:mt-0 sm:ml-3 bg-transparent border border-transparent rounded-md py-3 px-8 font-medium text-white uppercase tracking-wider hover:text-gray-100 hover:bg-gray-800">Learn More</a>
              </div>
            </div>
            <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
              <img className="relative mx-auto w-full md:w-3/4 lg:w-1/2 xl:w-2/5" src="https://source.unsplash.com/ClvwtweQGB8" alt="Suits" />
            </div>
          </div>
        </div>
      </div> */}
      <div className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Welcome to Our E-Commerce Store</h2>
              <p className="mt-4 text-lg text-gray-300">
                Discover the latest trends in men's suits and accessories. Shop our curated collection of premium quality suits for every occasion.
              </p>
              <div className="mt-8">
                <a href="#" className="bg-white border border-transparent rounded-md py-3 px-8 font-medium text-gray-900 uppercase tracking-wider hover:bg-gray-100">Shop Now</a>
              </div>
            </div>
            <div className="mt-10 -mx-4 relative lg:mt-0">
              <img className="relative mx-auto rounded-lg w-3/4 lg:w-auto" src="https://source.unsplash.com/RFhq0SrrgEg" alt="Hero" />
            </div>
          </div>
        </div>
      </div>

      {/* about us */}

      <ProductSection />
      <AboutUsSection />
      <ContactUsSection />
      <Footer />
    </div>
  );
}

export default App;
