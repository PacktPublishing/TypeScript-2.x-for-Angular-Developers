import { Component, ElementRef, OnInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit, AfterContentInit {
  
  tabContents: Array<HTMLElement>;
  tabLinks: Array<HTMLElement>;


  constructor(
    private el: ElementRef
  ) { }

  ngOnInit() {}

  ngAfterContentInit() {
    this.tabContents = this.el.nativeElement.querySelectorAll('.tabcontent');
    this.tabLinks = this.el.nativeElement.querySelectorAll('.tablink');

    this.tabContents[0].style.display = "block";
    this.tabLinks[0].className = " active";
  }

  openTab(evt, cityName) {
    for (let i = 0; i < this.tabContents.length; i++) {
        this.tabContents[i].style.display = "none";
    }
    for (let i = 0; i < this.tabLinks.length; i++) {
        this.tabLinks[i].className = this.tabLinks[i].className.replace(" active", "");
    }
    
    this.el.nativeElement.querySelector(`#${cityName}`).style.display = "block";
    
    evt.currentTarget.className += " active";
  }

}
