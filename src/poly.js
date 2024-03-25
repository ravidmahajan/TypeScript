var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Emp = /** @class */ (function () {
    function Emp() {
        this.FirstName = "";
        this.LastName = "";
        this.Designation = "";
    }
    Emp.prototype.Print = function () {
        document.write("".concat(this.FirstName, " ").concat(this.LastName, " - ").concat(this.Designation, " <br>"));
    };
    return Emp;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.FirstName = "Ravi";
        _this.LastName = "Mahajan";
        _this.Designation = "Software Engineer";
        _this.Role = "Developer role: Build, Debug, Test, Deploy";
        return _this;
    }
    Developer.prototype.Print = function () {
        _super.prototype.Print.call(this);
        document.write(this.Role);
    };
    return Developer;
}(Emp));
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.FirstName = "Raj";
        _this.LastName = "Mahajan";
        _this.Designation = "Admin";
        _this.Role = "Admin role: Authnetication, Authorization";
        return _this;
    }
    Admin.prototype.Print = function () {
        _super.prototype.Print.call(this);
        document.write(this.Role);
    };
    return Admin;
}(Emp));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.FirstName = "Rahul";
        _this.LastName = "Mahajan";
        _this.Designation = "Manager";
        _this.Role = "Manager role: Approvals";
        return _this;
    }
    Manager.prototype.Print = function () {
        _super.prototype.Print.call(this);
        document.write(this.Role);
    };
    return Manager;
}(Emp));
var employees = [new Developer(), new Admin(), new Manager()];
