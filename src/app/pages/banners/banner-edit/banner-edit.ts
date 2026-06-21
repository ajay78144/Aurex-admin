import { Component, OnInit } from '@angular/core';
import { BannerService } from '../../../services/banner';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-banner-edit',
  standalone: false,
  templateUrl: './banner-edit.html',
  styleUrl: './banner-edit.css'
})
export class BannerEdit implements OnInit {

  bannerId = '';

  banner = {
    title: '',
    image: '',
    link: '',
    active: true
  };

  constructor(
    private bannerService: BannerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.bannerId = this.route.snapshot.params['id'];

    this.getBanner();

  }

  getBanner() {

    this.bannerService
      .getBannerById(this.bannerId)
      .subscribe({

        next: (res: any) => {

          this.banner = res;

        },

        error: (err) => {

          console.log(err);

        }

      });

  }

  updateBanner() {

    this.bannerService
      .updateBanner(
        this.bannerId,
        this.banner
      )
      .subscribe({

        next: () => {

          alert('Banner Updated Successfully');

          this.router.navigate(['/banners']);

        },

        error: (err) => {

          console.log(err);

          alert('Update Failed');

        }

      });

  }

}