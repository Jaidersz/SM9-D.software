const coursesService = require('../services/coursesService');

exports.createCourse = async (req, res) => {
    try {
        const course = await coursesService.createCourse(req.body);
        res.status(201).json(course);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getCourses = async (req, res) => {
    try {
        const courses = await coursesService.getCourses();
        res.json(courses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
