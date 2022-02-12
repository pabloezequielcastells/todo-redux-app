import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.mode';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../todo.actions';
import { deleteTodo } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo?: Todo;
  @ViewChild('inputPhysic') inputPhysic!: ElementRef;
  chkComplete: FormControl;
  txtInput: FormControl;
  editing: boolean = false;

  constructor( private store: Store<AppState>) {
    this.chkComplete = new FormControl( false );
    this.txtInput = new FormControl( '', Validators.required );
  }

  ngOnInit(): void {
    this.chkComplete.setValue( this.todo?.completed  ?? false ); 
    this.chkComplete.valueChanges.subscribe(value => {
      this.store.dispatch( actions.toogle( { id: this.todo!.id } ));
    } );
  }
   
  edit() {
    this.txtInput.setValue( this.todo?.text ?? '' );
    this.editing = true;
    setTimeout(() => {
      this.inputPhysic.nativeElement.select(); 
    }, 1); 
  }

  endEdit() {
    this.editing = false;
    if (this.txtInput.valid && this.txtInput.value !== this.todo!.text) {
      this.store.dispatch( actions.edit({ id: this.todo!.id, text: this.txtInput.value}));
    }
  }

  deleteTodo() {
    this.store.dispatch( actions.deleteTodo({ id: this.todo!.id }));
  }

}
