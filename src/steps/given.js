import venueSearchResultsPage from '../page-objects/venue-search-results.page';

const { Given } = require('cucumber');

Given(
    /^I am on the venue page with services matching my search$/,
    function() {
    	venueSearchResultsPage.open();
    	venueSearchResultsPage.waitForPageToLoad();
    }
);