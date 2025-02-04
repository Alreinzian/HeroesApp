# **HeroesApp**

# **HeroesApp**

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

## **Development Server**

Follow these steps to set up and run the project:

1. **Clone the repository** from:  
   git clone https://github.com/Alreinzian/DC-Project.git
2. **Install dependencies**:  
   npm install
3. **Start the backend server**:  
   npm run backend
4. **Run the application**:  
   npm start  
   Or alternatively:  
   ng serve -o

This will automatically open the application in your default web browser.

---

# Angular Project with Angular Material and PrimeFlex

This project uses Angular Material and PrimeFlex to enhance the user interface and layout of elements in the application.

## 📦 Installation

Clone the repository and install the dependencies:

npm install

## 🚀 Angular Material Setup

Angular Material has been integrated to provide styled and responsive components.

### Installing Angular Material

To install Angular Material in the project:

ng add @angular/material

Select a predefined theme and confirm the recommended options.

In `angular.json`, make sure the Angular Material styles are included:

"styles": [
  "src/styles.css",
  "node_modules/@angular/material/prebuilt-themes/indigo-pink.css"
]

## Using Angular Material

In the modules where Material components are needed, import them:

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
  ]
})
export class AppModule { }

### Example usage in a component:

<mat-toolbar color="primary">
  <button mat-icon-button>
    <mat-icon>menu</mat-icon>
  </button>
  <span>My Application</span>
</mat-toolbar>

## 🎨 Using PrimeFlex

PrimeFlex is a CSS utility library that simplifies responsive design.

### Installing PrimeFlex

To install PrimeFlex:

npm install primeflex

In the `angular.json` file, add the following line to include PrimeFlex:

"styles": [
  "src/styles.css",
  "node_modules/primeflex/primeflex.css"
]

Now you can use PrimeFlex classes in your components for a flexible and responsive design.


## **Database (Local JSON Data)**

```json
{
  "usuarios": [
    {
      "id": 1,
      "usuario": "John Doe",
      "email": "john.doe@gmail.com"
    }
  ],
  "heroes": [
    {
      "id": "dc-batman",
      "superhero": "Batman",
      "publisher": "DC Comics",
      "alter_ego": "Bruce Wayne",
      "first_appearance": "Detective Comics #27",
      "characters": "Bruce Wayne"
    },
    {
      "id": "dc-superman",
      "superhero": "Superman",
      "publisher": "DC Comics",
      "alter_ego": "Kal-El",
      "first_appearance": "Action Comics #1",
      "characters": "Kal-El"
    },
    {
      "id": "dc-flash",
      "superhero": "Flash",
      "publisher": "DC Comics",
      "alter_ego": "Jay Garrick",
      "first_appearance": "Flash Comics #1",
      "characters": "Jay Garrick, Barry Allen, Wally West, Bart Allen"
    },
    {
      "id": "dc-green",
      "superhero": "Green Lantern",
      "publisher": "DC Comics",
      "alter_ego": "Alan Scott",
      "first_appearance": "All-American Comics #16",
      "characters": "Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"
    },
    {
      "id": "dc-arrow",
      "superhero": "Green Arrow",
      "publisher": "DC Comics",
      "alter_ego": "Oliver Queen",
      "first_appearance": "More Fun Comics #73",
      "characters": "Oliver Queen"
    },
    {
      "id": "dc-wonder",
      "superhero": "Wonder Woman",
      "publisher": "DC Comics",
      "alter_ego": "Princess Diana",
      "first_appearance": "All Star Comics #8",
      "characters": "Princess Diana"
    },
    {
      "id": "dc-martian",
      "superhero": "Martian Manhunter",
      "publisher": "DC Comics",
      "alter_ego": "J'onn J'onzz",
      "first_appearance": "Detective Comics #225",
      "characters": "Martian Manhunter"
    },
    {
      "id": "marvel-spider",
      "superhero": "Spider-Man",
      "publisher": "Marvel Comics",
      "alter_ego": "Peter Parker",
      "first_appearance": "Amazing Fantasy #15",
      "characters": "Peter Parker"
    },
    {
      "id": "marvel-iron",
      "superhero": "Iron Man",
      "publisher": "Marvel Comics",
      "alter_ego": "Tony Stark",
      "first_appearance": "Tales of Suspense #39",
      "characters": "Tony Stark"
    }
  ]
}
```

This JSON structure serves as the local database for the project.
