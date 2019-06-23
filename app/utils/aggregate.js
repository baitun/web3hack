import * as arw from './arweave';
import * as fls from './fluence';

async function queryAggregate(url) {
  return Promise.all([
    arw.queryReviews(url),
    fls.queryReviews(url)
  ]).then((result) => {
    const posts = [].concat(result[0]).concat(result[1]);

    // Sort by date desc
    posts.sort((p1, p2) => p2.timestamp - p1.timestamp);

    
    const count = posts.length;

    return {
      count,
      posts,
    };
  });
}

async function x() {
  return null;
}

export {
  queryAggregate,
  x,
};