# kunta-api-client

KuntaApiClient - JavaScript client for kunta-api-client
Solution to combine municipality services under single API.
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 0.0.1
- Package version: 0.0.31
- Build date: 2016-11-29T14:30:38.244+02:00
- Build package: class io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install kunta-api-client --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var KuntaApiClient = require('kunta-api-client');

var api = new KuntaApiClient.AnnouncementsApi()

var organizationId = "organizationId_example"; // {String} Organization id

var announcementId = "announcementId_example"; // {String} Announcement id

api.findOrganizationAnnouncement(organizationId, announcementId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *https://demo.kuntaapi.fi/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*KuntaApiClient.AnnouncementsApi* | [**findOrganizationAnnouncement**](docs/AnnouncementsApi.md#findOrganizationAnnouncement) | **GET** /organizations/{organizationId}/announcements/{announcementId} | Finds an organizations announcement
*KuntaApiClient.AnnouncementsApi* | [**listOrganizationAnnouncements**](docs/AnnouncementsApi.md#listOrganizationAnnouncements) | **GET** /organizations/{organizationId}/announcements | Lists organizations announcements
*KuntaApiClient.BannersApi* | [**findOrganizationBanner**](docs/BannersApi.md#findOrganizationBanner) | **GET** /organizations/{organizationId}/banners/{bannerId} | Finds organizations banner
*KuntaApiClient.BannersApi* | [**listOrganizationBannerImages**](docs/BannersApi.md#listOrganizationBannerImages) | **GET** /organizations/{organizationId}/banners/{bannerId}/images | Returns a list of organization banner images
*KuntaApiClient.BannersApi* | [**listOrganizationBanners**](docs/BannersApi.md#listOrganizationBanners) | **GET** /organizations/{organizationId}/banners | Lists organizations banners
*KuntaApiClient.ElectronicChannelsApi* | [**createServiceElectronicChannel**](docs/ElectronicChannelsApi.md#createServiceElectronicChannel) | **POST** /services/{serviceId}/electronicChannels | creates ElectronicChannel
*KuntaApiClient.ElectronicChannelsApi* | [**findServiceElectronicChannel**](docs/ElectronicChannelsApi.md#findServiceElectronicChannel) | **GET** /services/{serviceId}/electronicChannels/{electronicChannelId} | finds ElectronicChannel by electronicChannelId
*KuntaApiClient.ElectronicChannelsApi* | [**listServiceElectronicChannels**](docs/ElectronicChannelsApi.md#listServiceElectronicChannels) | **GET** /services/{serviceId}/electronicChannels | Lists ElectronicChannels by serviceId
*KuntaApiClient.ElectronicChannelsApi* | [**updateServiceElectronicChannel**](docs/ElectronicChannelsApi.md#updateServiceElectronicChannel) | **PUT** /services/{serviceId}/electronicChannels/{electronicChannelId} | Updates ElectronicChannel
*KuntaApiClient.EventsApi* | [**findOrganizationEvent**](docs/EventsApi.md#findOrganizationEvent) | **GET** /organizations/{organizationId}/events/{eventId} | Returns organizations event by id
*KuntaApiClient.EventsApi* | [**findOrganizationEventImage**](docs/EventsApi.md#findOrganizationEventImage) | **GET** /organizations/{organizationId}/events/{eventId}/images/{imageId} | Returns an event image
*KuntaApiClient.EventsApi* | [**getOrganizationEventImageData**](docs/EventsApi.md#getOrganizationEventImageData) | **GET** /organizations/{organizationId}/events/{eventId}/images/{imageId}/data | Returns an event image data
*KuntaApiClient.EventsApi* | [**listOrganizationEventImages**](docs/EventsApi.md#listOrganizationEventImages) | **GET** /organizations/{organizationId}/events/{eventId}/images | Returns list of event images
*KuntaApiClient.EventsApi* | [**listOrganizationEvents**](docs/EventsApi.md#listOrganizationEvents) | **GET** /organizations/{organizationId}/events | Lists organizations events
*KuntaApiClient.FilesApi* | [**findOrganizationFile**](docs/FilesApi.md#findOrganizationFile) | **GET** /organizations/{organizationId}/files/{fileId} | Finds organizations file
*KuntaApiClient.FilesApi* | [**getOrganizationFileData**](docs/FilesApi.md#getOrganizationFileData) | **GET** /organizations/{organizationId}/files/{fileId}/data | Returns an organization file data
*KuntaApiClient.FilesApi* | [**listOrganizationFiles**](docs/FilesApi.md#listOrganizationFiles) | **GET** /organizations/{organizationId}/files | Lists organizations files
*KuntaApiClient.JobsApi* | [**findOrganizationJob**](docs/JobsApi.md#findOrganizationJob) | **GET** /organizations/{organizationId}/jobs/{jobId} | Finds organizations job
*KuntaApiClient.JobsApi* | [**listOrganizationJobs**](docs/JobsApi.md#listOrganizationJobs) | **GET** /organizations/{organizationId}/jobs | Lists organizations jobs
*KuntaApiClient.MenusApi* | [**findOrganizationMenu**](docs/MenusApi.md#findOrganizationMenu) | **GET** /organizations/{organizationId}/menus/{menuId} | Finds organizations menu
*KuntaApiClient.MenusApi* | [**findOrganizationMenuItem**](docs/MenusApi.md#findOrganizationMenuItem) | **GET** /organizations/{organizationId}/menus/{menuId}/items/{menuItemId} | Finds organization menu item
*KuntaApiClient.MenusApi* | [**listOrganizationMenuItems**](docs/MenusApi.md#listOrganizationMenuItems) | **GET** /organizations/{organizationId}/menus/{menuId}/items | Lists organizations menu items
*KuntaApiClient.MenusApi* | [**listOrganizationMenus**](docs/MenusApi.md#listOrganizationMenus) | **GET** /organizations/{organizationId}/menus | Lists organizations menus
*KuntaApiClient.NewsApi* | [**findOrganizationBannerImage**](docs/NewsApi.md#findOrganizationBannerImage) | **GET** /organizations/{organizationId}/banners/{bannerId}/images/{imageId} | Returns a single organiztion banner image
*KuntaApiClient.NewsApi* | [**findOrganizationNewsArticle**](docs/NewsApi.md#findOrganizationNewsArticle) | **GET** /organizations/{organizationId}/news/{newsArticleId} | Finds organizations news article
*KuntaApiClient.NewsApi* | [**findOrganizationNewsArticleImage**](docs/NewsApi.md#findOrganizationNewsArticleImage) | **GET** /organizations/{organizationId}/news/{newsArticleId}/images/{imageId} | Returns an news article image
*KuntaApiClient.NewsApi* | [**getOrganizationBannerImageData**](docs/NewsApi.md#getOrganizationBannerImageData) | **GET** /organizations/{organizationId}/banners/{bannerId}/images/{imageId}/data | Returns an organization banner image data
*KuntaApiClient.NewsApi* | [**getOrganizationNewsArticleImageData**](docs/NewsApi.md#getOrganizationNewsArticleImageData) | **GET** /organizations/{organizationId}/news/{newsArticleId}/images/{imageId}/data | Returns a news article image data
*KuntaApiClient.NewsApi* | [**listOrganizationNews**](docs/NewsApi.md#listOrganizationNews) | **GET** /organizations/{organizationId}/news | Lists organizations news
*KuntaApiClient.NewsApi* | [**listOrganizationNewsArticleImages**](docs/NewsApi.md#listOrganizationNewsArticleImages) | **GET** /organizations/{organizationId}/news/{newsArticleId}/images | Returns list of news article images
*KuntaApiClient.OrganizationServicesApi* | [**createOrganizationService**](docs/OrganizationServicesApi.md#createOrganizationService) | **POST** /organizations/{organizationId}/organizationServices | Create organization service
*KuntaApiClient.OrganizationServicesApi* | [**findOrganizationService**](docs/OrganizationServicesApi.md#findOrganizationService) | **GET** /organizations/{organizationId}/organizationServices/{organizationServiceId} | Finds a organization service by id
*KuntaApiClient.OrganizationServicesApi* | [**listOrganizationOrganizationServices**](docs/OrganizationServicesApi.md#listOrganizationOrganizationServices) | **GET** /organizations/{organizationId}/organizationServices | Organization organization service list
*KuntaApiClient.OrganizationServicesApi* | [**updateOrganizationService**](docs/OrganizationServicesApi.md#updateOrganizationService) | **PUT** /organizations/{organizationId}/organizationServices/{organizationServiceId} | Updates an organization service
*KuntaApiClient.OrganizationsApi* | [**createOrganizationService**](docs/OrganizationsApi.md#createOrganizationService) | **POST** /organizations/{organizationId}/organizationServices | Create organization service
*KuntaApiClient.OrganizationsApi* | [**findOrganization**](docs/OrganizationsApi.md#findOrganization) | **GET** /organizations/{organizationId} | Find organization
*KuntaApiClient.OrganizationsApi* | [**findOrganizationService**](docs/OrganizationsApi.md#findOrganizationService) | **GET** /organizations/{organizationId}/organizationServices/{organizationServiceId} | Finds a organization service by id
*KuntaApiClient.OrganizationsApi* | [**listOrganizationOrganizationServices**](docs/OrganizationsApi.md#listOrganizationOrganizationServices) | **GET** /organizations/{organizationId}/organizationServices | Organization organization service list
*KuntaApiClient.OrganizationsApi* | [**listOrganizations**](docs/OrganizationsApi.md#listOrganizations) | **GET** /organizations | List organizations
*KuntaApiClient.OrganizationsApi* | [**updateOrganizationService**](docs/OrganizationsApi.md#updateOrganizationService) | **PUT** /organizations/{organizationId}/organizationServices/{organizationServiceId} | Updates an organization service
*KuntaApiClient.PagesApi* | [**findOrganizationPage**](docs/PagesApi.md#findOrganizationPage) | **GET** /organizations/{organizationId}/pages/{pageId} | Finds organizations page
*KuntaApiClient.PagesApi* | [**findOrganizationPageContent**](docs/PagesApi.md#findOrganizationPageContent) | **GET** /organizations/{organizationId}/pages/{pageId}/content | Returns organizations page content in all available languages
*KuntaApiClient.PagesApi* | [**findOrganizationPageImage**](docs/PagesApi.md#findOrganizationPageImage) | **GET** /organizations/{organizationId}/pages/{pageId}/images/{imageId} | Returns a single organiztion page image
*KuntaApiClient.PagesApi* | [**getOrganizationPageImageData**](docs/PagesApi.md#getOrganizationPageImageData) | **GET** /organizations/{organizationId}/pages/{pageId}/images/{imageId}/data | Returns an organization page image data
*KuntaApiClient.PagesApi* | [**listOrganizationPageImages**](docs/PagesApi.md#listOrganizationPageImages) | **GET** /organizations/{organizationId}/pages/{pageId}/images | Returns a list of organization page images
*KuntaApiClient.PagesApi* | [**listOrganizationPages**](docs/PagesApi.md#listOrganizationPages) | **GET** /organizations/{organizationId}/pages | Lists organizations pages
*KuntaApiClient.PhoneChannelsApi* | [**createServicePhoneChannel**](docs/PhoneChannelsApi.md#createServicePhoneChannel) | **POST** /services/{serviceId}/phoneChannels | creates PhoneChannel
*KuntaApiClient.PhoneChannelsApi* | [**findServicePhoneChannel**](docs/PhoneChannelsApi.md#findServicePhoneChannel) | **GET** /services/{serviceId}/phoneChannels/{phoneChannelId} | finds PhoneChannel by phoneChannelId
*KuntaApiClient.PhoneChannelsApi* | [**listServicePhoneChannels**](docs/PhoneChannelsApi.md#listServicePhoneChannels) | **GET** /services/{serviceId}/phoneChannels | Lists PhoneChannels by serviceId
*KuntaApiClient.PhoneChannelsApi* | [**updatePhoneChannel**](docs/PhoneChannelsApi.md#updatePhoneChannel) | **PUT** /services/{serviceId}/phoneChannels/{phoneChannelId} | Updates PhoneChannel
*KuntaApiClient.PrintableFormChannelsApi* | [**createServicePrintableFormChannel**](docs/PrintableFormChannelsApi.md#createServicePrintableFormChannel) | **POST** /services/{serviceId}/printableFormChannels | creates PrintableFormChannel
*KuntaApiClient.PrintableFormChannelsApi* | [**findServicePrintableFormChannel**](docs/PrintableFormChannelsApi.md#findServicePrintableFormChannel) | **GET** /services/{serviceId}/printableFormChannels/{printableFormChannelId} | finds PrintableFormChannel by printableFormChannelId
*KuntaApiClient.PrintableFormChannelsApi* | [**listServicePrintableFormChannels**](docs/PrintableFormChannelsApi.md#listServicePrintableFormChannels) | **GET** /services/{serviceId}/printableFormChannels | Lists PrintableFormChannels by serviceId
*KuntaApiClient.PrintableFormChannelsApi* | [**updatePrintableFormChannel**](docs/PrintableFormChannelsApi.md#updatePrintableFormChannel) | **PUT** /services/{serviceId}/printableFormChannels/{printableFormChannelId} | Updates PrintableFormChannel
*KuntaApiClient.ServiceLocationChannelsApi* | [**createServiceServiceLocationChannel**](docs/ServiceLocationChannelsApi.md#createServiceServiceLocationChannel) | **POST** /services/{serviceId}/serviceLocationChannels | creates ServiceLocationChannel
*KuntaApiClient.ServiceLocationChannelsApi* | [**findServiceServiceLocationChannel**](docs/ServiceLocationChannelsApi.md#findServiceServiceLocationChannel) | **GET** /services/{serviceId}/serviceLocationChannels/{serviceLocationChannelId} | finds ServiceLocationChannel by serviceLocationChannelId
*KuntaApiClient.ServiceLocationChannelsApi* | [**listServiceServiceLocationChannels**](docs/ServiceLocationChannelsApi.md#listServiceServiceLocationChannels) | **GET** /services/{serviceId}/serviceLocationChannels | Lists ServiceLocationChannels by serviceId
*KuntaApiClient.ServiceLocationChannelsApi* | [**updateServiceLocationChannel**](docs/ServiceLocationChannelsApi.md#updateServiceLocationChannel) | **PUT** /services/{serviceId}/serviceLocationChannels/{serviceLocationChannelId} | Updates ServiceLocationChannel
*KuntaApiClient.ServicesApi* | [**createService**](docs/ServicesApi.md#createService) | **POST** /services | Create service
*KuntaApiClient.ServicesApi* | [**createServiceElectronicChannel**](docs/ServicesApi.md#createServiceElectronicChannel) | **POST** /services/{serviceId}/electronicChannels | creates ElectronicChannel
*KuntaApiClient.ServicesApi* | [**createServicePhoneChannel**](docs/ServicesApi.md#createServicePhoneChannel) | **POST** /services/{serviceId}/phoneChannels | creates PhoneChannel
*KuntaApiClient.ServicesApi* | [**createServicePrintableFormChannel**](docs/ServicesApi.md#createServicePrintableFormChannel) | **POST** /services/{serviceId}/printableFormChannels | creates PrintableFormChannel
*KuntaApiClient.ServicesApi* | [**createServiceServiceLocationChannel**](docs/ServicesApi.md#createServiceServiceLocationChannel) | **POST** /services/{serviceId}/serviceLocationChannels | creates ServiceLocationChannel
*KuntaApiClient.ServicesApi* | [**createServiceWebPageChannel**](docs/ServicesApi.md#createServiceWebPageChannel) | **POST** /services/{serviceId}/webPageChannels | creates WebPageChannel
*KuntaApiClient.ServicesApi* | [**findService**](docs/ServicesApi.md#findService) | **GET** /services/{serviceId} | Finds a service by id
*KuntaApiClient.ServicesApi* | [**findServiceElectronicChannel**](docs/ServicesApi.md#findServiceElectronicChannel) | **GET** /services/{serviceId}/electronicChannels/{electronicChannelId} | finds ElectronicChannel by electronicChannelId
*KuntaApiClient.ServicesApi* | [**findServicePhoneChannel**](docs/ServicesApi.md#findServicePhoneChannel) | **GET** /services/{serviceId}/phoneChannels/{phoneChannelId} | finds PhoneChannel by phoneChannelId
*KuntaApiClient.ServicesApi* | [**findServicePrintableFormChannel**](docs/ServicesApi.md#findServicePrintableFormChannel) | **GET** /services/{serviceId}/printableFormChannels/{printableFormChannelId} | finds PrintableFormChannel by printableFormChannelId
*KuntaApiClient.ServicesApi* | [**findServiceServiceLocationChannel**](docs/ServicesApi.md#findServiceServiceLocationChannel) | **GET** /services/{serviceId}/serviceLocationChannels/{serviceLocationChannelId} | finds ServiceLocationChannel by serviceLocationChannelId
*KuntaApiClient.ServicesApi* | [**findServiceWebPageChannel**](docs/ServicesApi.md#findServiceWebPageChannel) | **GET** /services/{serviceId}/webPageChannels/{webPageChannelId} | finds WebPageChannel by webPageChannelId
*KuntaApiClient.ServicesApi* | [**listServiceElectronicChannels**](docs/ServicesApi.md#listServiceElectronicChannels) | **GET** /services/{serviceId}/electronicChannels | Lists ElectronicChannels by serviceId
*KuntaApiClient.ServicesApi* | [**listServicePhoneChannels**](docs/ServicesApi.md#listServicePhoneChannels) | **GET** /services/{serviceId}/phoneChannels | Lists PhoneChannels by serviceId
*KuntaApiClient.ServicesApi* | [**listServicePrintableFormChannels**](docs/ServicesApi.md#listServicePrintableFormChannels) | **GET** /services/{serviceId}/printableFormChannels | Lists PrintableFormChannels by serviceId
*KuntaApiClient.ServicesApi* | [**listServiceServiceLocationChannels**](docs/ServicesApi.md#listServiceServiceLocationChannels) | **GET** /services/{serviceId}/serviceLocationChannels | Lists ServiceLocationChannels by serviceId
*KuntaApiClient.ServicesApi* | [**listServiceWebPageChannels**](docs/ServicesApi.md#listServiceWebPageChannels) | **GET** /services/{serviceId}/webPageChannels | Lists WebPageChannels by serviceId
*KuntaApiClient.ServicesApi* | [**listServices**](docs/ServicesApi.md#listServices) | **GET** /services | Service list
*KuntaApiClient.ServicesApi* | [**updatePhoneChannel**](docs/ServicesApi.md#updatePhoneChannel) | **PUT** /services/{serviceId}/phoneChannels/{phoneChannelId} | Updates PhoneChannel
*KuntaApiClient.ServicesApi* | [**updatePrintableFormChannel**](docs/ServicesApi.md#updatePrintableFormChannel) | **PUT** /services/{serviceId}/printableFormChannels/{printableFormChannelId} | Updates PrintableFormChannel
*KuntaApiClient.ServicesApi* | [**updateService**](docs/ServicesApi.md#updateService) | **PUT** /services/{serviceId} | Updates service
*KuntaApiClient.ServicesApi* | [**updateServiceElectronicChannel**](docs/ServicesApi.md#updateServiceElectronicChannel) | **PUT** /services/{serviceId}/electronicChannels/{electronicChannelId} | Updates ElectronicChannel
*KuntaApiClient.ServicesApi* | [**updateServiceLocationChannel**](docs/ServicesApi.md#updateServiceLocationChannel) | **PUT** /services/{serviceId}/serviceLocationChannels/{serviceLocationChannelId} | Updates ServiceLocationChannel
*KuntaApiClient.ServicesApi* | [**updateWebPageChannel**](docs/ServicesApi.md#updateWebPageChannel) | **PUT** /services/{serviceId}/webPageChannels/{webPageChannelId} | Updates WebPageChannel
*KuntaApiClient.SettingsApi* | [**createOrganizationSetting**](docs/SettingsApi.md#createOrganizationSetting) | **POST** /organizations/{organizationId}/settings/ | Creates organization setting
*KuntaApiClient.SettingsApi* | [**deleteOrganizationSetting**](docs/SettingsApi.md#deleteOrganizationSetting) | **DELETE** /organizations/{organizationId}/settings/{settingId} | Deletes an organization setting
*KuntaApiClient.SettingsApi* | [**findOrganizationSetting**](docs/SettingsApi.md#findOrganizationSetting) | **GET** /organizations/{organizationId}/settings/{settingId} | Finds organizations setting
*KuntaApiClient.SettingsApi* | [**listOrganizationSettings**](docs/SettingsApi.md#listOrganizationSettings) | **GET** /organizations/{organizationId}/settings/ | Lists organizations settings
*KuntaApiClient.SettingsApi* | [**updateOrganizationSetting**](docs/SettingsApi.md#updateOrganizationSetting) | **PUT** /organizations/{organizationId}/settings/{settingId} | Updates an organization setting
*KuntaApiClient.TilesApi* | [**findOrganizationTile**](docs/TilesApi.md#findOrganizationTile) | **GET** /organizations/{organizationId}/tiles/{tileId} | Finds organizations tile
*KuntaApiClient.TilesApi* | [**findOrganizationTileImage**](docs/TilesApi.md#findOrganizationTileImage) | **GET** /organizations/{organizationId}/tiles/{tileId}/images/{imageId} | Returns a single organiztion tile image
*KuntaApiClient.TilesApi* | [**getOrganizationTileImageData**](docs/TilesApi.md#getOrganizationTileImageData) | **GET** /organizations/{organizationId}/tiles/{tileId}/images/{imageId}/data | Returns an organization tile image data
*KuntaApiClient.TilesApi* | [**listOrganizationTileImages**](docs/TilesApi.md#listOrganizationTileImages) | **GET** /organizations/{organizationId}/tiles/{tileId}/images | Returns a list of organization tile images
*KuntaApiClient.TilesApi* | [**listOrganizationTiles**](docs/TilesApi.md#listOrganizationTiles) | **GET** /organizations/{organizationId}/tiles | Lists organizations tiles
*KuntaApiClient.WebPageChannelsApi* | [**createServiceWebPageChannel**](docs/WebPageChannelsApi.md#createServiceWebPageChannel) | **POST** /services/{serviceId}/webPageChannels | creates WebPageChannel
*KuntaApiClient.WebPageChannelsApi* | [**findServiceWebPageChannel**](docs/WebPageChannelsApi.md#findServiceWebPageChannel) | **GET** /services/{serviceId}/webPageChannels/{webPageChannelId} | finds WebPageChannel by webPageChannelId
*KuntaApiClient.WebPageChannelsApi* | [**listServiceWebPageChannels**](docs/WebPageChannelsApi.md#listServiceWebPageChannels) | **GET** /services/{serviceId}/webPageChannels | Lists WebPageChannels by serviceId
*KuntaApiClient.WebPageChannelsApi* | [**updateWebPageChannel**](docs/WebPageChannelsApi.md#updateWebPageChannel) | **PUT** /services/{serviceId}/webPageChannels/{webPageChannelId} | Updates WebPageChannel


## Documentation for Models

 - [KuntaApiClient.Address](docs/Address.md)
 - [KuntaApiClient.Announcement](docs/Announcement.md)
 - [KuntaApiClient.Attachment](docs/Attachment.md)
 - [KuntaApiClient.BadRequest](docs/BadRequest.md)
 - [KuntaApiClient.Banner](docs/Banner.md)
 - [KuntaApiClient.ElectronicChannel](docs/ElectronicChannel.md)
 - [KuntaApiClient.Event](docs/Event.md)
 - [KuntaApiClient.FileDef](docs/FileDef.md)
 - [KuntaApiClient.Forbidden](docs/Forbidden.md)
 - [KuntaApiClient.InternalServerError](docs/InternalServerError.md)
 - [KuntaApiClient.Job](docs/Job.md)
 - [KuntaApiClient.LocalizedValue](docs/LocalizedValue.md)
 - [KuntaApiClient.Menu](docs/Menu.md)
 - [KuntaApiClient.MenuItem](docs/MenuItem.md)
 - [KuntaApiClient.NewsArticle](docs/NewsArticle.md)
 - [KuntaApiClient.NotFound](docs/NotFound.md)
 - [KuntaApiClient.NotImplemented](docs/NotImplemented.md)
 - [KuntaApiClient.OntologyItem](docs/OntologyItem.md)
 - [KuntaApiClient.Organization](docs/Organization.md)
 - [KuntaApiClient.OrganizationService](docs/OrganizationService.md)
 - [KuntaApiClient.OrganizationSetting](docs/OrganizationSetting.md)
 - [KuntaApiClient.Page](docs/Page.md)
 - [KuntaApiClient.PhoneChannel](docs/PhoneChannel.md)
 - [KuntaApiClient.PrintableFormChannel](docs/PrintableFormChannel.md)
 - [KuntaApiClient.Service](docs/Service.md)
 - [KuntaApiClient.ServiceChannelAttachment](docs/ServiceChannelAttachment.md)
 - [KuntaApiClient.ServiceHour](docs/ServiceHour.md)
 - [KuntaApiClient.ServiceLocationChannel](docs/ServiceLocationChannel.md)
 - [KuntaApiClient.SupportContact](docs/SupportContact.md)
 - [KuntaApiClient.Tile](docs/Tile.md)
 - [KuntaApiClient.WebPage](docs/WebPage.md)
 - [KuntaApiClient.WebPageChannel](docs/WebPageChannel.md)


## Documentation for Authorization

 All endpoints do not require authorization.

