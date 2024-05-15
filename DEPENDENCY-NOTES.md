Where possible, dependencies are frequently updated to their latest versions.
In some cases, however, this is not feasible or does not provide sufficient
return on the necessary investment to do a major version upgrade. The following
dependencies are currently fixed to older versions:

* **react** and **react-dom**: React is currently tracking the latest v16
  versions, as updating to 18 requires significant investment.
* **@testing-library/react**: The react testing library is currently tracking
  the lastest v12 versions because v13 required React 18.
* **react-tooltip**: The react-tooltip library is currently tracking the latest
  v4 versions because v5 requires React 18.
* **react-table**: The react-table library is currently tracking the latest v6
  versions because v7 and v8 are very different and migration is very poorly
  documented (or not documented at all).
* **eslint**: ESLint 9.0 changes the configuration format. ESLint can be
  upgraded when the team has time to update the configuration.

In addition, `overrides` are defined in `package.json` for transitive
depencies that are locked to vulnerable versions. These overrides are:

* **semver**: Introduced by dependencies of **fhirclient**.

These overrides should be periodically reviewed to determine if they are still
needed.