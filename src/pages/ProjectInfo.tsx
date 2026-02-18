import Navbar from '@/components/Navbar';
import { Link } from 'react-router-dom';
import { ArrowLeft, Brain, Shield, Lightbulb, Layers, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const sections = [
  {
    title: 'Project Abstract',
    icon: Layers,
    content: `SmartBite is an AI-based food delivery and recommendation system designed as a Final Year CSE project. The system leverages intelligent algorithms to provide personalized food recommendations based on user behavior, time of day, order history, and popular trends. Built with React.js and Tailwind CSS, SmartBite demonstrates a modern, scalable frontend architecture with glassmorphism UI, localStorage-based state management, and a comprehensive food ordering workflow including authentication, cart management, and order simulation. The AI recommendation engine operates entirely on the client side, analyzing temporal patterns and user preferences to deliver a smart, personalized dining experience.`,
  },
  {
    title: 'Key Features',
    icon: Rocket,
    content: `
• **50+ Food Items** across 15 categories (Biryani, Pizza, Burger, Chinese, South Indian, North Indian, Desserts, Beverages, etc.)
• **AI-Powered Recommendations** — Time-based suggestions (breakfast/lunch/snacks/dinner), history-based preferences, popular items, top-rated, and budget-friendly sections
• **Full Authentication System** — Sign Up, Login, Logout with localStorage persistence, duplicate email prevention, role-based access (user/admin)
• **Shopping Cart** — Add/remove items, quantity control, dynamic pricing with tax and delivery fee calculation, free delivery over ₹500
• **Order Management** — Order placement simulation, complete order history with timestamps
• **Admin Dashboard** — User management, order analytics, revenue tracking (accessible via @admin.com emails)
• **Premium Dark UI** — Glassmorphism cards, gradient accents, smooth Framer Motion animations, fully responsive design
• **Search & Filter** — Real-time search across food names, categories, and tags with category-based filtering
• **Protected Routes** — Cart and Orders pages require authentication
`,
  },
  {
    title: 'Authentication Logic',
    icon: Shield,
    content: `
**Sign Up Flow:**
1. User enters Name, Email, Password, and Confirm Password
2. System validates password match and minimum length (6 chars)
3. Checks localStorage for duplicate email registration
4. Stores user object in \`smartbite_users\` array in localStorage
5. Role assignment: emails ending with \`@admin.com\` get 'admin' role, others get 'user'

**Login Flow:**
1. User enters Email and Password
2. System retrieves \`smartbite_users\` from localStorage
3. Validates credentials by matching email AND password
4. On success: stores session in \`smartbite_session\` and redirects to homepage
5. On failure: displays error message

**Session Management:**
- Active session stored as \`smartbite_session\` in localStorage
- AuthContext checks for existing session on app load
- Logout clears session and redirects to login page

**Protected Routes:**
- Cart and Orders pages check \`isAuthenticated\` from AuthContext
- Unauthenticated users see a prompt to login
- Admin dashboard checks for \`role === 'admin'\`
`,
  },
  {
    title: 'AI Recommendation Logic',
    icon: Brain,
    content: `
**1. Time-Based Recommendations:**
- Gets current hour using \`new Date().getHours()\`
- 6 AM - 11 AM → Breakfast items (Dosa, Idli, Paratha, Poha, Pancakes)
- 11 AM - 3 PM → Lunch items (Biryani, Butter Chicken, Thali, etc.)
- 3 PM - 7 PM → Snacks (Samosa, Momos, Fries, Cold Coffee)
- 7 PM onwards → Dinner items (Tandoori, Biryani, Chinese dishes)

**2. History-Based Recommendations:**
- Reads order history from \`smartbite_orders\` in localStorage
- Counts frequency of each food category across all past orders
- Identifies the most frequently ordered category
- Returns items from that category as personalized recommendations
- Falls back to popular items if no order history exists

**3. Popular Items Algorithm:**
- Filters items where \`isPopular === true\`
- Sorts by review count (descending) for social proof ranking

**4. Additional Sections:**
- Top Rated: Sorted by rating score
- Budget Friendly: Sorted by price (ascending)
- Combo Offers: Filtered by 'Combos' category with discount badges
`,
  },
  {
    title: 'Future Enhancements',
    icon: Lightbulb,
    content: `
• **Backend Integration** — Connect to Node.js/Express backend with MongoDB/PostgreSQL for real data persistence
• **Real Payment Gateway** — Integrate Razorpay/Stripe for actual transactions
• **Machine Learning Model** — Deploy a collaborative filtering model using Python (scikit-learn/TensorFlow) for advanced recommendations
• **Real-time Order Tracking** — WebSocket-based live order status updates with map integration
• **Restaurant Management** — Multi-vendor support with restaurant profiles, menus, and ratings
• **Push Notifications** — Browser push notifications for order updates and offers
• **Voice Search** — Natural language food search using Web Speech API
• **Image Recognition** — Upload food photos to identify and search similar dishes
• **Social Features** — Share orders, write reviews, follow favorite restaurants
• **Mobile App** — React Native version for iOS and Android
• **Analytics Dashboard** — Advanced admin analytics with charts, trends, and customer insights
`,
  },
  {
    title: 'Viva / Demo Explanation',
    icon: Rocket,
    content: `
**Opening Statement:**
"SmartBite is an AI-based food delivery and recommendation system. It demonstrates how artificial intelligence can enhance the food ordering experience through personalized suggestions."

**Demo Flow:**
1. **Show Homepage** — Explain the AI recommendation sections (time-based, popular, top-rated)
2. **Sign Up** — Create a new account, show validation and duplicate prevention
3. **Login** — Authenticate and show session persistence
4. **Browse Menu** — Show category filtering, search functionality, 50+ food items
5. **Add to Cart** — Demonstrate quantity controls and dynamic pricing
6. **Place Order** — Show order simulation with tax/delivery calculation
7. **Order History** — View past orders, explain how history feeds into AI recommendations
8. **Admin Dashboard** — Login with @admin.com email, show user/order analytics
9. **AI Logic** — Explain the time-based and history-based recommendation algorithms

**Key Technical Points:**
- React.js with TypeScript for type safety
- Tailwind CSS for responsive, utility-first styling
- Context API for state management (Auth, Cart)
- localStorage for data persistence without backend
- Framer Motion for smooth UI animations
- Custom hooks for reusable logic (useCart, useRecommendations)
- Component-based architecture for maintainability

**Why This Project?**
"Food delivery platforms are a ₹60,000 crore industry in India. Our project demonstrates how AI can improve user experience through intelligent recommendations, reducing decision fatigue and increasing order frequency."
`,
  },
];

const ProjectInfo = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <Link to="/" className="flex items-center gap-1 text-sm text-muted-foreground mb-4 hover:text-foreground transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to App
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display text-3xl font-bold mb-2">
            SmartBite – <span className="gradient-text">AI Based Food Delivery & Recommendation System</span>
          </h1>
          <p className="text-muted-foreground mb-8">Final Year CSE Project Documentation</p>
        </motion.div>

        <div className="space-y-6">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg gradient-btn flex items-center justify-center">
                  <section.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h2 className="font-display text-xl font-bold">{section.title}</h2>
              </div>
              <div className="text-sm text-secondary-foreground leading-relaxed whitespace-pre-line prose-invert">
                {section.content.split('**').map((part, j) =>
                  j % 2 === 1 ? <strong key={j} className="text-foreground">{part}</strong> : <span key={j}>{part}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
