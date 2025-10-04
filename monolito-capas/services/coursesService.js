const coursesRepo = require('../repositories/coursesRepo');

exports.createCourse = async (courseData) => {
    return await coursesRepo.createCourse(courseData);
};

exports.getCourses = async () => {
    return await coursesRepo.getCourses();
};
