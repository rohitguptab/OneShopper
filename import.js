const { SiteClient } = require('datocms-client');
const client = new SiteClient('972ccca901e73897db85e1752f2506');
const config = require('./gatsby-config');

config.siteMetadata.products.reduce((chain, product) => (
  chain
    .then(() => client.uploadImage(product.image))
    .then((image) => client.items.create({
      name: product.name,
      image: image,
      price: product.price,
      itemType: '35190',
    }))
), Promise.resolve());
