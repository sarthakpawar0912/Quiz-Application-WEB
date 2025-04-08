import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { DemoNgZorroAntdModule } from '../../DemoNgZorroAntdModule';
import { NzCardComponent, NzCardGridDirective, NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';

@NgModule({

  declarations: [],

  imports: [
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzButtonModule,
    NzMessageModule,
    NzFormModule,
    NzInputModule,
    RouterLink,
    RouterOutlet,
    DemoNgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    NzCardComponent,
    NzCardModule,
    NzButtonModule,
    NzGridModule,
    CommonModule
  ],

  exports:[
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzButtonModule,
    NzMessageModule,
    NzFormModule,
    RouterLink,
    RouterOutlet,
    DemoNgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,  
    NzCardModule,
    NzButtonModule,
    NzGridModule,  
    NzInputModule,
  ],

})

export class SharedModule { }
