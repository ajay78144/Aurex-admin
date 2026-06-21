import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {

  stats:any = {};

  constructor(
    private dashboardService: DashboardService
  ){}

  ngOnInit(): void {
    this.loadStats();
  }

  loadStats(){

    this.dashboardService
    .getStats()
    .subscribe({

      next:(res:any)=>{
        this.stats = res;
      },

      error:(err:any)=>{
        console.log(err);
      }

    });

  }

}