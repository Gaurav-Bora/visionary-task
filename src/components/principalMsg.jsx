import { useEffect, useRef } from 'react';
import principalImage from '../assets/images/principle.png';
import sparkling from '../assets/images/sparkling.png';
import '../style/principalMsg.css';
import Books from '../assets/images/books1.png';
import School from '../assets/images/school-94.png'

const PrincipalMessage = () => {
    const name = "Ms. Rana Khan";
    const message = "Mornings at SIA are very harmonious and melodious, and why shouldn’t they be so? Our children and staff look forward to coming to school. As I go round the school every day, I hear the chatter of eager minds permeating the atmosphere at SIA. Gone are the days when the principal would look for the famous ‘pin drop silence’. I look forward to cheerful greetings, endearing smiles, intelligent conversations, and ethical behaviour. Yes! We are a school with a difference. We value individualism.";

    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                } else {
                    entry.target.classList.remove('animate');
                }
            },
            {
                threshold: 0.1,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div className="relative my-6">
            <img src={Books} alt="Books" className="absolute top-0 left-40 m-2 w-24 h-24" />
            <img src={School} alt="School" className="absolute bottom-0 right-40 m-2 w-24 h-24" />
            <div ref={ref} className="max-w-lg mx-auto bg-white rounded-lg overflow-hidden my-8 relative shadowing scroll-effect">
                <div className="flex items-center justify-center p-6 bg-gray-800 relative inner-shadow">
                    <img src={principalImage} alt="Principal" className="w-24 h-24 rounded-full" />
                    <img src={sparkling} alt="Sparkling" className="absolute top-0 right-0 m-2 w-10 h-10" />
                </div>
                <div className="px-6 py-4">
                    <h2 className="text-xl font-bold text-center msg">{name}</h2>
                    <p className="text-gray-700 mt-4 msg">{message}</p>
                </div>
            </div>
        </div>
    );
};

export default PrincipalMessage;
