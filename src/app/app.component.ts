import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Itodo } from './Models/itodo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgFor,NgIf,NgStyle,NgClass,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ToDo';
  
// ==================== Todo List==================//
todoList:Itodo[]=[];

todo:Itodo ={
  Id:null,
  Title:''
}

addToDo():void{
  if(this.todo.Id){
   this.todoList = this.todoList.map(o=>{
    if(o.Id== this.todo.Id){
      o.Title = this.todo.Title
    }
    return o;
   });
  }
  else{
    this.todo.Id = this.todoList.length+1;

    this.todoList.push({...this.todo});
  }

//  Input fild reset.....//
 this.todo = {
       Title:'',
       Id:null
 }
 console.log(this.todoList);
}
// Edit...............//
EditTodo(list:Itodo){
  this.todo = {...list};
 }
// Delete............//
DeleteTodo(id:number){
  this.todoList = this.todoList.filter(l=>l.Id!=id)
}
// ===================================================//

}
