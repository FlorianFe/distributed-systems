var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Cursor = (function (_super) {
    __extends(Cursor, _super);
    function Cursor(x, y) {
        var _this = _super.call(this) || this;
        _this.x = x;
        _this.y = y;
        return _this;
    }
    Cursor.prototype.setX = function (x) {
        this.x = x;
    };
    Cursor.prototype.setY = function (y) {
        this.y = y;
    };
    return Cursor;
}(Entity));
//# sourceMappingURL=Cursor.js.map