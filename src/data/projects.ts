export type Project = {
  id: number;
  title: string;
  image: string;
  category: string;
  description: string;
  tech: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'Landing Page Web Travel',
    image: 'images/frontend/web_travel.jpeg',
    category: 'frontend',
    description:
      'A responsive and engaging landing page designed for a travel platform, showcasing destinations and tour packages. Features an intuitive search form and stunning visual elements to enhance user experience and drive conversions.',
    tech: ['HTML', 'CSS'],
  },
  {
    id: 2,
    title: 'Landing Page GoStudy',
    image: 'images/frontend/lp_gostudy.jpeg',
    category: 'frontend',
    description:
      'Development of a user-friendly landing page for GoStudy, an online education platform. The design focuses on intuitive user experience, presenting course information clearly, and effectively guiding users towards registration with strong calls-to-action.',
    tech: ['React', 'Tailwind CSS'],
  },
  {
    id: 3,
    title: 'Dashboard Admin GoStudy',
    image: 'images/frontend/admin_gostudy.jpeg',
    category: 'frontend',
    description:
      'An administrative dashboard interface for the GoStudy platform, designed to facilitate efficient management of content, users, courses, and analytics. Features a clean layout, streamlined navigation, and informative data visualizations for quick decision-making.',
    tech: ['React', 'Vite', 'Tailwind CSS'],
  },
  {
    id: 4,
    title: 'Back End GoStudy',
    image: 'images/backend/swagger_gostudy.jpeg',
    category: 'backend',
    description:
      'Development of a robust and scalable backend API supporting the GoStudy application. Utilizing a RESTful architecture with comprehensive Swagger documentation, ensuring secure and efficient data communication between the front-end and the database.',
    tech: ['NodeJS', 'Express', 'Postgresql', 'Midtrans', 'Sequelize'],
  },
  {
    id: 5,
    title: 'Testing GoStudy',
    image: 'images/backend/coverage_gostudy.png',
    category: 'backend',
    description:
      "Implementation of a comprehensive testing strategy with integration testing for the GoStudy backend. This ensures the application's stability, reliability, and performance, including functional, security, and high code coverage testing to minimize bugs.",
    tech: ['Jest', 'Supertest'],
  },
  {
    id: 6,
    title: 'Email Drill',
    image: 'images/frontend/email_drill.png',
    category: 'frontend',
    description:
      'A responsive web dashboard for managing and visualizing email performance metrics. Built with modern UI components to ensure an intuitive user experience, focusing on clean design and seamless interaction.',
    tech: ['Laravel', 'Tailwind CSS'],
  },
  {
    id: 7,
    title: 'Back End SPPku',
    image: 'images/backend/sppku_backend.png',
    category: 'backend',
    description:
      'Design and development of a robust, secure, and scalable RESTful API for the SPPku platform. Features include structured Swagger documentation, integration with Midtrans for payment processing, and efficient database management using PostgreSQL and Drizzle ORM.',
    tech: ['NodeJS', 'Hono', 'Postgresql', 'Midtrans', 'Drizzle'],
  },
  {
    id: 8,
    title: 'Testing SPPku',
    image: 'images/backend/coverage_sppku.png',
    category: 'backend',
    description:
      'Implementation of a comprehensive integration testing strategy for the SPPku backend. Ensures system reliability, high code coverage, and security through functional and performance testing using Jest and Hono Testing utilities.',
    tech: ['Jest', 'Hono Testing'],
  },
];
