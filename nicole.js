const algoliasearch = require("algoliasearch");
const dotenv = require("dotenv");
dotenv.config();
const ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID;
const ALGOLIA_API_KEY = process.env.ALGOLIA_API_KEY;
const ALGOLIA_INDEX_NAME = process.env.ALGOLIA_INDEX_NAME;

// start client
const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);

// initialize index
const index = client.initIndex(ALGOLIA_INDEX_NAME);

//json file for product upload
const record = require('./data/products.json'); 

// Create a new index and add the records
const objs = index.saveObjects(record, {autoGenerateObjectIDIfNotExist: true}).wait();
//settings

index.setSettings(
    {
   separatorsToIndex: "&",
   attributesForFaceting: [
     //we want the left bar to be able to filter by brand
    'searchable(brand)',
    //second facet for filtering
    'searchable(category)'
 ],
  attributesToHighlight: [
    'content',
    'description'
  ],
 searchableAttributes: [
    'brand',
    'category',
  ]
 }).wait();

 index.getSettings().then(settings => {
  console.log(settings);
});