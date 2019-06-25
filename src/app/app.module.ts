import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebsiteListComponentComponent } from './website-list-component/website-list-component.component';
import { PageListComponentComponent } from './page-list-component/page-list-component.component';
import { PageEditorComponentComponent } from './page-editor-component/page-editor-component.component';
import { PageToolbarComponentComponent } from './page-toolbar-component/page-toolbar-component.component';
import { RowComponentComponent } from './row-component/row-component.component';
import { RowToolbarComponentComponent } from './row-toolbar-component/row-toolbar-component.component';
import { ColumnComponentComponent } from './column-component/column-component.component';
import { ColumnToolbarComponentComponent } from './column-toolbar-component/column-toolbar-component.component';
import { WidgetComponentComponent } from './widget-component/widget-component.component';
import { WidgetToolbarComponentComponent } from './widget-toolbar-component/widget-toolbar-component.component';
import { WidgetEditorComponentComponent } from './widget-editor-component/widget-editor-component.component';

@NgModule({
  declarations: [
    AppComponent,
    WebsiteListComponentComponent,
    PageListComponentComponent,
    PageEditorComponentComponent,
    PageToolbarComponentComponent,
    RowComponentComponent,
    RowToolbarComponentComponent,
    ColumnComponentComponent,
    ColumnToolbarComponentComponent,
    WidgetComponentComponent,
    WidgetToolbarComponentComponent,
    WidgetEditorComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
