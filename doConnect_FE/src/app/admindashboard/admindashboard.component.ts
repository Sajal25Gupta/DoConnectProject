import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  constructor(private bar: MatSnackBar, private admin: AdminService) {}

  getCount(): Promise<any> {
    return this.admin.getCount();
  }

  ngOnInit(): void {
    this.getCount().then((res) => {
      if (res > 0) {
        this.bar.open(`You Have ${res} New Questions Pending`, 'Close', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      }
    });
  }

}
