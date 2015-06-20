![angular-express-header](https://cloud.githubusercontent.com/assets/1859381/8266502/d94e93ce-1731-11e5-9b9d-9b9e58c5369f.png)

[Angular Express](https://github.com/angular-express/angular-express) boilerplate to create a reusable Angular Express component.

## How to get started

Ensure the [Angular Express CLI tool](https://github.com/angular-express/ngx-cli) is installed:

```bash
$ npm install -g ngx-cli
```

Create a new component directory:

```bash
$ mkdir new-component
$ cd new-component
```

Initialize the component boilerplate:

```bash
$ ngx init -b component
```

Visit the [AngularJS Express](https://github.com/angular-express/angular-express) page to learn more about boilerplates and components.

## How to publish the component

Simply push the component to a GitHub repository.


## How to use the component in a project

From a project root:

```bash
$ ngx install github-username/github-repository-name
```

This will copy all files in the `ngx` directory of the component to the `src/components/github-repository-name` directory.

To manually specify the destination:

```bash
$ ngx install github-username/github-repository-name src/components/custom-component-name
```

## The ngx directory

The `ngx` directory contains all files that are scaffolded when the component is installed.

This allows other files to be included in the repository e.g. `README.md` without including them in an actual install.

## License

[MIT](LICENSE)

## Change log

### v1.0.0

- Added modular structure
