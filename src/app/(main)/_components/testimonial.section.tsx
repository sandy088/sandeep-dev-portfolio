"use client";
import { InfiniteMovingCards } from "../../components/ui/infinite-moving-cards";

export default function TestimonialSection() {
  return (
    <div id="testimonials" className="h-[30rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h2 className=" text-3xl font-bold text-center mb-8">Testimonials</h2>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote: `I am extremely satisfied with Sandeep's work and professionalism. They not only met but exceeded my expectations, and I would highly recommend them for any development project. I look forward to the opportunity to work with them again in the future.
      Thank you, Sandeep, for your outstanding contributions to this project. `,
    name: "Tauseef",
    title: "Freelance Client",
  },
  {
    quote:
      "One thing I absolutely liked about Sandeep is, He not only meets the requirements but also puts extra efforts and do more than expectations. I was hired Sandeep for 2 Two of my projects & absolutely great work done by him. I would highly recommend him for any development project.",
    name: "Myank",
    title: "Freelance Client",
  },
  {
    quote: `#kudos to Sandeep Singh

    He’s very kind and knowledgeable. Helped me deploying a React Next App on a Hostinger International shared cloud hosting!
    
    Wishing him the best.
    
    #ThankYou`,
    name: "Hymkarran S Bhalla, UXMC",
    title:
      "Helping businesses grow with design | Harvard Business School | IIM-A",
  },
];
