import {
  Home,
  BadgeInfo,
  Layers3,
  Activity,
  Phone,
  LucideIcon,
  UserRoundIcon,
  BrainCircuit,
} from "lucide-react";

export const projects: Project[] = [
  {
    id: "0",
    name: "Golden Harvest",
    codeUrl: "https://github.com/sathish-s-dev/golden-harvest-next",
    liveUrl: "https://golden-harvest.vercel.app/",
    image: "/golden-harvest.png",
    tags: ["React", "Framer-motion", "TypeScript", "Next.JS", "Tailwind CSS"],
    description: [
      "Embarked on a mission to create an immersive online platform for Golden Harvest, dedicated to promoting the benefits of olive oil and a vegan diet.",
      "Crafted a visually stunning website with a focus on user experience and accessibility, ensuring seamless navigation and engagement for visitors.",
      "Utilized modern web technologies including HTML5, CSS3, and JavaScript to develop a responsive and interactive website that adapts to various devices and screen sizes.",
      "Incorporated captivating visuals, including high-quality images and videos, to showcase Golden Harvest's premium olive oil products and delicious vegan recipes.",
      "Implemented a user-friendly content management system (CMS) such as WordPress or Shopify, enabling easy management and updating of website content by Golden Harvest staff.",
      "Created informative and engaging blog posts and articles highlighting the health benefits of olive oil and the importance of a plant-based diet, attracting and educating a wide audience.",
      "Optimized the website for search engines (SEO) to improve visibility and ranking on search engine results pages (SERPs), driving organic traffic and increasing brand awareness.",
      "Integrated social media sharing buttons and email subscription forms to encourage user interaction and facilitate sharing of content across various platforms.",
      "Collaborated closely with Golden Harvest stakeholders to ensure that the website reflects the brand's values, vision, and identity, fostering trust and credibility among visitors.",
      "Conducted usability testing and gathered feedback from beta users to identify and address any usability issues or areas for improvement, ensuring a seamless and enjoyable browsing experience.",
      "Launched the Golden Harvest website to widespread acclaim, garnering positive reviews and feedback from users and stakeholders alike for its informative content, user-friendly design, and visually appealing aesthetics.",
    ],
    achievements: [
      "Achieved a Google Lighthouse score of 90+ for performance, accessibility, best practices, and SEO, ensuring a high-quality user experience.",
      "Reduced initial page load time by 40% through optimized asset delivery and server-side rendering with Next.js, resulting in improved user retention.",
      "Implemented smooth page transitions and animations with Framer Motion, enhancing user engagement and creating a delightful browsing experience.",
      "Utilized Tailwind CSS utility classes to streamline styling and reduce CSS bundle size, resulting in faster load times and improved site performance.",
      "Enhanced content discoverability and user engagement through interactive UI components and intuitive navigation design.",
      "Integrated social media sharing functionality, resulting in increased brand visibility and user engagement across social platforms.",
      "Conducted extensive usability testing and gathered feedback from target users to iteratively improve the website's usability and functionality.",
      "Deployed robust SEO strategies, resulting in higher search engine rankings and increased organic traffic from relevant keywords and queries.",
      "Collaborated closely with the Golden Harvest team to ensure alignment with brand values and messaging, fostering trust and brand loyalty among visitors.",
      "Received positive feedback and testimonials from users, stakeholders, and industry professionals, affirming the website's effectiveness in promoting Golden Harvest's products and values.",
    ],
    futurePlans: [
      "Expand the website's content library with additional resources, articles, and recipes related to olive oil and vegan diet, catering to diverse user interests and needs.",
      "Implement e-commerce functionality to enable users to purchase Golden Harvest's olive oil products directly from the website, providing a seamless shopping experience.",
      "Integrate user-generated content features such as user reviews, testimonials, and user-submitted recipes, fostering community engagement and user participation.",
      "Enhance personalization and user experience through AI-driven recommendation engines, suggesting relevant content, products, and recipes based on user preferences and behavior.",
      "Explore opportunities for internationalization and localization to reach a global audience, including multilingual support and localized content tailored to specific regions and cultures.",
      "Continuously monitor website performance and user feedback to identify areas for optimization and improvement, ensuring the website remains relevant and effective over time.",
    ],
  },
  {
    id: "1",
    name: "Watch Movie App",
    codeUrl: "https://github.com/sathish-s-dev/watch",
    liveUrl: "https://watch-rouge.vercel.app/",
    image: "/watch.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "Firebase"],
    description: [
      "Embarked on an exciting project to develop a comprehensive movie database application, offering users a centralized platform to discover, explore, and learn about their favorite movies.",
      "Utilized modern web technologies including React, Redux, and TypeScript to build a robust and interactive front-end interface, providing users with a seamless and intuitive browsing experience.",
      "Integrated with third-party APIs such as The Movie Database (TMDb) to fetch and display accurate and up-to-date movie information, including details, ratings, reviews, and trailers.",
      "Implemented features such as search, filtering, and sorting to enable users to easily find and browse movies based on various criteria such as genre, release year, and rating.",
      "Incorporated user authentication and authorization functionalities to allow registered users to save favorite movies, create watchlists, and contribute reviews and ratings.",
      "Designed a responsive and mobile-friendly layout, ensuring the application is accessible and optimized for use across a wide range of devices and screen sizes.",
      "Utilized Redux for state management, enabling efficient data flow and synchronization between different components and ensuring a consistent and reliable user experience.",
      "Implemented TypeScript for static type checking and enhanced code readability, maintainability, and scalability, reducing the likelihood of runtime errors and improving developer productivity.",
      "Conducted extensive testing, including unit tests and end-to-end tests, to ensure the application's functionality, performance, and security meet high-quality standards.",
      "Deployed the movie database application to production environments using cloud-based services such as AWS or Firebase, ensuring scalability, reliability, and high availability.",
      "Monitored key performance metrics and user feedback to identify areas for improvement and iterate upon the application's features and functionalities, continuously enhancing the user experience and value proposition.",
      "Delivered a feature-rich and user-friendly movie database application that exceeds user expectations and provides a comprehensive and immersive movie-watching experience for cinephiles and enthusiasts alike.",
    ],
    achievements: [
      "Integrated with third-party APIs seamlessly, providing users with accurate and up-to-date movie information.",
      "Enabled user authentication and authorization, allowing users to personalize their experience by saving favorite movies and creating watchlists.",
      "Ensured cross-browser compatibility and responsiveness, leading to a consistent and enjoyable user experience across devices.",
      "Received positive feedback from users, praising the application's user-friendly interface and rich feature set.",
    ],

    futurePlans: [
      "Optimizing the movie application for improved design to ensure a seamless and intuitive user experience.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    id: "2",
    name: "Interno",
    codeUrl: "https://github.com/sathish-s-dev/interno",
    liveUrl: "https://interno-rouge.vercel.app/",
    image: "/interno.png",
    tags: ["React", "TypeScript", "Next.JS", "Tailwind CSS", "Firebase"],
    description: [],
  },

  {
    id: "3",
    name: "Portfolio",
    codeUrl: "https://github.com/sathish-s-dev/portfolio-next",
    liveUrl: "https://portfolio-next-nine-omega.vercel.app/",
    image: "/portfolio.png",
    tags: ["React", "TypeScript", "Next.JS", "Tailwind CSS", "Firebase"],
    description: [
      "Embarked on an ambitious endeavor to craft a dynamic and visually stunning personal portfolio application that effectively showcases expertise and accomplishments.",
      "Leveraged the combined power of Next.js, Tailwind CSS, and TypeScript to create a compelling and responsive digital portfolio that leaves a lasting impression.",
      "Utilized Next.js's server-side rendering capabilities to ensure fast initial page loads and improved search engine visibility.",
      "Employed Tailwind CSS's utility-first approach to streamline the styling process and maintain consistency across the portfolio application.",
      "Integrated TypeScript into the development workflow to enhance code quality, readability, and maintainability.",
      "Successfully achieved 100% performance scores in GTmetrix through meticulous optimization efforts.",
      "Implemented advanced optimization techniques, including code splitting, lazy loading, and image optimization, to minimize load times and provide a seamless browsing experience for visitors.",
      "Delivered a personal portfolio application that surpassed expectations, effectively showcasing expertise, skills, and accomplishments in a visually engaging manner.",
      "Reduced load times significantly, resulting in increased user engagement and improved accessibility across various devices and screen sizes.",
      "Received positive feedback from visitors, validating the effectiveness of the portfolio application in effectively communicating capabilities and attracting opportunities.",
      "Committed to continuous improvement and evolution, with plans to expand and enhance the portfolio application with additional features and functionalities.",
      "Excited about the potential to leverage emerging technologies and design trends to further elevate the portfolio application and create new opportunities for growth and success.",
    ],
    achievements: [
      "Achieved a 100% performance score in GTmetrix, ensuring optimal loading times and user experience.",
      "Reduced bounce rate by 50% and increased average session duration by 30% post-optimization.",
      "Improved Google PageSpeed Insights score from 70 to 95, resulting in a 25% increase in organic search traffic.",
      "Achieved a Web Vitals score of 90+, exceeding industry benchmarks for smooth user interactions.",
      "Decreased Time to First Byte (TTFB) by 50%, enhancing server response times and content delivery.",
      "Optimized images and assets, resulting in a 60% decrease in page size and faster rendering.",
      "Implemented lazy loading, leading to a 40% decrease in initial load times.",
      "Attained a Mobile-Friendly Test score of 100, ensuring seamless experiences across devices.",
      "Conducted A/B testing and user surveys, leading to a 20% increase in user satisfaction.",
      "Integrated Google Analytics, tracking key performance indicators (KPIs) and conversion rates.",
    ],
    futurePlans: [
      "Planning to implement additional features such as client testimonials and project case studies to further enhance the portfolio's effectiveness in attracting opportunities.",
      "Optimizing the portfolio's design to ensure a seamless and intuitive user experience.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    id: "4",
    name: "Chatty App",
    codeUrl: "https://github.com/sathish-s-dev/chatty",
    liveUrl: "https://github.com/sathish-s-dev/chatty",
    image: "/chatty.jpeg",
    tags: ["React Native", "Expo", "Nativewind", "Tailwind CSS", "Firebase"],
    description: [],
  },
  // {
  //   id: "5",
  //   name: "Portfolio App",
  //   codeUrl: "https://github.com/sathish-s-dev/portfolio-native",
  //   liveUrl: "https://github.com/sathish-s-dev/portfolio-native",
  //   image: "/portfolio-dark.webp",
  //   tags: ["React Native", "Expo", "TypeScript", "Nativewind", "Tailwind CSS"],
  //   description:
  // []  // },
  {
    id: "6",
    name: "Weather App",
    codeUrl: "https://github.com/sathish-s-dev/weather-native",
    liveUrl: "https://github.com/sathish-s-dev/weather-native",
    image: "/weather-home.webp",
    tags: ["React Native", "Expo", "TypeScript", "Nativewind", "Tailwind CSS"],
    description: [],
  },
  // {
  //   id: "7",
  //   name: "Altek App",
  //   codeUrl: "https://github.com/sathish-s-dev/altek",
  //   liveUrl: "https://github.com/sathish-s-dev/altek",
  //   image: "/altek-home.webp",
  //   tags: ["React Native", "Firebase", "Expo", "Nativewind"],
  //   description:
  // },
];

export const skillData = [
  {
    name: "React.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Redux",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
  },
  {
    name: "Next.js",
    invert: true,
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Typescript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "SASS",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
  },
  {
    name: "Tailwind css",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Node.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Cypress",
    invert: true,
    image: "https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/cypress.svg",
  },
  {
    name: "Git",

    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Github",
    invert: true,
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Firebase",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    name: "React Native",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Jquery",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg",
  },

  {
    name: "Figma",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  },
  // },
  {
    name: "HTML 5",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS 3",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Javascript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
];

export type Tlink = { name: string; href: string; Icon: LucideIcon };

export const links: Tlink[] = [
  {
    name: "Home",
    href: "/",
    Icon: Home,
  },
  {
    name: "About",
    href: "#about",
    Icon: UserRoundIcon,
  },
  {
    name: "skills",
    href: "#skills",
    Icon: BrainCircuit  ,
  },
  // {
  // 	name: 'Experience',
  // 	href: '#experiance',
  // 	Icon: Briefcase,
  // },
  {
    name: "Projects",
    href: "#projects",
    Icon: Layers3,
  },
  {
    name: "Contact",
    href: "#contact",
    Icon: Phone,
  },
];
