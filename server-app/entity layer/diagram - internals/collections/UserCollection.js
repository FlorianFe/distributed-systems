var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var UserCollection = (function (_super) {
    __extends(UserCollection, _super);
    function UserCollection() {
        var _this = _super.call(this) || this;
        _this.users = new Array();
        return _this;
    }
    UserCollection.prototype.addUser = function (user) {
        this.users.push(user);
    };
    UserCollection.prototype.removeUser = function (user) {
        for (var i = 0; i < this.users.length; i++) {
            if (this.users[i] === user) {
                this.users.splice(i, 1);
                return;
            }
        }
    };
    return UserCollection;
}(Entity));
//# sourceMappingURL=UserCollection.js.map