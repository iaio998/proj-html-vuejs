import { reactive } from "vue";

export const store = reactive({
  courses: [
    {
      idCourses: 1,
      image: "/images/course-02-480x298.jpg",
      price: "$40.00",
      title: "Learning to Write as a Professional Author",
      numberLessons: 20,
      numberStudents: 50,
    },
    {
      idCourses: 2,
      image: "/images/stock-full-hd-03-480x298.jpg",
      price: "Free",
      title: "Customer-centric Info-Tech Strategies",
      numberLessons: 24,
      numberStudents: 769,
    },
    {
      idCourses: 3,
      image: "/images/stock-full-hd-04-480x298.jpg",
      price: "$19.00",
      title: "Open Programming Courses  for Everyone: Python",
      numberLessons: 17,
      numberStudents: 62,
    },
    {
      idCourses: 4,
      image: "/images/stock-full-hd-06-480x298.jpg",
      price: "$26.00",
      title: "Academic Listening and Note-taking",
      numberLessons: 14,
      numberStudents: 67,
    },
    {
      idCourses: 5,
      image: "/images/course-featured-image-01-480x298.jpg",
      price: "$39.00",
      title: "Master jQuery in a Short Period of Time",
      numberLessons: 6,
      numberStudents: 51,
    },
    {
      idCourses: 6,
      image: "/images/stock-full-hd-05-480x298.jpg",
      price: "$59.00",
      title: "Introduction to Javascript for Beginners",
      numberLessons: 14,
      numberStudents: 76,
    },
  ],
  testimonials: [
    {
      idTestimonial: 1,
      image: "/images/testimonial-avata-02.jpg",
      text: "I am free to learn at my own pace, follow my own schedule and choose the subject I like. Great study portal for people like me.",
      name: "MINA HOLLACE",
      job: "/ Freelancer",
    },
    {
      idTestimonial: 2,
      image: "/images/testimonial-avata-01.jpg",
      text: "MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.",
      name: "LUVIC DUBBLE",
      job: "/ Private Tutor",
    },
    {
      idTestimonial: 3,
      image: "/images/testimonial-avata-03.jpg",
      text: "I'm a very strict person so I require everything to be organized and neat. MaxCoach guys just got me.",
      name: "FLORENCE THEMES",
      job: "/ Multimedia Admin",
    },
    {
      idTestimonial: 4,
      image: "/images/testimonial-avata-04.jpg",
      text: "MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.",
      name: "MADLEY PONDOR",
      job: "/ IT Specialist",
    },
  ],
  clients: [
    {
      partId: 1,
      name: "Client one",
      logo: "/images/client-logo-colored-01.png",
    },
    {
      partId: 2,
      name: "Client two",
      logo: "/images/client-logo-colored-02.png",
    },
    {
      partId: 3,
      name: "Client three",
      logo: "/images/client-logo-colored-03.png",
    },
    {
      partId: 4,
      name: "Client four",
      logo: "/images/client-logo-colored-04.png",
    },
    {
      partId: 5,
      name: "Client five",
      logo: "/images/client-logo-colored-05.png",
    },
    {
      partId: 6,
      name: "Client six",
      logo: "/images/client-logo-colored-06.png",
    },
  ],
});
