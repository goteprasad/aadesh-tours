import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { SliderComponent } from './slider/slider.component';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { SharedModule } from '../shared/shared.module';
import { PkgLayoutOneComponent } from './pkg-layout-one/pkg-layout-one.component';
import { PkgLayoutTwoComponent } from './pkg-layout-two/pkg-layout-two.component';
import { PkgLayoutThreeComponent } from './pkg-layout-three/pkg-layout-three.component';
import { ShortParaComponent } from './short-para/short-para.component';
import { PackageLayoutFourComponent } from './package-layout-four/package-layout-four.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { OurPartnersComponent } from './our-partners/our-partners.component';
import { AllPackagesComponent } from './all-packages/all-packages.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, LayoutComponent, SliderComponent, SearchFilterComponent, PkgLayoutOneComponent, PkgLayoutTwoComponent, PkgLayoutThreeComponent, ShortParaComponent, PackageLayoutFourComponent, TestimonialsComponent, OurPartnersComponent, AllPackagesComponent, AboutUsComponent, GalleryComponent, LoginComponent, SignupComponent, ContactUsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
