import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { StoreModule } from "./store/store.module";
import { StoreComponent } from "./store/store.component";
import { CheckoutComponent } from "./store/checkout.component";
import { CartDetailComponent } from "./store/cartDetail.component";
import { AboutComponent } from "./store/about.component";
import { RouterModule } from "@angular/router";
import { StoreFirstGuard } from "./storeFirst.guard";
// import { FooterComponent } from './components/footer/footer.component';
@NgModule({
 imports: [BrowserModule, StoreModule,
 RouterModule.forRoot([
 {
 path: "store", component: StoreComponent,
 canActivate: [StoreFirstGuard]
 },
 {
     path: "about", component: AboutComponent,
 },
 {
 path: "cart", component: CartDetailComponent,
 canActivate: [StoreFirstGuard]
 },
 {
 path: "checkout", component: CheckoutComponent,
 canActivate: [StoreFirstGuard]
 },

 {
 path: "admin",
 loadChildren: "./admin/admin.module#AdminModule",
 canActivate: [StoreFirstGuard]
 },
 { path: "**", redirectTo: "/store" }
 ])],
 providers: [StoreFirstGuard],
 declarations: [AppComponent],
 bootstrap: [AppComponent]
})
export class AppModule { }