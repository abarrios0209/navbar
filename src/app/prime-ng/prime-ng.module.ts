import { NgModule } from '@angular/core';


import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {BadgeModule} from 'primeng/badge';


@NgModule({
  exports: [
    MenubarModule,
    ButtonModule,
    AvatarModule,
    AvatarGroupModule,
    BadgeModule
  ]
})
export class PrimeNgModule { }
