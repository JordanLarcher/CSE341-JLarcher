const getLesson1 = (req, res) => {
    res.send('This is the lesson 1 route');
};


const getLesson2 = (req, res) => {
    res.send('This is the lesson 2 route');
};

module.exports = {
    getLesson1,
    getLesson2
};