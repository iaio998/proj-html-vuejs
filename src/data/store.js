import { reactive } from "vue";

export const store = reactive({
  courses: [
    {
      id: 1,
      image: "/images/course-02-480x298.jpg",
      price: "$40.00",
      title: "Learning to Write as a Professional Author",
      numberLessons: 20,
      numberStudents: 50,
    },
    {
      id: 2,
      image: "/images/stock-full-hd-03-480x298.jpg",
      price: "Free",
      title: "Customer-centric Info-Tech Strategies",
      numberLessons: 24,
      numberStudents: 769,
    },
    {
      id: 3,
      image: "/images/stock-full-hd-04-480x298.jpg",
      price: "$19.00",
      title: "Open Programming Courses  for Everyone: Python",
      numberLessons: 17,
      numberStudents: 62,
    },
    {
      id: 4,
      image: "/images/stock-full-hd-06-480x298.jpg",
      price: "$26.00",
      title: "Academic Listening and Note-taking",
      numberLessons: 14,
      numberStudents: 67,
    },
    {
      id: 5,
      image: "/images/course-featured-image-01-480x298.jpg",
      price: "$39.00",
      title: "Master jQuery in a Short Period of Time",
      numberLessons: 6,
      numberStudents: 51,
    },
    {
      id: 6,
      image: "/images/stock-full-hd-05-480x298.jpg",
      price: "$59.00",
      title: "Introduction to Javascript for Beginners",
      numberLessons: 14,
      numberStudents: 76,
    },
  ],
});
