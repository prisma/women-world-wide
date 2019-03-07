# Women World Wide Dev 

Women World Wide Dev is a map of women (and non-binary) focused organizations around the world dedicated to helping women in the tech industry. This map represents just a tiny sliver of the great organizations with this focus. We would love to continue to build out this map, and if you know of a local group you'd like to add, please submit a pull request. 

## Running the map locally 
If you'd like to submit a pull request, you can run the easily run the project locally:

```
$ git clone git@github.com:prisma/women-world-wide.git
$ cd women-world-wide
$ yarn 
$ yarn develop
```

## Contributions 
We are actively seeking additional organizations for the map. To add your group, please add it as a seperate JSON file in the `src/data/orgs` directory. You can see an example below (using the Women Who Code Atlanta organization):


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

A submitted organization should have the following
* **Filename**: The filename should be the organization name followed by the group's location. For example: `women-who-code-atlanta.json`
* **Image**: A link to the organizations image 
* **Name**: The name of the organization (including the branch location)
* **Country**
* **City**
* **Topics**: If the group focuses on a specfic technology, you can add more details about the language or focus here. 
* **Main Link**: This is the main link where your organization lives. Often this is a meetup link, but it could be the group's homepage, or anything other place where readers can get additional information. 
* **Secondary Links**: These are additional links that correspond to an organization — for example if they have a specific twitter, etc. 



