# Women World Wide Dev 🗺👩🏾‍💻👩🏿‍💻👩🏻‍💻👩🏽‍💻👩🏼‍💻

[WomenWorldWide.dev](https://WomenWorldWide.dev) is a map of coding and tech groups around the world for all who identify as women. 

This map represents just a tiny sliver of the great organizations that share this focus. 

If you know of a local group that should be on the map, please submit a pull request, so that we can be sure to add it!

## Running the repo locally
If you'd like to submit a pull request, you can run the project locally:

```
git clone git@github.com:prisma/women-world-wide.git
cd women-world-wide
yarn 
yarn develop
```

## Contributions 🤝
We are actively seeking to add additional organizations for the map. 

There are three components to each contribution: 

* the country 
* the city
* the organization 

When adding a new group, you can add it into an existing city and/or country, or you can add the necessary city and country. You can take any of these steps in the relevant file. 

### Adding a country 
If the country where your organization is based is not listed on the page, you can add a country to the map. 

To add a country to the map, you should edit the [`src/data/countries.json`](.src/data/countries.json) file. In that file, each country is listed alphabetically with the country name, which is displayed, and the slug, which is used for reference and is always lowercase. 

To add a country, find the place in the alphabetized list and add both slug and the country name. For example if you wanted to add Germany, it would look like the following:
```
 {
    "slug": "germany",
    "name": "Germany"
  },
```

For countries that have a name consisting of multiple words, you have two options for the slug. You can either use a common acronym, like the "United States" example:

```
 {
    "slug": "usa",
    "name": "United States"
  }
```
or combine the names, lower-cased, with a dash between them, like the "Czech Republic" example:

```

  {
    "slug": "czech-republic",
    "name": "Czech Republic"
  },
  ```

### Adding a city
If the city where your organization is based is not listed on the page, you can add the city to the map. 

To add a city to the map, you should edit the [`src/data/cities.json`](.src/data/cities.json) file. 

Each city entry in the file is composed of multiple parts:

* the name of the city, which should be capitalized
* the city's slug, which should be lower-case
* the country slug, which should match the slug in the `countries.json` file
* the location on the header map indicated in pixels

 {
    "name": "Berlin",
    "slug": "berlin",
    "country": "germany",
    "top": 212,
    "left": 484
  },

To add a city, find the place in the alphabetized list and add all of the necessary components to plot the city roughy in the correct area on the map. You may need to try a couple of option in your local version to get the location as close as possible to the correct geographic location. 


### Adding an organization 

To add your group, please add each of the organization's locations as a separate JSON file in the [`src/data/orgs`](./src/data/orgs) directory. 

The file should end with a `.json` extension. 

You can see an example below (using the *Women Who Code Atlanta* organization):

```
{
  "image": "https://pbs.twimg.com/profile_images/1016008941757718528/tCnG03WW_400x400.jpg",
  "name": "Women Who Code Atlanta",
  "country": "usa",
  "city": "atlanta",
  "topics": ["Tech"],
  "mainLink": "https://www.meetup.com/Women-Who-Code-Atlanta/",
  "secondaryLinks": [
    {
      "name": "Twitter",
      "url": "https://twitter.com/wwcatl"
    },
    {
      "name": "Slack",
      "url": "https://wwcatl.typeform.com/to/WKy2an"
    }
  ]
}
```

A submitted organization should have the following: 
* Filename: The filename should be the organization name followed by the group's location. For example: `women-who-code-atlanta.json`
* `image`: A link to the organization's image 
* `name`: The name of the organization (including the branch location)
* `country`: You should use the country slug here
* `city`: You should use the city slug here. *If your local organization branch just has a country, but not a city, this section can be skipped*
* `topics`: If the group focuses on a specfic technology, you can add more details about the language or focus here 
* `mainLink`: This is the main link where your organization lives. Often this is a meetup link, but it could be the group's homepage, or any other place where readers can get additional information 
* `secondaryLink`: These are additional links that correspond to an organization — for example if the group has a specific twitter, etc 

## Maintenance 💪
If you see an inactive (without activity for over six months) organization on this map, please open up an issue, so that the map can remain as current and helpful as possible. 




Made with ❤️ by [Prisma](prisma.io)
