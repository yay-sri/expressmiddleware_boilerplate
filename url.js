//using URL module
const url = require("url")

const myUrl= process.argv[2];

// look in the third argument
if (myUrl) {
    // destructuring from URL
      const { href, host, pathname, protocol } = new URL(myUrl);
    
    // log properties
    console.log(`Href is: ${href}`);
    console.log(`Protocol is: ${protocol}`);
    console.log(`Host is: ${host}`);
    console.log(`Pathname is: ${pathname}`);
}