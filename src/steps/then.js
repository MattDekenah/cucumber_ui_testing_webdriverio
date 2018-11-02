import venueSearchResultsPage from '../page-objects/venue-search-results.page';

const { Then } = require('cucumber');

Then(
    /^I expect "([^"]*)" to get selected in the "([^"]*)" section$/,
    function(serviceName, sectionName) {
    	expect(venueSearchResultsPage.serviceSelectedPath(sectionName, serviceName)).to.exist;
    }
);