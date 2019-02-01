# GlucoseTracker
Learn how to create a Glucose Tracker App using Angular 7 with Material Design.

_*This repository contains the finished project.*_

### Note
This project is loosely based on Angular's [Tour of Heroes tutorial](https://angular.io/tutorial)

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


# Step 3 - Displaying a List
We need to create a mock list of glucose levels. Usually you get this data from a remote server, but for now we will use a static list.
* Create a file named `mock-tems.ts` inside the `src/app` folder.

Copy paste the following
```typescript
import { Glucose } from './glucose';

export const ITEMS: Glucose[] = [
  {
    id: 1,
    userId: 1,
    level: 7.5,
    categoryId: 2,
    tags: '',
    published: 1,
    added: '2019-01-01 10:00:00'

  },
  {
    id: 2,
    userId: 1,
    level: 4.8,
    categoryId: 2,
    tags: '',
    published: 1,
    added: '2019-01-01 11:00:00'

  },
  {
    id: 3,
    userId: 1,
    level: 6.2,
    categoryId: 2,
    tags: '',
    published: 1,
    added: '2019-01-01 12:00:00'

  },
  {
    id: 4,
    userId: 1,
    level: 3.9,
    categoryId: 2,
    tags: '',
    published: 1,
    added: '2019-01-02 13:00:00'

  },
  {
    id: 5,
    userId: 1,
    level: 4.5,
    categoryId: 2,
    tags: '',
    published: 1,
    added: '2019-01-03 14:00:00'

  },
  {
    id: 6,
    userId: 1,
    level: 7,
    categoryId: 2,
    tags: '',
    published: 1,
    added: '2019-01-03 15:00:00'

  },
  {
    id: 7,
    userId: 1,
    level: 6.2,
    categoryId: 2,
    tags: '',
    published: 1,
    added: '2019-01-04 10:00:00'

  },
  {
    id: 8,
    userId: 1,
    level: 7.5,
    categoryId: 2,
    tags: '',
    published: 1,
    added: '2019-01-05 17:00:00'

  },
  {
    id: 9,
    userId: 1,
    level: 8.5,
    categoryId: 2,
    tags: '',
    published: 1,
    added: '2019-01-06 10:00:00'

  },
  {
    id: 10,
    userId: 1,
    level: 7.5,
    categoryId: 2,
    tags: '',
    published: 1,
    added: '2019-01-08 10:00:00'

  }
];
```
_Note that I added `userId` & `categoryId`, you can ignore it for now._

Open the GlucoseListComponent class file and import the mock ITEMS.
(`src/app/glucose-list/glucose-list.component.ts`)


`import { ITEMS } from '../mock-items';`

Inside the same file, define a component property called `items` to expose ITEMS array for binding.
```typescript
export class GlucoseListComponent implements OnInit {
  items = ITEMS;
  constructor() { }

  ngOnInit() {
  }
}
```

# UI
_Optional_

Before we move further it's time to start thinking about the User Interface for our Glucose Tracker. Let's use Angular Material.
* Install Angular Material, Angular CDK and Angular Animations. I'm using NPM

`npm install --save @angular/material @angular/cdk @angular/animations`

* Include a Theme

  This step is required to apply all core and theme styles to the Application
  
Open the `styles.css` file located in the root `src` and add the following

`@import "~@angular/material/prebuilt-themes/deeppurple-amber.css";`

#### Display Items in a List view

Open the `glucose-list.component.html` file and add the following
```angular2
<mat-toolbar>
  <h1>Glucose Levels</h1>
</mat-toolbar>

<mat-list>

  <mat-list-item
    [class.mat-elevation-z1]="true"
    *ngFor="let item of items" (click)="show($event)">
    <h3 matLine>
      {{ item.level }}
    </h3>
    <p mat-line>
     {{ item.added | date }}
    </p>

  </mat-list-item>

</mat-list>

```

At this point we should have glucose data inside a list.

Your App Module should look like this as well
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { GlucoseListComponent } from './glucose-list/glucose-list.component';
import { MatToolbarModule, MatListModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    GlucoseListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

# Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
