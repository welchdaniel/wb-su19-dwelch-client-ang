import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebsiteListComponent } from './website-list/website-list.component';
import { PageListComponent } from './page-list/page-list.component';
import { PageEditorComponent } from './page-editor/page-editor.component';
import { PageToolbarComponent } from './page-toolbar/page-toolbar.component';
import { RowComponent } from './row/row.component';
import { RowToolbarComponent } from './row-toolbar/row-toolbar.component';
import { ColumnComponent } from './column/column.component';
import { ColumnToolbarComponent } from './column-toolbar/column-toolbar.component';
import { WidgetComponent } from './widget/widget.component';
import { WidgetToolbarComponent } from './widget-toolbar/widget-toolbar.component';
import { WidgetEditorComponent } from './widget-editor/widget-editor.component';


@NgModule({
  declarations: [
    AppComponent,
    WebsiteListComponent,
    PageListComponent,
    PageEditorComponent,
    PageToolbarComponent,
    RowComponent,
    RowToolbarComponent,
    ColumnComponent,
    ColumnToolbarComponent,
    WidgetComponent,
    WidgetToolbarComponent,
    WidgetEditorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }