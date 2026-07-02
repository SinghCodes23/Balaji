import floralDoor from './assets/floraldoor.png';
import matteDoor from './assets/mattedoor.png';
import ganeshDoor from './assets/ganeshdoor.jpg';

function Products() {
  return (
    <section className="px-8 py-16">
      <h2 className="text-2xl font-semibold mb-8 flex items-center gap-4">
        Latest <span className="text-[#e8442a]">Products</span>
        <span className="flex-1 h-px bg-gray-300"></span>
        <a className="text-[#e8442a] text-sm cursor-pointer">View All</a>
      </h2>

      <div className="flex gap-6">

        <div className="flex flex-col w-1/3 group cursor-pointer">
            <div className="bg-gray-100 rounded-xl p-3 mb-3 overflow-hidden">
                <img src={floralDoor} alt="Floral Design Door" className="w-full h-64 object-contain transition-transform duration-300 group-hover:scale-110" />
            </div>
          <p className="font-medium transition-transform duration-300 group-hover:scale-105">Floral Design Door</p>
          <div className="flex gap-3 mt-1 transition-transform duration-300 group-hover:scale-105">
            <p className="text-gray-400 line-through text-sm">Rs 12000</p>
            <p className="font-semibold">Rs 10000</p>
          </div>
        </div>

        <div className="flex flex-col w-1/3 group cursor-pointer">
          <div className="bg-gray-100 rounded-xl p-3 mb-3 overflow-hidden">
            <img src={matteDoor} alt="Matte Design Door" className="w-full h-64 object-contain transition-transform duration-300 group-hover:scale-110" />
          </div>
          <p className="font-medium transition-transform duration-300 group-hover:scale-105">Matte Design Door</p>
          <div className="flex gap-3 mt-1 transition-transform duration-300 group-hover:scale-105">
            <p className="text-gray-400 line-through text-sm">Rs 12000</p>
            <p className="font-semibold">Rs 10000</p>
          </div>
        </div>

        <div className="flex flex-col w-1/3 group cursor-pointer">
          <div className="bg-gray-100 rounded-xl p-3 mb-3 overflow-hidden">
            <img src={ganeshDoor} alt="Ganesh Design Door" className="w-full h-64 object-contain transition-transform duration-300 group-hover:scale-110 " />            
          </div>
          <p className="font-medium transition-transform duration-300 group-hover:scale-105">Ganesh Design Door</p>
          <div className="flex gap-3 mt-1 transition-transform duration-300 group-hover:scale-105">
            <p className="text-gray-400 line-through text-sm">Rs 12000</p>
            <p className="font-semibold">Rs 10000</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Products;