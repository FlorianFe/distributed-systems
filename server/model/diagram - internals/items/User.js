var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var User = (function (_super) {
    __extends(User, _super);
    function User(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    return User;
}(Entity));
//# sourceMappingURL=User.js.map