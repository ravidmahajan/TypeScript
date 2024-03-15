//Class implementation


interface IDemoItem{
    Name: string;
    Price: number;
    Qty: number;
    Total(): number;
    Print(): void;
}

interface ICategoryItem {
    CategoryName: string;
}

class DemoItem implements IDemoItem, ICategoryItem {
    // design as per contract
    public Name: string = "";
    public Price: number = 0;
    public Stock: boolean = true; // additional property
    public CategoryName: string  = "";
    public Qty: number = 0;
    public Total(): number {
        return this.Qty * this.Price;
    }
    public Print(): void {
        console.log(`Name : ${this.Name}\nPrice : ${this.Price}\nQuantity : ${this.Qty}\nTotal : ${this.Total()}\nCategoryName : ${this.CategoryName}\nStock : ${this.Stock}`);
    }

}

let  item1 = new DemoItem();
item1.Name="Laptop";
item1.Price=2500;
item1.Qty=3;
item1.CategoryName = "Electronics";
item1.Print()