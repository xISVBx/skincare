import * as React from "react";

const workshops = [
    {
        id: 1,
        title: "Basic Makeup for Beginners",
        description: "Learn the basics of makeup in a fun and safe way!",
        image: "/skincare/images/publicidad2.jpg",
        date: "March 20, 2025",
        duration: "1 hour",
    },
    {
        id: 2,
        title: "Skincare 101",
        description: "Discover how to take care of your skin with natural products.",
        image: "/skincare/images/publicidad4.jpg",
        date: "March 25, 2025",
        duration: "45 minutes",
    },
    {
        id: 3,
        title: "Skin care with mom",
        description: "Discover how to take care of your skin with natural products.",
        image: "/skincare/images/publicidad1.jpg",
        date: "March 25, 2025",
        duration: "45 minutes",
    },
    {
        id: 4,
        title: "Face spa",
        description: "Discover how to take care of your skin with natural products.",
        image: "/skincare/images/spa.jpg",
        date: "March 25, 2025",
        duration: "45 minutes",
    },
];

const WorkshopsPage: React.FC = () => {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-center mb-6">Online Educational Workshops</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {workshops.map((workshop) => (
                    <div key={workshop.id} className="bg-white shadow-md rounded-lg p-4">
                        <img src={workshop.image} alt={workshop.title} className="w-full h-40 object-cover rounded-md mb-4" />
                        <h2 className="text-xl font-semibold">{workshop.title}</h2>
                        <p className="text-gray-600">{workshop.description}</p>
                        <p className="text-sm text-gray-500">{workshop.date} | {workshop.duration}</p>
                        <button className="mt-3 bg-primary text-white px-4 py-2 rounded-lg">Sign Up</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkshopsPage;
