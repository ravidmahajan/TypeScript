interface ProductsContract {
    Name: string;
    Price: number;
    Qty: number;
    Total(): number;
    Print(): void;
}

abstract class ProductTemplate implements ProductsContract {
    public Name: string = "";
    public  Price: number = 0;
    public  Qty: number = 0;
    public abstract Total(): number;
    public abstract Print(): void;

}

class ProductComponent extends ProductTemplate {
    Name: string = "TV";
    Price: number = 56743;
    Qty: number = 3;
    Total(): number {
        return this.Qty * this.Price;
    }
    Print(): void {
        console.log(`Name=${this.Name}\nPrice= ${this.Price}\nQty= ${this.Qty}\nTotal= ${this.Total()}`);
    }
}

let productObj = new ProductComponent();
productObj.Print();