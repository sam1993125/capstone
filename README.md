# My Urban Dictionary 📚

![showcase](/public/showcase.gif)

Urbandictionary.com is a great place to search and learn English slangs from all over the place. While user can create their definitions of a term, it is impossible so far for registered users to collect their favorite slangs. My Urban Dictionary help users to solve the problems by provide personalize experience with urbandictionary.com. 

## Deliverables and Stretch Goals

**MVP**: As a user, I can:
- Create their own collection of slangs, a function that the original website lacks of, by searching API
- Comment on the slangs provided by the API
- Favorite and unfavorite the slangs from API
- Add slangs of their own choice from the form
 
**Stretch**: As a user, I can:
- Tag slangs into specific categories

## Models and Relationships / Wireframe

![db diagram](/public/dbdiagram.png)
![wireframe](/public/wireframe.png)

## Instructions for Testing/Updating Production

Start the server:

```console
rails s
```

Start the localhost React client:

```console
npm start --prefix client
```

Push to GitHub and Heroku:

```console
git add .
git commit -m 'message'
git push origin main
git push heroku main
```
