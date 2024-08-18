class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}arka`
    }

    set password(value){
        this._password = value
    }
}

const arka = new User("arka.ai", "abc")
console.log(arka.email);
console.log(arka.password);