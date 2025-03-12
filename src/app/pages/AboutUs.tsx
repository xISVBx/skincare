import * as React from "react";

const AboutUsPage: React.FC = () => {
    return (
        <div className="p-6 max-w-4xl mx-auto mt-10">
            {/* Encabezado */}
            <div className="text-center">
                <h1 className="text-5xl font-extrabold text-pink-600">✨ About Us ✨</h1>
                <p className="mt-2 text-gray-600 italic">"Beauty is not about perfection, it's about confidence!"</p>
            </div>

            {/* Sección Principal */}
            <div className="mt-8 bg-white shadow-xl rounded-3xl p-6 border-4 border-pink-200">
                <h2 className="text-3xl font-bold text-pink-700 text-center">🌸 Embracing Beauty & Confidence 🌸</h2>
                
                <p className="mt-4 text-gray-600 text-lg">
                    Welcome to our magical world of beauty and self-love! 💕 Our mission is to help young girls explore the world of makeup in a **fun, positive, and safe** way while **embracing their natural beauty.**  
                </p>

                <p className="mt-4 text-gray-600 text-lg">
                    **Makeup is not about hiding imperfections** – it’s about expressing yourself, being creative, and feeling **confident** in your own skin! 🎨💄
                </p>

                {/* Imagen */}
                <div className="mt-6 flex justify-center">
                    <img 
                        src="/images/publicidad3.jpg" 
                        alt="Makeup & Confidence" 
                        className="w-full md:w-3/4 rounded-2xl shadow-lg border-4 border-pink-300"
                    />
                </div>
            </div>

            {/* Sección sobre autoestima */}
            <div className="mt-10 bg-pink-50 shadow-lg rounded-3xl p-6 border-4 border-pink-300">
                <h2 className="text-3xl font-bold text-pink-700 text-center">💖 Say Goodbye to Insecurities 💖</h2>
                
                <p className="mt-4 text-gray-700 text-lg">
                    Society often tells young girls they need to look "perfect" to be beautiful. But guess what? **You are already perfect!** ✨ True beauty is about **kindness, confidence, and embracing who you are.**   
                </p>

                <p className="mt-4 text-gray-700 text-lg">
                    Our brand is here to teach **self-love**, not self-doubt. Makeup is just a tool to enhance your beauty, not define it. 🌟
                </p>

                {/* Cita inspiradora */}
                <div className="mt-6 bg-white p-4 rounded-xl text-center text-pink-600 font-semibold shadow-md">
                    <p className="italic text-lg">"Confidence is the best makeup you can wear!"</p>
                </div>
            </div>

            {/* Sección final */}
            <div className="mt-10 bg-white shadow-xl rounded-3xl p-6 border-4 border-pink-200">
                <h2 className="text-3xl font-bold text-pink-700 text-center">💄 Learn, Play & Shine 💄</h2>
                
                <p className="mt-4 text-gray-600 text-lg">
                    Whether you are just starting your makeup journey or already love playing with colors, we are here to guide you. 🎨✨ Join our workshops, discover amazing tutorials, and remember: **You are beautiful just the way you are!** 💕
                </p>

                {/* Imagen final */}
                <div className="mt-6 flex justify-center">
                    <img 
                        src="/images/publicidad4.jpg" 
                        alt="Confident Girl" 
                        className="w-full md:w-3/4 rounded-2xl shadow-lg border-4 border-pink-300"
                    />
                </div>
            </div>

            {/* Footer */}
            <div className="mt-10 text-center text-gray-500 italic">
                <p>💖 Thank you for being part of our community! 💖</p>
                <p>Follow us on Instagram & TikTok for more beauty inspiration! ✨</p>
            </div>
        </div>
    );
};

export default AboutUsPage;
