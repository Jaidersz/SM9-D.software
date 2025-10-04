let courses = [];
let idCounter = 1;

exports.createCourse = async (courseData) => {
    const newCourse = { id: idCounter++, ...courseData };
    courses.push(newCourse);
    return newCourse;
};

exports.getCourses = async () => {
    return courses;
};
