import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  selectedSpan: string = 'All';


  ngOnInit(): void {
  }
  
  selectSpan(span: string): void {
    this.selectedSpan = span;
  }
}
