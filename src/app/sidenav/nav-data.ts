import { INavbarData } from "./nav-util";


export const navBarData: INavbarData[] = [
    {
        routeLink:'dashboard',
        icon: 'fa fa-home',
        label: 'dashBoard'
    },

    {
      routeLink:'produtos',
      icon: 'fa fa-tags',
      label: 'Produtos',
      items:[
        {
          routeLink: 'produtos/lista',
          label:  'Lista Produtos'
        },
        {
          routeLink: 'produtos/cadastro',
          label:  'Cadastro Produto'
        }
      ]
    },

    {
      routeLink:'estoque',
      icon: 'fa fa-tags',
      label: 'estoque',

    },

];
