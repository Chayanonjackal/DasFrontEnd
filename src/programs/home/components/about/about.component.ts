import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor(private router: Router) {}

  contactForm = new FormGroup({
    fullname: new FormControl(null),
    email: new FormControl(null),
    phone: new FormControl(null),
    message: new FormControl(null),
  });

  ngOnInit(): void {}

  onSubmit() {
    const playload = this.contactForm.value;
  }

  goToHomePage() {
    this.router.navigate(['home/dashbord']);
  }

  GoToSp() {
    this.router.navigate(['home/studentprediction']);
  }
}
