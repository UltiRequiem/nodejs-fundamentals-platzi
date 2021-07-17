const fs = require('fs').promises;

const readFile = async (path) => {
  try {
    const file = await fs.readFile(path, { encoding: 'utf8' });
    console.log(file);
  } catch (error) {
    console.error(error);
  }
};

const writeFile = (path, content) => {
  try {
    await fs.writeFile(path, content);
  } catch (e) {
    console.error(error);
  }
};

const rmFile = (path) => {
  try {
    fs.unlink(path);
  } catch (error) {
    console.error(error);
  }
};

readFile(`${__dirname}/hi.txt`);
