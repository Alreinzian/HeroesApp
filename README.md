# **HeroesApp**

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

**HeroesApp** is a web application that uses Angular along with a simulated server based on `json-server` for data management. Additionally, **Angular Material** and **PrimeFlex** have been integrated to enhance the user interface and layout of the application.

---

## **Prerequisites**
Before running the project, make sure you have installed:  
- Node.js (Recommended version: 14 or higher)  
- Angular CLI installed globally  

**Command to install Angular CLI:**  
```sh
npm install -g @angular/cli
```  

---

## **Installation and Setup**

### **1. Clone the Repository**  
Run the following command in the terminal:  
```sh
git clone https://github.com/Alreinzian/DC-Project.git
cd DC-Project
```  

### **2. Install Dependencies**  
Install the required project dependencies:  
```sh
npm install
npm install json-server
```  

### **3. Start the Backend Server**  
Run this command to start the simulated server with `json-server`:  
```sh
npm run backend
```  

### **4. Start the Application**  
Run the Angular application with one of these commands:  
```sh
npm start
```  
Or alternatively:  
```sh
ng serve -o
```  

---

## **Angular Material Setup**

### **1. Install Angular Material**  
If not already installed, use the following command:  
```sh
ng add @angular/material
```  
Select a predefined theme and confirm the recommended options.  

### **2. Verify Styles in `angular.json`**  
Ensure that Angular Material styles are included in the `angular.json` file:  
```json
"styles": [
  "src/styles.css",
  "node_modules/@angular/material/prebuilt-themes/indigo-pink.css"
]
```  

### **3. Import Modules in Your Application**  
To use Angular Material components, import them into the required modules:  
```typescript
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
  ]
})
export class AppModule { }
```  

### **4. Example Usage in a Component**  
Example of a toolbar with a menu button:  
```html
<mat-toolbar color="primary">
  <button mat-icon-button>
    <mat-icon>menu</mat-icon>
  </button>
  <span>My Application</span>
</mat-toolbar>
```  

---

## **Using PrimeFlex**

### **1. Install PrimeFlex**  
Run the following command to install PrimeFlex:  
```sh
npm install primeflex
```  

### **2. Add PrimeFlex to `angular.json`**  
Include PrimeFlex in the `styles` section of `angular.json`:  
```json
"styles": [
  "src/styles.css",
  "node_modules/primeflex/primeflex.css"
]
```  

### **3. Example Usage in a Component**  
Example of a layout using PrimeFlex:  
```html
<div class="p-grid">
  <div class="p-col-12 p-md-6">
    <p>Column 1</p>
  </div>
  <div class="p-col-12 p-md-6">
    <p>Column 2</p>
  </div>
</div>
```  

---

## **Conclusion**
This project combines the power of Angular with:  
✔ **Angular Material** for a modern UI  
✔ **PrimeFlex** for a responsive layout  
✔ **json-server** to simulate an API without requiring a real backend  

Keep exploring and customizing the application according to your needs. Happy coding! 🚀  
