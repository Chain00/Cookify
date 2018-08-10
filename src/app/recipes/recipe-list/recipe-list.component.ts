import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2015/08/10/15/55/bbq-steak-882831_960_720.jpg'),
    new Recipe('Fish Recipe', 'Delicious fish recipe', 'https://images.pexels.com/photos/36768/food-salmon-teriyaki-cooking.jpg?auto=compress&cs=tinysrgb&h=650&w=940')
  ];

  constructor() { }

  ngOnInit() {
  }

}
