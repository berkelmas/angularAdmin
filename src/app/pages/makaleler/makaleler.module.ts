import { NgModule } from '@angular/core';
import { MakalelerComponent } from './makaleler.component';
import { MakalelerRoutingModule } from './makalelerRouting.module';

@NgModule({
  imports: [
    MakalelerRoutingModule,
  ],
  declarations: [
    MakalelerComponent,
  ],
})
export class MakalelerModule {}
