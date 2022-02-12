import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as filterActions from '../../filter/filter.actions' 
import * as todoActions from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  pendients: number = 0;
  actualFilter: string = "all";
  filters: string[] = ['pending', 'completed', 'all'];

  constructor( private store: Store<AppState> ) { }

  ngOnInit(): void {
  
    // this.store.select('filter').subscribe(filter => {
    //   this.actualFilter = filter;
    // } );

    this.store.subscribe(state => {
      this.actualFilter = state.filter;
      this.pendients = state.todos.filter(t => !t.completed).length;
    });
  }

  clearCompleted() {
  this.store.dispatch( todoActions.clearCompleted());
  }

  changeFilter(filter: string) {
    this.store.dispatch( filterActions.setFilter({  filters: filter }));
  }

}
