const UserSchema = require('../../models/UserSchema');

module.exports = {
    async Validation(request, response) {
        const { Username, Password } = request.body;
        console.log(Username, Password);

        if(Username && Password) {
            let User = await UserSchema.findOne( {Username} );
            //console.log("Senha: " +  User.Password)
            if(User) {
                if(Password === User.Password) return response.json(User);
            }
            else {
                return response.status("401").send("Invalid password");
            }
        }

        return response.status('404').send("Not found");
    }
}