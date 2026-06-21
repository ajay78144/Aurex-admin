import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerEdit } from './banner-edit';

describe('BannerEdit', () => {
  let component: BannerEdit;
  let fixture: ComponentFixture<BannerEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BannerEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
