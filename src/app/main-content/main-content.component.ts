import { Component, OnInit } from '@angular/core';

interface IStudent {
  id: number;
  firstName: string;
  lastName: string;
  course: string;
}

@Component({
  selector: 'main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

    studentArray: Array<IStudent> = [];
    constructor() {}

  ngOnInit() {
    this.studentArray = [
      {
        id: 1,
        firstName: 'Nick',
        lastName: 'Rueter',
        course: 'Programming'
      },
      {
        id: 2,
        firstName: 'Mike',
        lastName: 'Tyson',
        course: 'Boxing'
      },
      {
        id: 3,
        firstName: 'Mohammid',
        lastName: 'Ali',
        course: 'Super Boxing'
      }
    ]
  }
  addStudent() {
    this.studentArray.unshift({
      id: 1,
      firstName: 'Nick',
      lastName: 'Rueter',
      course: 'Programming'
    });
  }
  removeStudent(index: number) {
    console.log('index', index);
    this.studentArray.splice(index, 1);
  }
}