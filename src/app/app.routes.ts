import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Register } from './components/register/register';
import { Profile } from './components/profile/profile';

export const routes: Routes = [

    { 
        path: '', 
        redirectTo: 'home', 
        pathMatch: 'full' 
    },
    
    { 
        path: 'home', 
        component: Home 
    },
    { 
        path: 'profile', 
        component: Profile 
    },
    { 
        path: 'register', 
        component: Register 
    },

    { 
        path: '**', 
        redirectTo: 'home' 
    }
];
