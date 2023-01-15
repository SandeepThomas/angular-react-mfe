import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'nx',
    component: WebComponentWrapper,
    data: {
      type: 'script',
      remoteEntry: '/nx-react/remoteEntry.js',
      remoteName: 'react',
      exposedModule: './web-component',
      elementName: 'react-element',
    } as WebComponentWrapperOptions
  },
  {
    path: 'craco',
    component: WebComponentWrapper,
    data: {
      type: 'script',
      remoteEntry: '/craco-react/remoteEntry.js',
      remoteName: 'craco',
      exposedModule: './craco-component',
      elementName: 'craco-element',
    } as WebComponentWrapperOptions
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
