import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { AuthGuard } from './user/auth.guard';
import { SelectiveStrategy } from './selective-strategy.service';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'welcome', component: WelcomeComponent },
            { path: '', redirectTo: 'welcome', pathMatch: 'full' },
            {
                path: 'products',
                canActivate: [AuthGuard],
                canLoad: [AuthGuard],
                data: { preload: true },
                loadChildren: () => import('./products/product.module').then(m => m.ProductModule)
            },
            { path: '**', component: PageNotFoundComponent }
        ], { /*enableTracing: true,preloadingStrategy: PreloadAllModules*/ preloadingStrategy: SelectiveStrategy })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }

// enableTracing property when set to true, it logs all the router events as they happen in the console