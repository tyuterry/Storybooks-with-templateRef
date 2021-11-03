import { Component, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-templateref-test',
  template: `
    <p>
      templateref-test works!
    </p>
  `,
  styles: [
  ]
})
export class TemplaterefTestComponent implements OnInit {

  constructor(  private template:TemplateRef<any> ) { }

  ngOnInit(): void {
  }

}
