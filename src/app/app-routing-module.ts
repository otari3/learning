import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { ShopingListComponent } from './shoping-list/shoping-list.component';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
import { DetailsNotSelectedComponent } from './recipe-book/detailsNotSelected/details-not-selected/details-not-selected.component';
import { RecipeEditComponent } from './recipe-book/recepiEdit/recipe-edit/recipe-edit.component';

const appRouts: Routes = [
  { path: '', redirectTo: '/recipe', pathMatch: 'full' },
  {
    path: 'recipe',
    component: RecipeBookComponent,
    children: [
      { path: '', component: DetailsNotSelectedComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent },
    ],
  },
  { path: 'shoping', component: ShopingListComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(appRouts)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
