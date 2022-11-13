import { NgModule } from "@angular/core";
import { PhotoComponent } from "./photo/photo.component";

@NgModule({
    // Declara e export o componente
    declarations: [ PhotoComponent ],
    exports: [ PhotoComponent ]
})
export class PhotosModule {}
