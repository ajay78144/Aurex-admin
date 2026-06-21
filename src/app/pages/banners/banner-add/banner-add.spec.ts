import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerAdd } from './banner-add';

describe('BannerAdd', () => {
  let component: BannerAdd;
  let fixture: ComponentFixture<BannerAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BannerAdd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerAdd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
