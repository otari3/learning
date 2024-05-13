import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.scss',
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  constructor(private activetedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.activetedRoute.params.subscribe((data: Params) => {
      console.log(data);

      this.id = +data['id'];
      this.editMode = data['id'] != null;
    });
  }
}
