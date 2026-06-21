import { Component } from '@angular/core';
import { BannerService } from '../../../services/banner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner-add',
  standalone: false,
  templateUrl: './banner-add.html',
  styleUrl: './banner-add.css'
})
export class BannerAdd {

  banner = {
    title: '',
    image: '',
    link: '',
    active: true
  };

  constructor(
    private bannerService: BannerService,
    private router: Router
  ) {}

  addBanner() {

    this.bannerService
      .createBanner(this.banner)
      .subscribe({

        next: () => {

          alert('Banner Added Successfully');

          this.router.navigate(['/banners']);

        },

        error: (err) => {

          console.log(err);

          alert('Failed To Add Banner');

        }

      });

  }

}