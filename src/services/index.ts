import { Application } from '../declarations';
import authors from './authors/authors.service';
import books from './books/books.service';
import borrows from './borrows/borrows.service';
import students from './students/students.service';
import types from './types/types.service';

// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application): void {
  app.configure(students);
  app.configure(books);
  app.configure(borrows);
  app.configure(authors);
  app.configure(types);
}
