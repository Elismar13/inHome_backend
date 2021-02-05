const UserSchema = require('../../models/UserSchema');
const { generateNewToken } = require('../auth/TokenGenerator');

module.exports = {
    async createUser(request, response) {
        const { username, password, profile_image } = request.body;

        let user = await UserSchema.findOne( { username });
        if(!user) {
            user = await UserSchema.create({ 
                username:username,
                password:password,
                profile_image:profile_image,
            });
            const token = generateNewToken(username);
            return response.status("201").json(token);
        }


        return response.status("202").json(user);
    }
}