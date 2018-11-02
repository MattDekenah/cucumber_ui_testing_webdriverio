import venueSearchResultsPage from '../page-objects/venue-search-results.page';

const { When } = require('cucumber');

When(
    /^I select "([^"]*)"$/,
    function(serviceName) {
    	venueSearchResultsPage.selectService(serviceName);
    }
);