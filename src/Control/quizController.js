

const StudentResult = require('../Model/ResultSchema');

const GetStudentResult = async (req, res) => {
    try {
        const { title, ObtainScore, studentId } = req.body;

        // Validate input
        if (!title || !ObtainScore || !studentId) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        // Create and save the result
        const result = new StudentResult({
            title,
            ObtainScore,
            studentId
        });

        await result.save();

        // Send response with success message
        res.status(201).json({
            success: true,
            message: "Student result saved successfully",
            data: result
        });

    } catch (e) {
        console.error(e);
        res.status(500).json({ error: "An error occurred while saving the result" });
    }
};

module.exports = { GetStudentResult };
