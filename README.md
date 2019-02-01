# GlucoseTracker
Learn how to create a Glucose Tracker App using Angular 7.

_*This repository contains the finished project.*_

### Note
This project loosely based on Angular's Tour of Heroes tutorial.

### Level
_**Intermediate**_


# Step by step tutorial
#### Step 1 - Initial Project
1. In the command line navigate to a folder where you want to create the App <br>
``` $ cd code ```

1. Create a new Angular App using the CLI command `ng new` and provide the name of the App.<br>
` ng new glucose-tracker `

1. Accept the defaults in the command line.

**This is what happened:**
* A new workspace was created with root folder `glucose-tracker`
* An initial skeleton app was created in the `src` folder
* App configuration files were created
* e2e folder was created. For more on how end-to-end testing, visit [Protractor - end to end testing for Angular](https://www.protractortest.org)

We are ready to move to the next step.

# Step 2 - Create the main component
We need to create our first and main component to display glucose information, this must be placed inside the application shell.

Using the CLI, generate a new component named `glucose-list`

`ng generate component glucose-list`

The CLI creates a new folder inside the _src/app_ folder, and generates the three files of the GlucoseListComponent.

### Show the GlucoseListComponent view
You must add the component to the template of the AppComponent. This is an angular element selector created inside the `glucose-list-component.ts`
file. Inside such file we have the following.

```typescript
@Component({
  selector: 'app-glucose-list',
  templateUrl: './glucose-list.component.html',
  styleUrls: ['./glucose-list.component.css']
})
```
You could rename the selector if you wish. For now we will continue using `app-glucose-list`.
* Open the `src/app/app.component.html` file and add the selector as shown below.

`<app-glucose-list></app-glucose-list>`

### Create the Glucose class
Create a file named `glucose.ts` inside the `src/app` folder. This will be our Glucose class.
```typescript
export class Glucose {

  id: number;
  level: number;
  tags: string;
  published: number;
  added: string;

}
```
Return to the GlucoseListComponent and import the Glucose class. At the top of the `glucose-list.component.ts` file add

`import { Glucose } from '../glucose';`

We are now ready to move to the next step and start displaying a list of Glucose levels, exciting times :).


# Step 3 - Display a List
We need to create a mock list of glucose levels. Usually you get this data from a remote server, but for now we will use a static list.


# Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
