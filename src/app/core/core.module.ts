import { NgModule } from '@angular/core';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { HttpClientModule } from '@angular/common/http';
import { NgxPayPalModule } from 'ngx-paypal';
// import { NgxStripeModule } from 'ngx-stripe';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';



@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    NgxPayPalModule,
    // NgxStripeModule.forRoot(environment.stripe_publishable_key),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideAnalytics(() => getAnalytics()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideStorage(() => getStorage()),
  ],
  providers: [
    ScreenTrackingService,
    UserTrackingService,
  ]
})
export class CoreModule { }
