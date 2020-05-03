const Grade = require('../models/Grade');

//Description: Get all calculations
//Route: GET /api/v1/calculations
//Access: Public
exports.getCalculations = async (req,res,next) => {
    try {
        const grades = await Grade.find();
        return res.status(200).json({
            success: true,
            count: grades.length,
            data: grades
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
} 

//Description: Add calculations
//Route: POST /api/v1/calculations
//Access: Public
exports.addCalculation = async (req,res,next) => {
    try {
        const { text, grade, weight } = req.body;

        const grades = await Grade.create(req.body);
    
        return res.status(201).json({
            success: true,
            data: grades
        });
    } catch (err) {
        if (err.name === 'ValidationError'){
            const messages = Object.values(err.errors).map(value => value.message);
            return res.status(400).json({
                success: false,
                error: messages
            });
        } else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            });
        }
    }
}

//Description: Delete calculation
//Route: DELETE /api/v1/calculations
//Access: Public
exports.deleteCalculation = async (req,res,next) => {
    try {
        const grade = await Grade.findById(req.params.id);
        if (!grade) {
            return res.status(404).json({
                success: false,
                error: 'No grade found'
            });
        }

        await grade.remove();
        return res.status(200).json({
            success: true,
            data: {}
        });

    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}