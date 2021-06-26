const fs = require('fs');

const writeFile = readMeContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', readMeContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'README successfully created!'
            });
    
        });
   
    });

};