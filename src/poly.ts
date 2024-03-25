class Emp {
    public FirstName: string = "";
    public LastName: string = "";
    public Designation: string = "";
    public Print(): void {
        document.write(`${this.FirstName} ${this.LastName} - ${this.Designation} <br>`);
    }
}

class Developer extends Emp {
    FirstName = "Ravi";
    LastName = "Mahajan"
    Designation = "Software Engineer";
    Role = "Developer role: Build, Debug, Test, Deploy";
    Print(){
        super.Print();
        document.write(this.Role);
    }
}

class Admin extends Emp {
    FirstName = "Raj";
    LastName = "Mahajan"
    Designation = "Admin";
    Role = "Admin role: Authnetication, Authorization";
    Print(){
        super.Print();
        document.write(this.Role);
    }
}

class Manager extends Emp {
    FirstName = "Rahul";
    LastName = "Mahajan"
    Designation = "Manager";
    Role = "Manager role: Approvals";
    Print(){
        super.Print();
        document.write(this.Role);
    }
}

let employees: Emp[] = [new Developer(), new Admin(), new Manager()];
