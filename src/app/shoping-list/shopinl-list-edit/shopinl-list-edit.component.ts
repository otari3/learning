import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from '../../shared/ingrediants.model';
import { ShopingListService } from '../../shared/shopingListService';
import { Recipe } from '../../recipe-book/recipe.model';

@Component({
  selector: 'app-shopinl-list-edit',
  templateUrl: './shopinl-list-edit.component.html',
  styleUrl: './shopinl-list-edit.component.scss',
})
export class ShopinlListEditComponent implements OnInit {
  @ViewChild('nameInput') nameIngrediant: ElementRef;
  @ViewChild('amountInput') amountIngrediant: ElementRef;
  constructor(private addingIng: ShopingListService) {}

  sendingIngredients() {
    const nameVal = this.nameIngrediant.nativeElement.value;
    const amountVal = this.amountIngrediant.nativeElement.value;
    this.addingIng.addingIngredients(new Ingredient(nameVal, amountVal));
  }
  ngOnInit(): void {}
}
