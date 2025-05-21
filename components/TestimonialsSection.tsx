"use client";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Isabella Chavez",
      title: "Graphic Designer",
      text: "You made it so simple. My new site is so much faster and easier to work with than my old site.",
      avatar: "/isabella.jpg", // place l’image dans public/
    },
    {
      name: "Isabella Chavez",
      title: "Graphic Designer",
      text: "You made it so simple. My new site is so much faster and easier to work with than my old site.",
      avatar: "/isabella.jpg",
    },
    {
      name: "Isabella Chavez",
      title: "Graphic Designer",
      text: "You made it so simple. My new site is so much faster and easier to work with than my old site.",
      avatar: "/isabella.jpg",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-green-700 bg-green-100 rounded-full">
          Testimonials
        </span>
        <h2 className="text-3xl sm:text-4xl font-semibold mb-2">What Our Users Are Saying</h2>
        <p className="text-gray-600 mb-12">
          Discover how our Launchpage template has transformed the way businesses launch their products..
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="bg-[#e6f7f4] p-6 rounded-xl shadow-sm text-left"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full mr-3 object-cover"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-gray-700 text-base leading-relaxed">
                “{testimonial.text}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
