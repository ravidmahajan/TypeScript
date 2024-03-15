//Class implementation
var DemoItem = /** @class */ (function () {
    function DemoItem() {
        // design as per contract
        this.Name = "";
        this.Price = 0;
        this.Stock = true; // additional property
        this.CategoryName = "";
        this.Qty = 0;
    }
    DemoItem.prototype.Total = function () {
        return this.Qty * this.Price;
    };
    DemoItem.prototype.Print = function () {
        console.log("Name : ".concat(this.Name, "\nPrice : ").concat(this.Price, "\nQuantity : ").concat(this.Qty, "\nTotal : ").concat(this.Total(), "\nCategoryName : ").concat(this.CategoryName, "\nStock : ").concat(this.Stock));
    };
    return DemoItem;
}());
var item1 = new DemoItem();
item1.Name = "Laptop";
item1.Price = 2500;
item1.Qty = 3;
item1.CategoryName = "Electronics";
item1.Print();
