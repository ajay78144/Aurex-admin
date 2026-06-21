import { Component, OnInit } from '@angular/core';
import { BannerService } from '../../../services/banner';

@Component({
  selector: 'app-banner-list',
  standalone: false,
  templateUrl: './banner-list.html',
  styleUrl: './banner-list.css'
})
export class BannerList implements OnInit {

  banners: any[] = [];

  constructor(
    private bannerService: BannerService
  ) {}

  ngOnInit(): void {
    this.getBanners();
  }

  getBanners() {

    this.bannerService
      .getBanners()
      .subscribe({

        next: (res: any) => {
          this.banners = res;
        },

        error: (err) => {
          console.log(err);
        }

      });

  }

  deleteBanner(id: string) {

    if (confirm('Delete Banner?')) {

      this.bannerService
        .deleteBanner(id)
        .subscribe({

          next: () => {

            alert('Banner Deleted Successfully');

            this.getBanners();

          },

          error: (err) => {
            console.log(err);
          }

        });

    }

  }

}