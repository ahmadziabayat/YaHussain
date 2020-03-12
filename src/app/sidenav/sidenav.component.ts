import { Component, OnInit, OnDestroy, ChangeDetectorRef, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MediaMatcher } from '@angular/cdk/layout';
import { SidenavService } from '../services/sidenav.service';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';


interface menuInterface {
  name: string;
  children?: menuInterface[];
}

const menuData: menuInterface[] = [
  {
    name: "About Us",
    children: [
      { name: "Vision, Mission & Value" },
      { name: "History and Timeline" },
      { name: "Programs" },
      { name: "Membership" },
      { name: "Board of Director" },
      { name: "Contact Us" }
    ]
  },
  {
    name: "Program & Services",
    children: [
      {
        name: "Service overview",
        children: [
          { name: "Feature programs" },
          { name: "News & Events" }
        ]
      }
    ]
  },
  {
    name: "Multimedia",
    children: [
      {name: "Video Gallery"},
      {name: "Picture Gallery"}
  ]
  }

];

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;
  fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);
  private _mobileQueryListener: () => void;

  @ViewChild('rightsidenav') public sidenav: MatSidenav;

  menuControl = new NestedTreeControl<menuInterface>(node => node.children);
  menuListData = new MatTreeNestedDataSource<menuInterface>();

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private sidenavService: SidenavService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.menuListData.data = menuData;
  }

  hasChild = (_: number, node: menuInterface) => !!node.children && node.children.length > 0;

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  toggleRightSidenav() {
    this.sidenav.toggle()
  }



}
