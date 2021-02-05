const UserSchema = require('../../models/UserSchema');

module.exports = {
    async deleteUser(request, response) {
        const { username, password } = request.body;

        let user = await UserSchema.findOne({ username });
        
        console.log(user);

        if("Senha", user.password) {
            if(user.password === password) {
                let isDeleted = await UserSchema.deleteOne({ username, password })
                
                if (isDeleted) return response.status("200").json(user);
                else return response.status("202").send("User not found");
            }
        }
        else {
            //console.log("Não encontrado");
            return response.status("404").send("Not found");
        }
    }
}