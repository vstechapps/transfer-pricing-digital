import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-files',
  templateUrl: './request-files.component.html',
  styleUrls: ['./request-files.component.less']
})
export class RequestFilesComponent implements OnInit {

  @Input()
  request:any;

  constructor() { }

  ngOnInit(): void {
  }

}
