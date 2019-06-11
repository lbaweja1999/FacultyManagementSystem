import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";
import { Cart } from "./cart.model";
import { RestDataSource } from "./rest.datasource";
import { HttpClientModule } from "@angular/common/http";
import { AuthService } from "./auth.service";
@NgModule({
 imports: [HttpClientModule],
 providers: [ProductRepository, Cart,
 { provide: StaticDataSource, useClass: RestDataSource },
 RestDataSource, AuthService]
})
export class ModelModule { }