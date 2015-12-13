# Flotr
SFWR ENG 4HC3 Milestone 3

Check out the milestone design document [here](https://drive.google.com/file/d/0BwWXFCnjmTYyMlk5R2xLY2NnM00/view?usp=sharing)

## To get started:
* Clone the repo
* cd into the repo
* `bundle install`
* If you have trouble installing `pg`, try this:
```
sudo su
$ env ARCHFLAGS="-arch x86_64" gem install pg
```
* `rails server`
* To run migrations: `rake db:migrate`
* To get the `paperclip` gem working, you need to install imagemagick: `brew install imagemagick` (for Mac's)
* head over to `localhost:3000` on your browser ✨

## Contributing

Sublime Text Settings (Sublime Text -> Preferences -> Settings-User) :
```
{
  "ensure_newline_at_eof_on_save": true,
  "tab_size": 2,
  "translate_tabs_to_spaces": true,
  "trim_trailing_white_space_on_save": true
}
```

