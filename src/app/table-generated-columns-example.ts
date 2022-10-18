import {Component} from '@angular/core';
import { IconOptions } from '@angular/material/icon';

export interface PeriodicElement {
  id: number;
  name: string;
  Email: string;
  course: string;
  date: string;
  Action: string
  sign: string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'shaquib', Email: 'shaquibedulab.in', course: 'Bca', date:"18/10/2022" , Action:'', sign:''},
];

/**
 * @title Table with columns defined using ngFor instead of statically written in the template.
 */
@Component({
  selector: 'table-generated-columns-example',
  styleUrls: ['table-generated-columns-example.css'],
  templateUrl: 'table-generated-columns-example.html',
})
export class TableGeneratedColumnsExample {
  title = 'table';
  displayedColumns: string[] = ['id', 'name', 'Email', 'course','date','Action','sign'];
  dataSource = ELEMENT_DATA;

}


/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */