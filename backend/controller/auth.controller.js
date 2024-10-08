import { StatusCodes } from "http-status-codes";
import User from "../model/user.model.js"

export const signup = async (req, res) => {
    try {
        const { firstName, lastName, username, gender, password, confirmPassword } = req.body;

        if (password != confirmPassword) {
            return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Password do not match' });
        }

        const user = await User.findOne({ username });

        if (user) {
            return res.status(StatusCodes.BAD_REQUEST).json({ message: 'User already exists' });
        }

        const profilePicture = `https://avatar.iran.liara.run/public/${gender === 'male' ? 'boy' : 'girl'}?username=${username}`;
        const newUser = new User({ firstName, lastName, username, gender, password, profilePicture })

        if (newUser) {
            await newUser.save();
        }
        res.status(StatusCodes.OK).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Internal servor error" });
    }
}

export const login = async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username })

    if (!user) {
        return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Invalid username or password' });
    }

    const isMatch = await user.comparePassword(password)

    if (!isMatch) {
        return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Invalid email or password' });
    }

    res.status(StatusCodes.OK).json({
        message: "User found", user: {
            _id: user._id,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            gender: user.gender,
            profilePicture: user.profilePicture
        }
    });
}