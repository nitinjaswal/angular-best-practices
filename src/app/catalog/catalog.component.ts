import { Component, OnInit } from "@angular/core";
import { UserRepositoryService } from "../core/user-repository.service";
import { CatalogRepositoryService } from "./catalog-repository.service";
import { IClass } from "./class.model";
import { FilterClassService } from "./filter-classes.service";

@Component({
  styleUrls: ["./catalog.component.css"],
  templateUrl: "./catalog.component.html",
})
export class CatalogComponent implements OnInit {
  classes: IClass[] = [];
  visibleClasses: IClass[] = [];

  constructor(
    public catalogRepository: CatalogRepositoryService,
    public userRepository: UserRepositoryService,
    public filterClassesService:FilterClassService
  ) {}

  ngOnInit() {
    this.catalogRepository.getCatalog().subscribe((classes) => {
      this.classes = classes;
      this.applyFilter("");
    });
  }

  enroll(classToEnroll: IClass) {
    classToEnroll.processing = true;
    this.catalogRepository.enroll(classToEnroll.classId).subscribe(
      null,
      (err) => {
        console.error(err);
        classToEnroll.processing = false;
      }, //add a toast message or something
      () => {
        classToEnroll.processing = false;
        classToEnroll.enrolled = true;
      }
    );
  }

  drop(classToDrop: IClass) {
    classToDrop.processing = true;
    this.catalogRepository.drop(classToDrop.classId).subscribe(
      null,
      (err) => {
        console.error(err);
        classToDrop.processing = false;
      }, //add a toast message or something
      () => {
        classToDrop.processing = false;
        classToDrop.enrolled = false;
      }
    );
  }

  applyFilter(filter:string){
    this.visibleClasses = this.filterClassesService.filterClasses(filter,this.classes)
  }
 
}
