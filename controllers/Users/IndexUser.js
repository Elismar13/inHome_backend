const UserSchema = require('../../models/UserSchema');

module.exports = {
    async IndexUser(request, response) {
        const Username = request.query.id;
        let User = await UserSchema.findOne( {Username} );

        return response.json(User);
    }
}