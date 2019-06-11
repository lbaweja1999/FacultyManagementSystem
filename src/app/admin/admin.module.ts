import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { AdminComponent } from "./admin.component";
import { AuthGuard } from "./auth.guard";
import { ProductTableComponent } from "./productTable.component";
import { ProductEditorComponent } from "./productEditor.component";
let routing = RouterModule.forChild([
    { path: "auth", component: AuthComponent },
    {
    path: "main", component: AdminComponent, canActivate: [AuthGuard],
    children: [
    { path: "products/:mode/:id", component: ProductEditorComponent },
    { path: "products/:mode", component: ProductEditorComponent },
    { path: "products", component: ProductTableComponent },
    { path: "**", redirectTo: "products" }
    ]
    },
    { path: "**", redirectTo: "auth" }
   ]);
   @NgModule({
    imports: [CommonModule, FormsModule, routing],
    providers: [AuthGuard],
    declarations: [AuthComponent, AdminComponent,
    ProductTableComponent, ProductEditorComponent]
   })
   export class AdminModule {}