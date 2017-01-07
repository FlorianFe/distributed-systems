var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var User = (function (_super) {
    __extends(User, _super);
    function User(name, cursor) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.cursor = cursor;
        _this.color = _this.getRandomColor();
        return _this;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.getCursor = function () {
        return this.cursor;
    };
    User.prototype.getRandomColor = function () {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    return User;
}(Entity));
//# sourceMappingURL=User.js.map