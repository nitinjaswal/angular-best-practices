import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";

import { CatalogComponent } from "./catalog.component";
import { CatalogRepositoryService } from "./catalog-repository.service";

@NgModule({
  imports: [RouterModule,SharedModule],
  declarations: [CatalogComponent],
  exports: [],
  providers: [CatalogRepositoryService],
})
export class CatalogModule {}
