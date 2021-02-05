module.exports = {
    async Validation(request, response, next) {
        const { username, password } = request.body;
        console.log(username, password);

        if(username && password) {
            let user = await UserSchema.findOne( {username} );
            //console.log("Senha: " +  User.password)
            if(user) {
                if(password === user.password) return response.json(user);
            }
            else {
                return response.status("401").send("Invalid password");
            }
        }

        return response.status('404').send("Not found");
    }
}