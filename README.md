# wamazon
ngxs state management and also modularization



# START UP

### PostGres Database (on linux) :

  - sign in to psql CLI
```
      $ sudo -u postgres psql postgres
```
  - insert sql file with full-path (path can be copied by right clicking file in your text-editor)
  - the seed file is in 'pg-db'(don't forget the ;)
  - then quit psql
```  
      # \i <full-path>/wamazon-db.sql;
      # \q
```


### Node API :
```
      $ cd node-api
      $ node index.js
```


### Angular UI :
```
      $ cd angular-ui
      $ ng serve
```
