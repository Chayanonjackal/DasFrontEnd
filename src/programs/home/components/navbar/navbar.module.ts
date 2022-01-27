import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from "./navbar.component";

// primeng
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    ConfirmPopupModule,
    ButtonModule,
    MessagesModule,
    MessageModule,
    RippleModule,
  ],
  exports: [NavbarComponent],
})
export class NavbarModule {}