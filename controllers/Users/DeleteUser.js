const UserSchema = require('../../models/UserSchema');

module.exports = {
    async deleteUser(request, response) {
        const { Username, Password } = request.body;

        let User = await UserSchema.findOne( {Username} );
        
        console.log(User);

        if("Senha", User.Password) {
            if(User.Password === Password) {
                let isDeleted = await UserSchema.deleteOne( {Username, Password} )
                
                if (isDeleted) return response.status("200").json(User);
                else return response.status("202").send("User not found");
            }
        }
        else {
            //console.log("Não encontrado");
            return response.status("404").send("Not found");
        }
    }
}