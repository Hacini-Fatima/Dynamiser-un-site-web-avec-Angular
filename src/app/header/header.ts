import { Component } from '@angular/core';
import {RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-header',
  imports:  [ RouterLinkWithHref],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  logo = '/logo-au-petit-village.jpg';
  
}
