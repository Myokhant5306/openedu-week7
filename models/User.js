import m from 'mongoose';

export { User as default };

function User() {
    const UserSchema = m.Schema({
        login: String,
        password: String
    });
    return m.model('User', UserSchema);
}
