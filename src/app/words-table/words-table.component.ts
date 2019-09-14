import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-words-table',
  templateUrl: './words-table.component.html',
  styleUrls: ['./words-table.component.scss']
})
export class WordsTableComponent implements OnInit {

  @Input() words: [{count: number, value: string}];

  constructor() { }

  ngOnInit() {
  }

}
