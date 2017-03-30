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

/* Utility functions  */
const getFileContents = ( path ) => fs.existsAsync( path )
    .then( exists => exists ? fs.readFileAsync( path, 'utf-8' ) : '' );

const stripPunctuation = ( str ) =>
  str.replace( /["'.,\/#!$%\^&\*;:’{}=_`~()]/g, '' );

const dashCase = ( str ) => stripPunctuation( str ).toLowerCase().split( ' ' ).filter(
  ( word ) => word !== ''
).join( '-' );

const reverseDashCase= (str) => str.split('-').map(
    word => word.replace(
        /(?:^\w|[a-z]|\b\w)/g,
        ( letter, index ) =>
          index == 0 ?
            letter.toUpperCase() :
            letter.toLowerCase()
    )
).join(' ');

/* Writing Markdown */
const writeDocument = () =>
`${writeHeader(sections)}
${sections.map( writeSection ).join('')}
`;

const writeHeader = ( sections ) =>
`# Design Patterns JS

${sections.map( writeSectionContents ).join('')}
`;

const writeSectionContents = ({ name, topics }) =>
`**[${reverseDashCase(name)}](#${dashCase(name)})**
${topics.map( writeTopicContents ).join('')}
`;

const writeTopicContents = ({ name }) => `* [${reverseDashCase(name)}](#${dashCase(name)})
`;

const writeSection = ({ name, path, topics }) =>
`## ${name}
${topics.map( writeTopic ).join('')}
`;

const writeTopic = ({ name, path, files, tests }) =>
`### ${reverseDashCase(name)}
${files.map( writeFile ).join('')}
`;

const writeFile = ( path ) =>
`##### ${nPath.basename(path)}
\`\`\`Javascript
${files.get(path)}
\`\`\`
`;

/* File System Actions */
fs.readdirAsync( SOURCE_DIR )
    .then( sectionNames => {

        // Make sections from section names and store.
        sections.push( ...sectionNames.map( makeSection ) );

        // Get topics of each section.
        return Promise.all( sections.map(
            ({ path }) => fs.readdirAsync( path )
        ) );

    } )
    .then( topicsBySection => {

        // Set topics of each section.
        topicsBySection.forEach(
            ( topics, i ) => sections[i].topics = topics.map( makeTopic( sections[i].name ) )
        );

        // Get the files inside of each topic
        return Promise.all( sections.map(
            section => Promise.all( section.topics.map(
                ({ path }) => fs.readdirAsync( path )
            ) )
        ) );

    } )
    .then( filesByTopicBySection => {

        filesByTopicBySection.forEach(
            ( filesByTopic, sectionIndex ) => filesByTopic.forEach(
                ( topicFiles, topicIndex ) => {
                    const { path, topics } = sections[sectionIndex];
                    const topic = topics[topicIndex];

                    // Store files in each topic
                    topic.files = topicFiles.map(
                        name => `${path}/${topic.name}/${name}`
                    );

                    // Store test files for each file
                    topic.tests = topicFiles.map(
                        path => `${TEST_DIR}/${nPath.basename(path,'.js')}-test.js`
                    );

                    // Give each file a default value in the file map.
                    [ ...topic.files, ...topic.tests  ].forEach(
                        filePath => files.set( filePath, '' )
                    );

                }
            )
        );

        // Create array of paths.
        const filePaths = [ ...files.keys() ];

        // Get contents of each file.
        return Promise.all( filePaths.map( getFileContents ) );

    } )
    .then( fileContents => {

        // Create array of paths.
        const filePaths = [ ...files.keys() ];

        fileContents.forEach(
            ( contents, i ) => files.set( filePaths[i], contents )
        );

        return fs.outputFileAsync( DOCS_FILE, writeDocument() )

    } )
    .catch( error => { throw error; } )

