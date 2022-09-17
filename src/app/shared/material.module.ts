import { NgModule } from '@angular/core';

import { MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatTabsModule} from '@angular/material/tabs';
import { MatSelectModule} from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [],
  imports: [
  ],
  exports:[
    MatSidenavModule,MatIconModule,MatToolbarModule,MatTabsModule,MatButtonModule,MatExpansionModule,MatFormFieldModule,
    MatCardModule,MatSelectModule
  ],
  providers: []
})
export class MaterialModule { }
