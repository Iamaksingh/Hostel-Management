const Student = require('../models/student');

exports.getFees = async (req, res) => {
    const { email, fees } = req.body; // Assuming fees is an object containing amount and paid status

    try {
        // Find the user by email
        const user = await Student.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Update user's fees data
        user.fees = fees; // Assuming fees is an object containing amount and paid status

        // Save the updated user
        await user.save();

        // Respond with success message or updated user data
        res.status(200).json({ message: 'Fees updated successfully'});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
