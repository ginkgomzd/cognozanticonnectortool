# README #

This is a repo for the Cognosante Connector ember search tool.  This tool can run independently or as a widget in the cognosante drupal theme.  The source for the drupal theme is at https://bitbucket.org/younginvincibles/connector-tool-theme/overview.

## Setting Up ##

1. cd connector
2. `npm install`
3. `bower install`

## Serving locally ##
The following will serve the website locally at localhost:4200
`ember serve`

## Building Production ##
The following will build the stand-alone tool (aka production) at ../public_html
`ember build`

## Building widget
The following will build the widget version of the tool at ../public_html.  See drupal theme source for instructions on how to install to drupal theme.
`ember build --environment=widget`