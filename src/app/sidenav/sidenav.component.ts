import { Component, OnDestroy, ChangeDetectorRef, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MediaMatcher } from '@angular/cdk/layout';
import { SidenavService } from '../services/sidenav.service';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';


interface menuInterface {
  name: string;
  route?: string;
  children?: menuInterface[];
}

const menuData: menuInterface[] = [
  {
    name: "About Us",
    children: [
      { name: "Vision, Mission & Value", route: "Vision_Mission_And_Value" },
      { name: "History and Timeline", route: "History_And_Timeline" },
      { name: "Programs", route: "Programs" },
      { name: "Membership", route: "Membership" },
      { name: "Board of Director", route: "Board_of_Director" },
      { name: "Contact Us", route: "Contact_Us" }
    ]
  },
  {
    name: "Program & Services",
    route: "Program_Service",
    children: [
      {
        name: "Service overview",
        route: "Program_Service/Service_Overview",
        children: [
          { name: "Feature programs", route: "Program_Service/Service_Overview/Feature_Programs" },
          { name: "News & Events", route: "Program_Service/Service_Overview/News_And_Events" }
        ]
      }
    ]
  },
  {
    name: "Multimedia",
    route: "Multimedia",
    children: [
      { name: "Video Gallery", route: "Multimedia/Video_Gallery" },
      { name: "Picture Gallery", route: "Multimedia/Picture_Gallery" }
    ]
  }

];

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss'],
    standalone: false
})
export class SidenavComponent implements OnDestroy {
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

  getRouteArray(route: string): string[] {
    return route ? ['/', ...route.split('/')] : ['/'];
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  toggleRightSidenav() {
    this.sidenav.toggle()
  }



}
