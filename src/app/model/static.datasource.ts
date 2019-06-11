import { Injectable } from "@angular/core"; 
import { Product } from "./product.model"; 
import { Observable, from } from "rxjs";
@Injectable()
export class StaticDataSource{
    private products: Product[] = [
        new Product("Mr.Sandeep Singh",234,"CSE","sandeeps@ncuindia.edu",9087654346,new Date("July 20,1978"),"Assistant Professor","Male",new Date("August 23,1998"),"908 sector-9,GUrugram,Haryana",21,"n" ),
        new Product("Ms.Prerna Singhal",234,"CSE","sandeeps@ncuindia.edu",9087654346,new Date("July 20,1970"),"Assistant Professor","Male",new Date("August 23,1998"),"908 sector-9,GUrugram,Haryana",21 ,"n"),
        new Product("Ms.Hitesh Yadav",234,"CSE","sandeeps@ncuindia.edu",9087654346,new Date("July 20,1979"),"Assistant Professor","Male",new Date("August 23,1998"),"908 sector-9,GUrugram,Haryana",21 ,"n"),
        new Product("Dr.Kavita Khanna",234,"CSE","sandeeps@ncuindia.edu",9087654346,new Date("July 20,1977"),"Assistant Professor","Male",new Date("August 23,1998"),"908 sector-9,GUrugram,Haryana",21,"n" ),
        new Product("Dr.Sharda Vashisth",234,"ECE","sandeeps@ncuindia.edu",9087654346,new Date("July 20,1977"),"Assistant Professor","Male",new Date("August 23,1998"),"908 sector-9,GUrugram,Haryana",21 ,"n"),
        new Product("Dr.Rekha Vig",234,"ECE","sandeeps@ncuindia.edu",9087654346,new Date("July 20,1977"),"Assistant Professor","Male",new Date("August 23,1998"),"908 sector-9,GUrugram,Haryana",21 ,"n"),
        new Product("Dr.Vandana Khanna",234,"ECE","sandeeps@ncuindia.edu",9087654346,new Date("July 20,1977"),"Assistant Professor","Male",new Date("August 23,1998"),"908 sector-9,GUrugram,Haryana",21 ,"n"),
        new Product("Dr.Swaran Ahuja",234,"ECE","sandeeps@ncuindia.edu",9087654346,new Date("July 20,1977"),"Assistant Professor","Male",new Date("August 23,1998"),"908 sector-9,GUrugram,Haryana",21 ,"n"),
        new Product("Mr.Diptendu Roy",234,"Civil","sandeeps@ncuindia.edu",9087654346,new Date("July 20,1977"),"Assistant Professor","Male",new Date("August 23,1998"),"908 sector-9,GUrugram,Haryana",21 ,"n"),
        new Product("Dr.Archanaa Dongre",234,"Civil","sandeeps@ncuindia.edu",9087654346,new Date("July 20,1977"),"Assistant Professor","Male",new Date("August 23,1998"),"908 sector-9,GUrugram,Haryana",21,"n" ),
        new Product("Mr.Shubham Bansal",234,"Civil","sandeeps@ncuindia.edu",9087654346,new Date("July 20,1977"),"Assistant Professor","Male",new Date("August 23,1998"),"908 sector-9,GUrugram,Haryana",21,"n"),
        new Product("Prof H.B.Raghavendra",234,"Civil","sandeeps@ncuindia.edu",9087654346,new Date("July 20,1977"),"Assistant Professor","Male",new Date("August 23,1998"),"908 sector-9,GUrugram,Haryana",21 ,"n"),
        new Product("Dr.Pramod Bhatia",234,"ME","sandeeps@ncuindia.edu",9087654346,new Date("July 20,1977"),"Assistant Professor","Male",new Date("August 23,1998"),"908 sector-9,GUrugram,Haryana",2,"n"),
        new Product("Dr.Rohit Singh Lather",234,"ME","sandeeps@ncuindia.edu",9087654346,new Date("July 20,1977"),"Assistant Professor","Male",new Date("August 23,1998"),"908 sector-9,GUrugram,Haryana",21,"n" ),
        new Product("Dr.Vikas Sharma",234,"ME","sandeeps@ncuindia.edu",9087654346,new Date("July 20,1977"),"Assistant Professor","Male",new Date("August 23,1998"),"908 sector-9,GUrugram,Haryana",21 ,"n"),
        new Product("Mr.Praveen Singh",234,"ME","sandeeps@ncuindia.edu",9087654346,new Date("July 20,1977"),"Assistant Professor","Male",new Date("August 23,1998"),"908 sector-9,GUrugram,Haryana",21 ,"n")
    ];
    getProducts(): Observable<Product[]> {        
        return from([this.products]);    
    } 
}