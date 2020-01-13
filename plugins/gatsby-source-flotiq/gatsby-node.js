const fetch = require("node-fetch");
const crypto = require('crypto');

let headers = {
    "accept": "application/json"
};
let apiUrl;

exports.sourceNodes = async ({actions}, {baseUrl, authToken}) => {
    const { createNode } = actions;
    apiUrl = baseUrl;
    headers['X-AUTH-TOKEN'] = authToken;


    const response = await fetch(apiUrl + "/api/v1/content/product?hydrate=1", {
        headers: headers,
        query: {
            limit: 1000
        }
    });

    if(response.ok) {
        let json = await response.json();
        let nodes = await Promise.all(json.data.map(async datum => {

            return createNode({
                // custom
                slug: datum.slug,
                name: datum.name,
                price: datum.price,
                description: datum.description,
                productImage: datum.productImage,
                productGallery: datum.productGallery,
                flotiqInternal: datum.internal,
                //required
                id: datum.id,
                parent: null,
                children: [],
                internal: {
                    type: `FlotiqProduct`,
                    contentDigest: crypto
                        .createHash(`md5`)
                        .update(JSON.stringify(datum))
                        .digest(`hex`),
                }
            })
        }));
        return await nodes;
    } else {
        throw Error("Cant fetch products. Check if Product Content Type is created.");
    }

    return
};

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions
    const typeDefs = `
    type FlotiqProduct implements Node {
        id: ID!
        slug: String!
        name: String!
        price: Int!
        description: String
        productImage: [FlotiqImage]
        productGallery: [FlotiqImage]
        flotiqInternal: FlotiqProductFlotiqInternal
    }

    type FlotiqImage {
        id: String
        extension: String
    }

    type FlotiqProductFlotiqInternal {
        createdAt: String
        deletedAt: String
        updatedAt: String
        contentType: String
    }    
  `
    createTypes(typeDefs)
}
