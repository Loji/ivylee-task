"use strict";

// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  'ng2-dnd': 'vendor/ng2-dnd',

};

/** User packages configuration. */
const packages: any = {
  'ng2-dnd': { main: 'index.js', defaultExtension: 'js' },

};


////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/forms',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',
  'ng2-dnd',

  // App specific barrels.
  'app',
  'app/shared',
  'app/list-app',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
//  if(barrelName=='ng2-dnd'){
        // cliSystemConfigPackages[barrelName] = { main: 'ng2-dnd' };
    // }else{
        cliSystemConfigPackages[barrelName] = { main: 'index' };
    // }
  });

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js',
    'ng2-dnd': 'vendor/ng2-dnd'
  },
  packages: cliSystemConfigPackages, 
});

// Apply the user's configuration.
System.config({ map, packages });
