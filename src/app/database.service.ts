import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';

import { Task } from './task';

@Injectable()
export class DatabaseService {
  constructor(private db: AngularFirestore) {}

  getAll(): Observable<Array<Task>> {
    return this.db.collection<Task>('tasks').valueChanges();
  }

  saveTask(value: string): Promise<void> {
    const id = this.db.createId();
    const task: Task = {
      id,
      value
    };

    return this.db
      .collection<Task>('tasks')
      .doc(id)
      .set(task, { merge: true });
  }
}
