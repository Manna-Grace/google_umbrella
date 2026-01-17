"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const reviews = [
  {
    name: "Priya Sharma",
    role: "UI Designer",
    rating: 5,
    review:
      "The rain prediction is eerily accurate. It buzzed 10 minutes before the first drop fell. Feels like a real Google product!",
    avatar: "/indian-woman-professional.png",
  },
  {
    name: "Arjun Mehta",
    role: "Software Engineer",
    rating: 5,
    review:
      "The premium build quality and subtle LED indicators make this umbrella feel futuristic. Google Assistant integration is seamless.",
    avatar: "/indian-man-tech-professional.jpg",
  },
  {
    name: "Sneha Patel",
    role: "Product Manager",
    rating: 5,
    review: "I love how calm and minimal the design is. The gentle vibration alert is perfect — not intrusive at all.",
    avatar: "/indian-woman-business.png",
  },
  {
    name: "Rahul Krishnan",
    role: "Student",
    rating: 4,
    review:
      "Saved me from getting drenched multiple times during monsoon season. The auto-open feature is genuinely magical.",
    avatar: "/indian-young-man-student.jpg",
  },
  {
    name: "Ananya Reddy",
    role: "Marketing Lead",
    rating: 5,
    review: "This is what happens when Google decides to make an umbrella. Thoughtful, intelligent, and beautiful.",
    avatar: "/indian-woman-marketing.jpg",
  },
  {
    name: "Vikram Singh",
    role: "Architect",
    rating: 5,
    review:
      "The attention to detail is remarkable. From the weight balance to the LED rain intensity display — pure premium experience.",
    avatar: "/indian-man-architect.jpg",
  },
]

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 bg-[var(--surface-light)]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-medium text-[var(--text-primary)] mb-4">Loved by thousands</h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            See what people are saying about Google Stella
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={review.avatar || "/placeholder.svg"}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-medium text-[var(--text-primary)]">{review.name}</h4>
                  <p className="text-sm text-[var(--text-secondary)]">{review.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating ? "fill-[var(--google-yellow)] text-[var(--google-yellow)]" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-[var(--text-secondary)] leading-relaxed">{review.review}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
