const nPath = require('path');
const fs = require('fs-extra-promise');

/* Path Constants */
const SOURCE_DIR = './src';
const TEST_DIR = './test';
const DOCS_FILE = './docs.md';

/* Data Storage */
const sections = [];

// A map of file paths to contents
// e.g. { 'src/ex.js' : 'console.log("test")' }
const files = new Map();


/* Building Data Types  */
const makeSection = ( name ) => ({
    name,
    path: `${SOURCE_DIR}/${name}`,
    topics: [],
});

const makeTopic = ( sectionName ) => ( name ) => ({
    name,
    path: `${SOURCE_DIR}/${sectionName}/${name}`,
    files: [],
    tests: [],
});

