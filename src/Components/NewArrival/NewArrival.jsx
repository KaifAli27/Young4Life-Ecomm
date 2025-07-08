import { FaStar } from "react-icons/fa";
import FacetedFilter from "../FacetedFilter/FacetedFilter";
const NewArrival = () => {

    const newArrivalsCategories = [
        {
            id: 1,
            name: "men's fashion",
            category: "men"
        },
        {
            id: 2,
            name: "women's fashion",
            category: "women"
        },
        {
            id: 3,
            name: "women accessories",
            category: "women_accessories"
        },
        {
            id: 4,
            name: "men accessories",
            category: "men_accessories"
        },
        {
            id: 4,
            name: "discount deals",
            category: "discount_deals"
        },
    ];

    const newArrivalProducts = [
        {
            id: 1,
            name: 'shiny blazer',
            description: 'Turn heads in this high-shine blush-toned blazer and dress combo – the perfect balance of glam and structure. Polyster-stain blend for lightweight feel',
            price: 20,
            image: '/arrivals/arrival1.png',
            rating: 4.5,
            stock: 10,
        },
        {
            id: 2,
            name: ' Grecian Drape Maxi',
            description: 'Channel elegance in this soft, flowing maxi dress with delicate pleats and a cinched waist',
            price: 50,
            image: '/arrivals/arrival2.png',
            rating: 5,
            stock: 5,
        },
        {
            id: 3,
            name: 'Chunky Knit Sweater Dress',
            description: 'Stay warm and stylish in this cozy full-length sweater dress, topped with a playful beanie..',
            price: 80,
            image: '/arrivals/arrival3.png',
            rating: 3.5,
            stock: 15,
        },
        {
            id: 4,
            name: 'Vintage White Shirt Dress',
            description: 'This crisp white dress brings retro charm with modern ease – cinched at the waist and styled with flair.',
            price: 90,
            image: '/arrivals/arrival4.png',
            rating: 3,
            stock: 1,
        },
        {
            id: 5,
            name: 'Floral Wrap & Go Dress',
            description: 'Brighten your day with this vibrant floral wrap dress – perfect for brunches, picnics, and weekend fun..',
            price: 100,
            image: '/arrivals/arrival5.png',
            rating: 2,
            stock: 1,
        },
        {
            id: 6,
            name: 'Soft Stretch Turtleneck',
            description: 'A clean, everyday essential – this soft white turtleneck fits like a glove and works with anything.',
            price: 50,
            image: '/arrivals/arrival6.png',
            rating: 2.5,
            stock: 0,
        },
    ];

    return (
        <div className="w-full bg-white pt-[150px] pb-[150px]">
            <div className="lg:container mx-auto">

                {/* header title  */}
                <div className="text-center mb-10">
                    <h3 className="text-3xl text-[#484848] font-normal capitalize mb-5">new arrivals</h3>
                    <p className="text-base text-[#8a8a8a] font-poppins font-normal">At YoungForLife, we design with you in mind—trend-savvy, confident, and always evolving. Whether you're dressing up or keeping it casual, our latest collection blends comfort with bold style so you can express yourself effortlessly. Need help choosing? We're here like your fashion-savvy best friend—ready to guide, not lecture.</p>
                </div>

                {/* categories  */}
                <div className="flex items-center justify-center gap-10 mb-10">
                    {
                        newArrivalsCategories.map((category) => (
                            <button className={`text-base font-poppins font-normal capitalize cursor-pointer ${category.id === 2 ? 'px-6 py-2.5 bg-black rounded-sm text-white' : 'text-[#8a8a8a] '}`} key={category.id}>{category.name}</button>
                        ))
                    }
                </div>
                <div className="mb-6">
                <FacetedFilter />
                </div>

                <div className="grid grid-cols-3 gap-8">
                    {
                        newArrivalProducts.map((product) => (
                            <div key={product.id} className="bg-white shadow-lg p-5 rounded-md ">
                                <div className="w-full max-h-[244px] h-full mb-2.5">
                                    <img className="w-full h-full object-cover rounded-md" src={product.image} alt={product.name} />
                                </div>
                                <div>
                                    <div className="flex items-center justify-between gap-8">
                                        <div>

                                            <h4 className="text-xl text-[#484848] font-poppins font-medium capitalize mb-2">{product.name}</h4>
                                            <p className="text-base text-[#8a8a8a] font-poppins font-normal">{product.description}</p>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            {
                                                [...Array(Math.ceil(product.rating))].map((_, index) => (
                                                    <span  key={index}><FaStar size={'1.5rem'} color="#fca120" /></span>

                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between mt-5">
                                        <p className="text-2xl text-[#484848] font-poppins font-medium">${product.price}</p>
                                        {
                                            product.stock > 0 ? 
                                             <span className="text-base text-[#ff4646] font-poppins capitalize font-normal">stock:{product.stock}</span>

                                             :
                                             <span className="text-base text-[#ff4646] font-poppins capitalize font-normal">almost sold out</span>
                                        }
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                {/* all arrivals products  */}
                <div className="mt-10 flex items-center justify-center">
                    <button className="text-base text-white font-poppins font-normal capitalize px-8 py-2.5 bg-black rounded-md cursor-pointer">view more</button>
                </div>
            </div>
        </div>
    );
};

export default NewArrival;