# Opening hours calendar app

Application developed via cra + ts + jest + css-modules and intended to fetch and display restaurant opening hours.

Public link from [Netlify](https://opening-hours-calendar.netlify.app/).

## Get started
- Install dependencies `yarn install`
- Configure your editor in accordance to linters used in project: `eslint`, `stylelint`, `prettier`

notice: before start, much better to have pre-installed plugins for eslint, stylelint and prettier in your editor +
enabled `format on save`, so you can enjoy local development process with auto-formatting code in place

## Main commands
- Develop mode `yarn start`
- Production build `yarn build`
- Run linters and check your code style `yarn lint`
- Auto-format your code according to rules described in linters' configs `prettier`
- Run json-server to interact with api locally `yarn json-server` (it can be opened on `localhost:3001/days`)
- Run tests `yarn test`

## linters
- eslint for typescript
- stylelint
- prettier
- pre-push hook that runs the following command: `yarn lint`

Allows us to keep code clean and follow common standards of code writing in modern react + typescript

## api
Locally API is available with `json-server` via endpoint called `days` and
posted here: `localhost:3001/days`.

Publicly - it's just `db.json` [data](https://opening-hours-calendar-api.netlify.app/api/db.json) placed in separate repo.

Full data response:

```
{
    "monday": [],
    "tuesday": [
        { "type": "open", "value": 36000 },
        { "type": "close", "value": 64800 }
    ],
    "wednesday": [],
    "thursday": [
        { "type": "open", "value": 36000 },
        { "type": "close", "value": 64800 }
    ],
    "friday": [{ "type": "open", "value": 36000 }],
    "saturday": [
        { "type": "close", "value": 3600 },
        { "type": "open", "value": 36000 }
    ],
    "sunday": [
        { "type": "close", "value": 3600 },
        { "type": "open", "value": 43200 },
        { "type": "close", "value": 75600 }
    ]
}
```

note: to interact with api locally you should run `json-server`!

## Other tools in use
- axios
- json-server
- days.js
- husky
- prettier

## TODO

 - Improve types (make it much readable, generic, specific)
 - Improve error handling
 - Use ramda and immer for immutability when modifying data

## License

```(c)
Copyright (C) (2021) Herman Semykozov.

All rights reserved - Do Not Redistribute
```
