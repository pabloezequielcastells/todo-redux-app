import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.mode';

@Pipe({
  name: 'filterTodo'
})
export class FilterTodoPipe implements PipeTransform {

  transform(value: Todo[],  filter: string ): Todo[] {
    switch ( filter){
      case 'completed':
        return value.filter(t => t.completed );
      case 'pending':
        return value.filter(t => !t.completed );
      default: 
        return value;
    } 
  }

}
