const Promise = require(`bluebird`);
const path = require(`path`);
const slash = require(`slash`);


const pageQuery = `
{
  allWordpressPage {
    edges {
      node {
        id
        slug
        status
        template
      }
    }
  }
}
`

const postsQuery = `
{
  allWordpressPost {
    edges {
      node {
        id
        slug
        status
        template
        format
      }
    }
  }
}
`
const cvQuery = `
{
  allWordpressWpCv {
    edges {
      node {
        id
        slug
        status
        template
      }
    }
  }
}
`


exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators;


    return new Promise((resolve, reject) => {

      // Pages
      graphql(pageQuery)
      .then(result => {
          if (result.errors) {
              console.log(result.errors);
              reject(result.errors);
          }

          const pageTemplate = path.resolve("./src/templates/page.js");

          result.data.allWordpressPage.edges.forEach((edge) => {
              createPage({
                  path: `/${edge.node.slug}/`,
                  component: slash(pageTemplate),
                  context: {
                      id: edge.node.id,
                  },
              });
          });
      })

      .then(() => {

                graphql(postsQuery)
                    .then(result => {
                        if (result.errors) {
                            console.log(result.errors);
                            reject(result.errors);
                        }
                        const postTemplate = path.resolve("./src/templates/post.js");

                      result.data.allWordpressPost.edges.forEach((edge) => {
                            createPage({
                                path: `/post/${edge.node.slug}/`,
                                component: slash(postTemplate),
                                context: {
                                    id: edge.node.id,
                                },
                            });
                        });
                        resolve();
                    });
         
    })

    .then(() => {

      graphql(cvQuery)
          .then(result => {
              if (result.errors) {
                  console.log(result.errors);
                  reject(result.errors);
              }
              const postTemplate = path.resolve("./src/templates/cv.js");

            result.data.allWordpressWpCv.edges.forEach((edge) => {
                  createPage({
                      path: `/cv/${edge.node.slug}/`,
                      component: slash(postTemplate),
                      context: {
                          id: edge.node.id,
                      },
                  });
              });
              resolve();
          });

})


  })}