import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShopingListComponent } from './shoping-list/shoping-list.component';
import { ShopinlListEditComponent } from './shoping-list/shopinl-list-edit/shopinl-list-edit.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { RecipeListComponent } from './recipe-book/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-book/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
import { FormsModule } from '@angular/forms';
import { DropdwonDirective } from './shared/dropdwon.directive';
import { RecipeService } from './shared/recipeService';
import { ShopingListService } from './shared/shopingListService';
import { AppRoutingModule } from './app-routing-module';
import { DetailsNotSelectedComponent } from './recipe-book/detailsNotSelected/details-not-selected/details-not-selected.component';
import { RecipeEditComponent } from './recipe-book/recepiEdit/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShopingListComponent,
    ShopinlListEditComponent,
    RecipeBookComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    DropdwonDirective,
    DetailsNotSelectedComponent,
    RecipeEditComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [ShopingListService, RecipeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
