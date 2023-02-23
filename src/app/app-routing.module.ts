import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
// Nhớ thêm router-outleft để nó có thể chèn các component vào
// Khi không nhập đường dẫn nó sẽ ăn HeroComponent
// Khi nhập http://localhost:4200/detail nó sẽ ăn hero-detail
const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'detail', component: HeroDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
