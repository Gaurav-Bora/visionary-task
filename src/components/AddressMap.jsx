import '../style/AddressMap.css';
import Address from '../assets/images/address.png'

const AddressMap = () => {
    return (
        <div className="address-map-container rounded-xl bg-cardColor mx-24 mt-24 relative">
            <img src={Address} className="absolute top-20 left-20 m-2 w-24 h-24 hover:rotate-6 transition duration-300 ease-in-out" />

            {/* Left side: Address details */}
            <div className="address-details mx-8  p-10">
                <h2 className="text-xl font-semibold mb-4 fonting">(+91) 8956712240-1-2</h2>
                <p className='fonting'>SPAN INTERNATIONAL ACADEMY</p>
                <p className='fonting'>(Pre-Primary to Grade 10)</p>
                <p className='fonting'>Survey no. 15/10, Opp SMEF`s Bricks College of Architecture,</p>
                <p className='fonting'>Jagdhamba Marg, Pisoli, Pune 411060.</p>
            </div>
            {/* Right side: Google Maps */}
            <div className="google-map mx-8 rounded-xl border border-slate-800">
                <iframe
                    title="Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.0376279580787!2d73.9079615!3d18.4366006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb4325c8428f%3A0x8fb6756682f294e3!2sSPAN%20International%20School%20-%20IGCSE%20Board!5e0!3m2!1sen!2sin!4v1716792854357!5m2!1sen!2sin"
                    width="600"
                    height="400"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
};

export default AddressMap;
