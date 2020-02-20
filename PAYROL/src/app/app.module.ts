import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {A11yModule} from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { NavigationComponent } from './navigation/navigation.component';

import { SecondComponent } from './second/second.component';
import { HttpClientModule, HttpClientJsonpModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HomeTabsComponent } from './home-tabs/home-tabs.component';
import { JoiningTabsComponent } from './joining-tabs/joining-tabs.component';
import { FamilyComponent } from './family/family.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { BankComponent } from './bank/bank.component';
import { EducationComponent } from './education/education.component';
import { AttendenceComponent } from './attendence/attendence.component';
import { PreviousEmployeementComponent } from './previous-employeement/previous-employeement.component';


import {DatePipe} from '@angular/common';
import { MedicalDeclarationComponent } from './medical-declaration/medical-declaration.component';
import { AcceptanceComponent } from './acceptance/acceptance.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PoliciesComponent } from './policies/policies.component';
import { ITDeclarationComponent } from './it-declaration/it-declaration.component';
import { PayslipComponent } from './payslip/payslip.component';
import { FinancialYearComponent } from './financial-year/financial-year.component';

import { SalaryComponent } from './salary/salary.component';
import { SalaryGroupComponent } from './salary-group/salary-group.component';
import { SalaryShowComponent } from './salary-show/salary-show.component';
import { FormulaSalaryComponent } from './formula-salary/formula-salary.component';
import { MapsComponent } from './maps/maps.component';
import { from } from 'rxjs';
import { BranchComponent } from './branch/branch.component';
import { HolidaylistComponent } from './holidaylist/holidaylist.component';
import { ApprisalComponent } from './apprisal/apprisal.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ShowEmployeeComponent } from './show-employee/show-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { HRDetailsComponent } from './hr-details/hr-details.component';


import { ShowEmployee1Component } from './show-employee1/show-employee1.component';
import { GeneralComponent } from './general/general.component';
import { WorkpatternComponent } from './workpattern/workpattern.component';
import { EditPersonalComponent } from './component/edit-personal/edit-personal.component';
import { EditFamilyComponent } from './component/edit-family/edit-family.component';
import { EditEducationDetailsComponent } from './component/edit-education-details/edit-education-details.component';
import { EditPreviousemployementDetailsComponent } from './component/edit-previousemployement-details/edit-previousemployement-details.component';
import { EditItdeclarationComponent } from './component/edit-itdeclaration/edit-itdeclaration.component';
import { EditMedicaldeclarationComponent } from './component/edit-medicaldeclaration/edit-medicaldeclaration.component';
import { EditBankDetailsComponent } from './component/edit-bank-details/edit-bank-details.component';
import { EditAcceptanceDetailsComponent } from './component/edit-acceptance-details/edit-acceptance-details.component';
import { MonthAttendenceComponent } from './month-attendence/month-attendence.component';

import { Year2021Component } from './financialyear1/year2021/year2021.component';
import { AprilComponent } from './month/april/april.component';
import { MayComponent } from './month/may/may.component';
import { JuneComponent } from './month/june/june.component';
import { JulyComponent } from './month/july/july.component';
import { AugustComponent } from './month/august/august.component';
import { SeptemberComponent } from './month/september/september.component';
import { OctoberComponent } from './month/october/october.component';
import { NovemberComponent } from './month/november/november.component';
import { DecemberComponent } from './month/december/december.component';
import { JanuaryComponent } from './month/january/january.component';
import { FebruaryComponent } from './month/february/february.component';
import { MarchComponent } from './month/march/march.component';
import { AttendenceMonthYearComponent } from './attendence-month-year/attendence-month-year.component';
import { Year2020Component } from './financialyear1/year2020/year2020.component';
import { YearmonthpayslipComponent } from './yearmonthpayslip/yearmonthpayslip.component';
import { April1Component } from './monthpayslip1/april1/april1.component';
import { May1Component } from './monthpayslip1/may1/may1.component';
import { June1Component } from './monthpayslip1/june1/june1.component';
import { July1Component } from './monthpayslip1/july1/july1.component';
import { August1Component } from './monthpayslip1/august1/august1.component';
import { September1Component } from './monthpayslip1/september1/september1.component';
import { October1Component } from './monthpayslip1/october1/october1.component';
import { November1Component } from './monthpayslip1/november1/november1.component';
import { December1Component } from './monthpayslip1/december1/december1.component';
import { January1Component } from './monthpayslip1/january1/january1.component';
import { February1Component } from './monthpayslip1/february1/february1.component';
import { March1Component } from './monthpayslip1/march1/march1.component';
import { Yearpayslip2020Component } from './yearpayslip/yearpayslip2020/yearpayslip2020.component';
import { Yearpayslip2021Component } from './yearpayslip/yearpayslip2021/yearpayslip2021.component';
import { DocumentComponent } from './component/document/document.component';
import { Doumentyear2020Component } from './component/doumentyear2020/doumentyear2020.component';
import { Doumentyear2021Component } from './component/doumentyear2021/doumentyear2021.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { PersonalComponent } from './personal/personal.component';





@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    Year2020Component,
    SecondComponent,
    LoginComponent,
    HomeTabsComponent,
    JoiningTabsComponent,
    FamilyComponent,
    PersonalDetailsComponent,
    BankComponent,
    EducationComponent,
    AttendenceComponent,
    PreviousEmployeementComponent,
    MedicalDeclarationComponent,
    AcceptanceComponent,
    AboutUsComponent,
    PoliciesComponent,
    ITDeclarationComponent,
   
    PayslipComponent,
    FinancialYearComponent,
   
    SalaryComponent,
    SalaryGroupComponent,
    SalaryShowComponent,
    FormulaSalaryComponent,
    MapsComponent,
    BranchComponent,
    SeptemberComponent,
    HolidaylistComponent,
    ApprisalComponent,
    AppointmentComponent,
    ForgotPasswordComponent,
    ShowEmployeeComponent,
    AddEmployeeComponent,
    HRDetailsComponent,

    AprilComponent,
    ShowEmployee1Component,

  
    GeneralComponent,

  
    WorkpatternComponent,

  
    EditPersonalComponent,

  
    EditFamilyComponent,

  
    EditEducationDetailsComponent,

  
    EditPreviousemployementDetailsComponent,

  
    EditItdeclarationComponent,

  
    EditMedicaldeclarationComponent,

  
    EditBankDetailsComponent,

  
    EditAcceptanceDetailsComponent,

  
    MonthAttendenceComponent,

  
   

  
    Year2021Component,

  
    AprilComponent,

  
    MayComponent,

  
    JuneComponent,

  
    JulyComponent,

  
    AugustComponent,

  
    SeptemberComponent,

  
    OctoberComponent,

  
    NovemberComponent,

  
    DecemberComponent,

  
    JanuaryComponent,

  
    FebruaryComponent,

  
    MarchComponent,

  
    AttendenceMonthYearComponent,

  
    YearmonthpayslipComponent,

  
    April1Component,

  
    May1Component,

  
    June1Component,

  
    July1Component,

  
    August1Component,

  
    September1Component,

  
    October1Component,

  
    November1Component,

  
    December1Component,

  
    January1Component,

  
    February1Component,

  
    March1Component,

  
    Yearpayslip2020Component,

  
    Yearpayslip2021Component,

  
    DocumentComponent,

  
    Doumentyear2020Component,

  
    Doumentyear2021Component,

  
    RegistrationComponent,

  
    PersonalComponent,

  
   
  


  
  ],
  imports: [
    HttpClientModule,
 BrowserModule ,
 
    FormsModule,
    ReactiveFormsModule,
   
    HttpClientJsonpModule,
   
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatCheckboxModule,
    A11yModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,
    ReactiveFormsModule,
    FormsModule,
    AgmCoreModule.forRoot
    ({
      apiKey:'',
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
