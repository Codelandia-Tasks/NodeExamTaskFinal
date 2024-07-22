class User {
    constructor(rows){
        this.username = rows?.username,
        this.password = rows?.password
    }

    static mapAll(data){
        return data.map(row => new User(row));
    }

    static mapOne(row){
        return new User(row);
    }
}

module.exports = User;