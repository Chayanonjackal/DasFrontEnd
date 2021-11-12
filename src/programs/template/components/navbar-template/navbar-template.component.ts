import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-template',
  templateUrl: './navbar-template.component.html',
  styleUrls: ['./navbar-template.component.css']
})
export class NavbarTemplateComponent implements OnInit {

  items: any[] = [];

  constructor(private http: HttpClientModule) { }

  ngOnInit(): void {
    this.items = [
      {
          label: 'File',
          items: [{
                  label: 'New',
                  icon: 'pi pi-fw pi-plus',
                  items: [
                      {label: 'Project'},
                      {label: 'Other'},
                  ]
              },
              {label: 'Open'},
              {label: 'Quit'}
          ]
      },
      {
          label: 'Edit',
          icon: 'pi pi-fw pi-pencil',
          items: [
              {label: 'Delete', icon: 'pi pi-fw pi-trash'},
              {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
          ]
      }
  ];

  }

}
