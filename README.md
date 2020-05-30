This is my developer template 

It's built with create-react-app, Cosmic JS (a GraphQL CMS), and Chart JS for making charts.

It's a work in progress

## High Level

1. App.js contains the constants use the credentials provided by CosmicJS to access the data in CosmicJS CMS.

```
    const portfolioBucket = Cosmic().bucket({
        slug: 'xxx-portfolio-site',
        read_key: 'xxXXXXXXXXXXXXXxxxx',
        write_key: 'xxXXXXXXXXXXXXXxxxx',',
    })
```

2. We borrowed some of the techniques used in this (CosmicJS Blog Post)[https://www.cosmicjs.com/articles/building-a-developer-portfolio-with-react-cosmic-js-and-semantic-ui-jgzleiom] your slug and content would have to match up with what is presented in your CosmicJS account. 

3. For hosting, you can use whatever you want. I used Github pages through creating a `gh-pages` branch. Could likely follow the steps outlined in Github support for creating the Github page to hold the frontend that connects to CosmicJS. 

