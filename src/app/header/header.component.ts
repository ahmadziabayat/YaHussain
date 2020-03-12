import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { SidenavService } from '../services/sidenav.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('rightsidenav') public sidenav: MatSidenav;

  @Input() inputSideNav: MatSidenav;

  toggleActive:boolean = false;

  constructor(private sidenavService: SidenavService) { }

  ngOnInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
  }

  toggleRightSidenav(){
    this.toggleActive = !this.toggleActive;
    this.inputSideNav.toggle();
  }

}
