import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { faCoffee, faFemale } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public checkboxGroupForm: FormGroup;
  public faCoffee = faCoffee;
  public faFemale = faFemale;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.checkboxGroupForm = this.formBuilder.group({
      left: true,
      middle: false,
      right: false
    });
  }

  clickButton(event: Event, index: Number): void {
    console.log(event);
    this.checkboxGroupForm = this.formBuilder.group({
      left: index === 0,
      middle: index === 1,
      right: index === 2
    });
  }
}
