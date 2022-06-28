
const { algoliasearch, instantsearch } = window;
import { hitTemplate } from "./helpers";

//setup connection to search client

const searchClient = algoliasearch(
  'YHE4JA5OMG',
  '6b8c7d9904cfb9b2783f17f2e6e7c754'
);

//configure index
const search = instantsearch({
  indexName: 'Products',
  searchClient,
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  }),
  
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item(hit){
        return hitTemplate(hit);
      }
    },
  }),
  instantsearch.widgets.configure({
    hitsPerPage: 8,
  }),
  instantsearch.widgets.panel({
    templates: { header: 'brand' },
  })(instantsearch.widgets.refinementList)({
    container: '#brand',
    attribute: 'brand',
  }),
  
  instantsearch.widgets.pagination({
    container: '#pagination',
  }),
]);

// search.addWidgets([


/////   <p>{{#helpers.highlight}}{ "attribute": "name"}{{/helpers.highlight}}</p>
//   <p>{{#helpers.highlight}}{ "attribute": "description" }{{/helpers.highlight}}</p


//   instantsearch.widgets.searchBox({
//     container: '#searchbox',
//   }),
//   instantsearch.widgets.hits({
//     container: '#hits',
//     templates: {
//       item: `
// <article>

//    <h2><a href="{{{url}}}"><img src="{{{image}}}" /></a></h2>
//   <h1>{{#helpers.highlight}}{ "attribute": "title" }{{/helpers.highlight}}</h1>
//   <p>{{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}</p>
//   <p>{{#helpers.highlight}}{ "attribute": "description" }{{/helpers.highlight}}</p>
// </article>
// `,
//     },
//   }),

//   //panel and refinement list
//   instantsearch.widgets.panel({
//     templates: { header: 'brand' },
//   })(instantsearch.widgets.refinementList)({
//     container: '#refinement-list',
//     attribute: 'brand',
//   }),

//   instantsearch.widgets.configure({
//     hitsPerPage: 8,
//   }),
//   instantsearch.widgets.dynamicWidgets({
//     container: '#dynamic-widgets',
//     fallbackWidget({ container, attribute }) {
//       return instantsearch.widgets.panel({ templates: { header: attribute } })(
//         instantsearch.widgets.refinementList
//       )({
//         container,
//         attribute,
//       });
//     },
//     widgets: [],
//   }),
//   instantsearch.widgets.pagination({
//     container: '#pagination',
//   }),
// ]);

search.start();
