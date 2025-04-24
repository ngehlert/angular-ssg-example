import { RenderMode, ServerRoute } from '@angular/ssr';


export const serverRoutes: ServerRoute[] = [
  {
    path: 'page-one',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'page-two/:id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams(): Promise<Array<Record<string, string>>> {
      return [
        { id: '1' },
        { id: '2' },
        { id: '3' }
      ];
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
