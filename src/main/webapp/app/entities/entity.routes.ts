import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'authority',
    data: { pageTitle: 'psApp.adminAuthority.home.title' },
    loadChildren: () => import('./admin/authority/authority.routes'),
  },
  {
    path: 'aluno',
    data: { pageTitle: 'psApp.aluno.home.title' },
    loadChildren: () => import('./aluno/aluno.routes'),
  },
  {
    path: 'meta',
    data: { pageTitle: 'psApp.meta.home.title' },
    loadChildren: () => import('./meta/meta.routes'),
  },
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];

export default routes;
