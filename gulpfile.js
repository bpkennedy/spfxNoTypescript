'use strict';

const gulp = require('gulp');
const build = require('@microsoft/sp-build-web');

build.configureWebpack.mergeConfig({
  additionalConfiguration: (generatedConfiguration) => {
    generatedConfiguration.module.rules.push(
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    );

    return generatedConfiguration;
  }
});

build.initialize(gulp);