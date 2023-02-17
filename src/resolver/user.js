const User = require("../model/user")

module.exports = {
    users: async () => {
        try {
            const postsFetched = await User.find()
            return postsFetched.map(user => {
                return {
                    ...user._doc,
                    _id: user.id,
                    createdAt: new Date(user._doc.createdAt).toISOString(),
                }
            })
        } catch (error) {
            throw error
        }
    },

    user: async (_id) => {
        try {
            const postFetched = await User.findById(_id);
            return {
                ...postFetched._doc,
                _id: postFetched.id,
                createdAt: new Date(postFetched._doc.createdAt).toISOString(),
            }
        } catch (error) {
            throw error
        }
    },

    createUser: async args => {
        try {
            const { name, email, password, mobileNo } = args.user
            const userdata = new User({
                name :name, 
                email:email, 
                password:password, 
                mobileNo:mobileNo
            })
            const newUser = await userdata.save()
            return { ...newUser._doc, _id: newUser.id }
        } catch (error) {
            throw error
        }
    },

    deleteUser: async (id) => {
        try {
            const deletedUser = await User.findByIdAndDelete(id);
            return {
                ...deletedUser._doc,
                _id: deletedUser.id,
                createdAt: new Date(deletedUser._doc.createdAt).toISOString(),
            }
        } catch (error) {
            throw error
        }
    },

    updatePost: async args => {
        try {
            const { _id, name,email,password,mobileNo } = args
            const updatedUser = await User.findByIdAndUpdate(_id, { name,email,password,mobileNo});
            return `User ${updatedUser.id} updated Successfully!!!`
        } catch (error) {
            throw error
        }
    },
}