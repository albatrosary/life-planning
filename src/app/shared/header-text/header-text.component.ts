import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-text',
  templateUrl: './header-text.component.html',
  styleUrls: ['./header-text.component.css']
})
export class HeaderTextComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  desc: string;

  constructor() { }

  ngOnInit() {
  }

}
