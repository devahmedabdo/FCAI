import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ConfirmationDialogService } from 'src/app/modules/shared/components/confirmation-dialog/confirmation-dialog.service';
import { Router } from '@angular/router';


@Component({
  selector: 'main-side-nav',
  templateUrl: './main-side-nav.component.html',
  styleUrls: ['./main-side-nav.component.scss'],
})
export class MainSideNavComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private dialogService: ConfirmationDialogService,
    private router: Router
  ) {}

  logout() {
    this.dialogService.openDialog({
      title: 'Logout',
      message: 'Are you sure you want to logout?',
      cancelButtonText: 'No',
      confirmButtonText: 'Yes'
    }, () => {
      this.router.navigate(['/']);
    });
  }
}
