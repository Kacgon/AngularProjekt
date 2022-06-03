import { NgModule } from "@angular/core";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatProgressBarModule} from '@angular/material/progress-bar'
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button'
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
    imports:[MatProgressBarModule,
        MatTableModule,
        MatIconModule,
        MatTooltipModule,
        MatCardModule,
        MatToolbarModule,
        MatButtonModule,
        MatDialogModule,
    ],
    exports:[MatProgressBarModule,
        MatTableModule,
        MatIconModule,
        MatTooltipModule,
        MatCardModule,
        MatToolbarModule,
        MatButtonModule,
        MatDialogModule,
    ],
    declarations:[],
    providers:[],

})
export class CommonMaterialModules {
}