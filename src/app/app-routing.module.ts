import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';// để sd ngFor ngIf...
import { Routes, RouterModule } from '@angular/router';

// import { ContactsComponent } from './contacts/contacts.component';
import { ContactsModule } from './contacts/contacts.module';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routesConfig: Routes = [
    // { path: 'contacts', component: ContactsComponent},// se viet rieng ContactModule nên se k dung ở day nữa
    // { path: 'detail', component: ContactDetailComponent},
    { path: 'detail/:id/:name/:phoneNumber', component: ContactDetailComponent },
    { path: '', redirectTo: '/contacts',pathMatch: 'full'},
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routesConfig),
        CommonModule,
        ContactsModule
    ],
    declarations: [
        // ContactsComponent,
        ContactDetailComponent,
        PageNotFoundComponent,
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }
