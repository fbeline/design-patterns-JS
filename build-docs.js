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


    } )
    .catch( error => { throw error; } )

