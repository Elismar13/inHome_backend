const UserSchema = require('../../models/UserSchema');

module.exports = {
    async createUser(request, response) {
        const { Username, Password, ProfileImage } = request.body;

        let User = await UserSchema.findOne( { Username });
        if(!User) {
            User = await UserSchema.create({ 
                Username:Username,
                Password:Password,
                ProfileImage:ProfileImage,
            });

            return response.status("201").json(User);
        }


        return response.status("202").json(User);
    }
}