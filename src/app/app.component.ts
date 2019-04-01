import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import * as M from 'materialize-css';

import { Task } from './task';
import { DatabaseService } from './database.service';

@Component({
  selector: 'myapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  taskValue: string;
  tasks$: Observable<Array<Task>>;

  constructor(private dbService: DatabaseService) {}

  ngOnInit(): void {
    M.updateTextFields();
    this.tasks$ = this.dbService.getAll();
  }

  saveTask(): void {
    this.dbService.saveTask(this.taskValue);
  }
}
